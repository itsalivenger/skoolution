import { NextResponse } from 'next/server';
import clientPromise from "@/app/utils/db_Connection";
import { ObjectId } from 'mongodb';

/* POST  ➜  create a user with θ = 0 for every competence */
export async function POST(request) {
    try {
        const { name, filiere } = await request.json();
        if (!name || !filiere)
            return NextResponse.json({ error: 'name & filiere required' }, { status: 400 });

        /* ── get every competence id ── */
        const client = await clientPromise;
        const db = client.db();                  // default DB
        const matieres = db.collection('Matiere');

        const allCompetences = await matieres.aggregate([
            { $unwind: '$chapitres' },
            { $unwind: '$chapitres.competences' },
            {
                $replaceRoot: { newRoot: '$chapitres.competences' }, // flatten
            },
            { $project: { _id: 1 } },                              // only id
        ]).toArray();

        /* θ object : { competenceId: 0 } */
        const thetas = {};
        allCompetences.forEach(c => {
            thetas[c._id.toString()] = 0;
        });

        /* ── insert user ── */
        const users = db.collection('User');
        const { insertedId } = await users.insertOne({
            name,
            filiere,
            thetas,               // object keyed by competenceId
        });

        return NextResponse.json({ _id: insertedId }, { status: 201 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

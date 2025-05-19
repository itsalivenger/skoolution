import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add MONGODB_URI to your .env");
}

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;

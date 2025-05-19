'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { faSquareRootVariable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ICertificatePaperOutline,
  IExamMultipleChoiceOutline,
  IExamQualificationOutline,
} from 'healthicons-react';
import { Brain } from 'lucide-react';
import UserInfoPopup from './User_Info_popup';      // ← adjust path if needed

export default function Math() {
  /* ─────────────────── state / router ─────────────────── */
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  /* ─────────────────── handlers ────────────────────────── */
  const handleSubmit = ({ name, filiere }) => {
    console.log({ name, filiere });     // TODO: call your API
    router.push('/subjects/math/competences');
  };

  /* ─────────────────── render ──────────────────────────── */
  return (
    <section className="px-0 md:px-5 py-5 flex flex-col gap-6">
      {/* title */}
      <div className="flex flex-col gap-1.5">
        <h1 className="flex gap-1 font-bold text-3xl">
          Mathématiques
          <FontAwesomeIcon icon={faSquareRootVariable} className="w-8" />
        </h1>
        <p className="text-neutral-500 text-[13px] sm:text-sm">
          Défie‑toi avec des exercices et des quiz adaptés.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* card 1 – gated by popup */}
        <button
          onClick={() => setShowPopup(true)}
          className="flex flex-col shadow-[3px_3px_10px_0px_rgba(0,0,0,0.1)] rounded-xs overflow-hidden focus:outline-none"
        >
          <div className="bg-white flex justify-center items-center h-[160px]">
            <Brain size={90} strokeWidth={1.5} className="text-[#007655]" />
          </div>
          <div className="bg-[#007655] text-white p-3 py-5 flex flex-col gap-0.5">
            <h3 className="font-semibold">Compétences</h3>
            <p className="text-sm text-neutral-200">52 Compétence</p>
          </div>
        </button>

        {/* card 2 – normal navigation */}
        <Link
          href="/subjects/math/lessons"
          className="flex flex-col shadow-[3px_3px_10px_0px_rgba(0,0,0,0.1)] rounded-xs overflow-hidden"
        >
          <div className="bg-white flex justify-center items-center h-[160px]">
            <IExamMultipleChoiceOutline width={90} height={90} className="text-[#4000A6]" />
          </div>
          <div className="bg-[#4000A6] text-white p-3 py-5 flex flex-col gap-0.5">
            <h3 className="font-semibold">Leçons</h3>
            <p className="text-sm text-neutral-200">12 Leçon</p>
          </div>
        </Link>

        {/* card 3 */}
        <Link
          href="#"
          className="flex flex-col shadow-[3px_3px_10px_0px_rgba(0,0,0,0.1)] rounded-xs overflow-hidden"
        >
          <div className="bg-white flex justify-center items-center h-[160px]">
            <IExamQualificationOutline width={90} height={90} className="text-[#273B45]" />
          </div>
          <div className="bg-[#273B45] text-white p-3 py-5 flex flex-col gap-0.5">
            <h3 className="font-semibold">Contrôles</h3>
            <p className="text-sm text-neutral-200">18 Contrôle</p>
          </div>
        </Link>

        {/* card 4 */}
        <Link
          href="#"
          className="flex flex-col shadow-[3px_3px_10px_0px_rgba(0,0,0,0.1)] rounded-xs overflow-hidden"
        >
          <div className="bg-white flex justify-center items-center h-[160px]">
            <ICertificatePaperOutline width={90} height={90} className="text-[#306D8B]" />
          </div>
          <div className="bg-[#306D8B] text-white p-3 py-5 flex flex-col gap-0.5">
            <h3 className="font-semibold">Examens nationaux</h3>
            <p className="text-sm text-neutral-200">25 Examen</p>
          </div>
        </Link>
      </div>

      {/* popup */}
      {showPopup && (
        <UserInfoPopup
          onSubmit={handleSubmit}
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  );
}

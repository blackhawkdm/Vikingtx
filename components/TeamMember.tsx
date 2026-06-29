"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
}

export default function TeamMember({ name, title, bio, imageSrc }: TeamMemberProps) {
  const [flipped, setFlipped] = useState(false);

  // On touch devices, tap toggles the flip (back to the photo); desktop uses hover.
  const handleTap = () => {
    if (window.matchMedia("(hover: none)").matches) setFlipped((f) => !f);
  };

  return (
    <div
      className="flip-card group relative grid rounded-xl overflow-visible cursor-pointer focus-within:outline-none"
      tabIndex={0}
      role="button"
      aria-label={`${name} — hover or tap to read bio`}
      onClick={handleTap}
    >
      <div className={`flip-card-inner relative w-full min-h-[420px]${flipped ? " is-flipped" : ""}`}>

        {/* ── FRONT ── */}
        <div className="flip-card-face relative overflow-hidden rounded-xl shadow-md">
          {/* Photo */}
          <div className="absolute inset-0">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`${name}, ${title}`}
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 bg-viking-light flex items-center justify-center">
                <svg className="w-24 h-24 text-viking-gray/20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>

          {/* Gradient overlay + name */}
          <div className="absolute inset-0 bg-gradient-to-t from-viking-black via-viking-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-extrabold text-white text-lg tracking-tight leading-tight">{name}</h3>
            <p className="text-viking-accent text-sm font-semibold">{title}</p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="flip-card-face flip-card-back relative flex flex-col justify-between overflow-hidden rounded-xl bg-viking-grey p-7 shadow-xl">
          <div>
            <div className="w-full h-1 bg-viking-accent rounded-full mb-5" />
            <h3 className="font-extrabold text-white text-xl tracking-tight mb-1.5">{name}</h3>
            <p className="text-viking-accent text-sm font-bold mb-5 uppercase tracking-wide">{title}</p>
            <p className="text-white/75 text-sm leading-relaxed">{bio}</p>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <a
              href="tel:4323371900"
              className="inline-flex items-center gap-2 bg-viking-accent hover:bg-viking-accent-dark text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 432-337-1900
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

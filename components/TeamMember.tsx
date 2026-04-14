"use client";

import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
  yearsExp?: string;
}

export default function TeamMember({ name, title, bio, imageSrc, yearsExp }: TeamMemberProps) {
  return (
    <div
      className="flip-card group relative h-[420px] rounded-xl overflow-visible cursor-pointer focus-within:outline-none"
      tabIndex={0}
      role="button"
      aria-label={`${name} — hover or tap to read bio`}
    >
      <div className="flip-card-inner relative w-full h-full">

        {/* ── FRONT ── */}
        <div className="flip-card-face absolute inset-0 rounded-xl overflow-hidden shadow-md">
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
            {yearsExp && (
              <span className="inline-block bg-viking-accent text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2 uppercase tracking-wide">
                {yearsExp}
              </span>
            )}
            <h3 className="font-black text-white text-lg tracking-tight leading-tight">{name}</h3>
            <p className="text-viking-accent text-sm font-semibold">{title}</p>
          </div>

          {/* Flip hint */}
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white/70 text-[10px] font-semibold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 4v8m0 0l4-4m-4 4l-4-4" />
            </svg>
            Hover
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="flip-card-face flip-card-back absolute inset-0 rounded-xl overflow-hidden bg-viking-black shadow-xl flex flex-col justify-between p-7">
          <div>
            <div className="w-10 h-1 bg-viking-accent rounded-full mb-5" />
            <h3 className="font-black text-white text-xl tracking-tight mb-1">{name}</h3>
            <p className="text-viking-accent text-sm font-bold mb-5 uppercase tracking-wide">{title}</p>
            {yearsExp && (
              <p className="text-viking-steel text-xs font-semibold uppercase tracking-widest mb-4">{yearsExp}</p>
            )}
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

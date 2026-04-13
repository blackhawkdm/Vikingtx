import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
}

export default function TeamMember({ name, title, bio, imageSrc }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg border border-viking-border overflow-hidden">
      <div className="relative h-64 bg-viking-light flex items-center justify-center">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${name}, ${title}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="text-viking-gray/20">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-black text-viking-black text-lg tracking-tight">{name}</h3>
        <p className="text-viking-accent text-sm font-semibold mb-3">{title}</p>
        <p className="text-viking-gray text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

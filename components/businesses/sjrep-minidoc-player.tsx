'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import type { SjrepMinidoc } from '@/lib/san-jose-real-estate-photos';

interface Props {
  video: SjrepMinidoc;
  sizes: string;
  frameClassName?: string;
  buttonClassName?: string;
}

// Shows the local poster until the visitor asks for the film, so YouTube only loads on demand.
export function SjrepMinidocPlayer({
  video,
  sizes,
  frameClassName = '',
  buttonClassName = '',
}: Props) {
  const [playing, setPlaying] = useState(false);
  const label = `${video.title}, ${video.place} — listing mini-documentary`;

  return (
    <div className={`relative aspect-video overflow-hidden bg-black ${frameClassName}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${label} (${video.length})`}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={video.poster}
            alt=""
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/5" />
          <span
            className={`absolute bottom-4 left-4 grid h-14 w-14 place-items-center rounded-full shadow-lg transition-transform group-hover:scale-110 sm:bottom-5 sm:left-5 sm:h-16 sm:w-16 ${buttonClassName}`}
          >
            <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" aria-hidden="true" />
          </span>
          <span className="absolute right-3 top-3 bg-black/75 px-2 py-1 text-xs font-semibold text-white">
            {video.length}
          </span>
        </button>
      )}
    </div>
  );
}

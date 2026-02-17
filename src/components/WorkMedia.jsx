import { useEffect, useRef } from 'react';

export function ImageMedia({ src, alt }) {
  if (!src) return null;
  return (
    <figure className="mediaFigure">
      <img className="media mediaImage" src={src} alt={alt || ''} loading="lazy" />
    </figure>
  );
}

export function VideoMedia({ sources, poster, caption }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Keep it silent (requested: audio off)
    video.muted = true;
    video.volume = 0;

    const handleVolume = () => {
      video.muted = true;
      video.volume = 0;
    };

    video.addEventListener('volumechange', handleVolume);
    return () => video.removeEventListener('volumechange', handleVolume);
  }, []);

  if (!sources?.length) return null;

  return (
    <figure className="mediaFigure">
      <video
        ref={videoRef}
        className="media mediaVideo"
        controls
        muted
        playsInline
        preload="metadata"
        poster={poster}
      >
        {sources.map((s) => (
          <source key={s.src} src={s.src} type={s.type} />
        ))}
        お使いのブラウザは動画再生に対応していません。
      </video>
      {caption ? <figcaption className="muted mediaCaption">{caption}</figcaption> : null}
    </figure>
  );
}

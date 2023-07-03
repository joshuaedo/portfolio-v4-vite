export default function Image({
  webpSrc,
  pngSrc,
  alt,
  height,
  width,
  className,
}) {
  return (
    <picture>
      <source type="image/webp" src={webpSrc} />
      <source type="image/png" src={pngSrc} />
      <img
        loading="lazy"
        height={height}
        width={width}
        className={className}
        src={pngSrc}
        alt={alt}
        decoding="async"
      />
    </picture>
  );
}

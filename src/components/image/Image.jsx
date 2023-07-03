export default function Image({
  webpSrc,
  orgSrc,
  alt,
  height,
  width,
  className,
}) {
  return (
    <picture>
      <source type="image/webp" srcSet={webpSrc} />
      <source type="image/png" srcSet={orgSrc} />
      <img
        loading="lazy"
        height={height}
        width={width}
        className={className}
        src={orgSrc}
        alt={alt}
        decoding="async"
      />
    </picture>
  );
}

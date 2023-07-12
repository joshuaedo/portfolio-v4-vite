import { Helmet } from "react-helmet";

export default function GeneralMeta() {
  return (
    <Helmet>
      {/* Links   */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=general-sans@200,500,201,1,300,600,400,700&display=swap"
        rel="stylesheet"
      />

      {/* Browser */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="Joshua Edo, joshuaedo, thegr8joshua, edojoshua, Joshua, Josh, Edo, Who is Joshua Edo, =), Developer, Web developer, Frontend Developer, Software Developer"
      />
      <meta
        name="robots"
        content="max-snippet:155, max-image-preview:standard"
      />
      <meta name="robots" content="index,follow" />
      <meta content="true" name="protect_images" />
      <meta name="copyright" content="Joshua Edo" />
      <meta name="language" content="en" />
      <meta name="reply-to" content="joshua.edo01@gmail.com" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="author" content="Joshua Edo, joshua.edo01@gmail.com" />
      <meta
        name="abstract"
        content="Software Developer specialized in Frontend Web Development with expertise in JavaScript, TypeScript, HTML5, CSS3, ReactJs, NextJs, Bootstrap, Tailwind, REST, and GraphQL."
      />
      <meta
        name="topic"
        content="Web Development, JavaScript, TypeScript, HTML5, CSS3, ReactJs, NextJs, Bootstrap, Tailwind, REST, GraphQL, FIFA, Dan Brown, Pizza, Chelsea"
      />
      <meta
        name="summary"
        content="Explore Joshua Edo's profile as a Software Developer."
      />
      <meta name="Classification" content="Portfolio" />
      <meta name="designer" content="Joshua Edo" />
      <meta name="owner" content="Joshua Edo" />
      <meta name="directory" content="web-development" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="Personal" />
      <meta name="subtitle" content="Showcasing my skills and projects" />
      <meta name="MobileOptimized" content="480" />
      <meta name="medium" content="personal website" />
      <meta name="pageKey" content="portfolio" />
      <meta itemProp="name" content="Joshua Edo's Portfolio Website" />

      {/* OpenGraph */}
      <meta property="og:site_name" content="joshua edo" />
      <meta
        property="og:image:url"
        content="https://res.cloudinary.com/dnw9fplsw/image/upload/v1687950201/%3D%29.png"
      />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="joshua edo" />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dnw9fplsw/image/upload/v1687950201/%3D%29.png"
      />
    </Helmet>
  );
}

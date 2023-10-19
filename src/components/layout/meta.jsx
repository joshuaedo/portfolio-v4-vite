function Meta({ title, description, path }) {
  const siteUrl = 'https://www.joshuaedo.com';
  const metaTitle = `Joshua Edo • ${title}`;
  const metaDescription = description;
  const metaUrl = siteUrl + path;

  return (
    <header>
      {/* Browser */}
      <meta name='description' content={metaDescription} />
      <meta name='current_path' content={path} />
      <meta name='subject' content={title} />
      <meta name='url' content={metaUrl} />
      <meta name='identifier-URL' content={metaUrl} />
      <meta name='pagename' content={metaTitle} />
      <meta name='title' content={metaTitle} />

      {/* OpenGraph */}
      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:url' content={metaUrl} />

      {/* Twitter */}
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:description' content={metaDescription} />

      <title>{metaTitle}</title>
    </header>
  );
}

export function HomeMeta() {
  return (
    <Meta
      title='Home'
      description='Joshua Edo is an experienced Software Developer specialized in building web apps with great functionality, user-friendly interfaces, and strong SEO.'
      path='/'
    />
  );
}

export function AboutMeta() {
  return (
    <Meta
      title='About'
      description="Craving a mouthwatering pepperoni pizza too? A fan of Chelsea or HIMYM? Nice to meet you! I'm Josh, a Software Developer."
      path='/about'
    />
  );
}

export function ProjectsMeta() {
  return (
    <Meta
      title='Projects'
      description="View Joshua Edo's recent projects: Spotify, Netflix, Google, joshuaGPT, Apple and much more."
      path='/projects'
    />
  );
}

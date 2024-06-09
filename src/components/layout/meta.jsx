import { projects } from '@/db/projects';
import { useParams } from 'react-router-dom';

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
      description="View Joshua Edo's recent projects: Z, Sandra, Galleria, Spotify, Netflix, Google, jQuerius, Apple and much more."
      path='/projects'
    />
  );
}

export function SlugMeta() {
  const { slug } = useParams();
  const project = projects.filter((p) => p.slug === slug);

  return (
    <head>
      {/* Browser */}
      <meta
        name='description'
        content={`${project[0].overview}... ${project[0]?.description}`}
      />
      <meta name='current_path' content='/projects/:slug' />
      <meta
        name='subject'
        content={`Joshua Edo • Projects • ${project[0].title}`}
      />
      <meta name='url' content='https://www.joshuaedo.com/projects/:slug' />
      <meta
        name='identifier-URL'
        content='https://www.joshuaedo.com/projects/:slug'
      />
      <meta
        name='pagename'
        content={`Joshua Edo • Projects • ${project[0].title}`}
      />
      <meta
        name='title'
        content={`Joshua Edo • Projects • ${project[0].title}`}
      />

      {/* OpenGraph */}
      <meta
        property='og:title'
        content={`Joshua Edo • Projects • ${project[0].title}`}
      />
      <meta property='og:description' content={project[0].overview} />
      <meta property='og:url' content='https://joshuaedo.com/projects/:slug' />

      {/* Twitter */}
      <meta
        name='twitter:title'
        content={`Joshua Edo • Projects • ${project[0].title}`}
      />
      <meta name='twitter:description' content={project[0].overview} />

      <title>{`Joshua Edo • Projects • ${project[0].title}`}</title>
    </head>
  );
}

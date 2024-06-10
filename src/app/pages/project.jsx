import Image, { Arrow } from '@/components/ui/image';
import { projects } from '@/db/projects';
import { Link, useParams } from 'react-router-dom';
import styles from '@/styles/projects.module.css';
import useAnimation from '@/hooks/use-animation';
import { textReveal } from '@/lib/anim';
import { SlugMeta } from '@/components/layout/meta';

export function Slug() {
  useAnimation(textReveal);
  const { slug } = useParams();
  const project = projects?.filter((p) => p.slug === slug);

  return (
    <>
      <SlugMeta />

      <main className={`flex items-center justify-center`}>
        <div className='w-[90%]'>
          <section className='text-reveal__container pb-[5vh] pt-[15vh] text-center md:flex md:pt-[30vh] md:text-start'>
            <h1 className='section-text text-reveal uppercase'>
              {project[0]?.title}
            </h1>
          </section>

          <section className='bg-black'>
            <div className='flex items-center justify-center'>
              <Image
                width={1366}
                height={768}
                alt={project[0]?.title}
                orgSrc={`/images/original/projects/${project[0]?.src}.png`}
                webpSrc={`/images/webp/projects/${project[0]?.src}.webp`}
              />
            </div>
          </section>

          <section className='text-reveal__fade-in justify-between bg-black py-10 text-lg md:flex md:py-20'>
            <div className='w-full md:w-[45%]'>
              <p className='text-2xs font-medium text-[#A3A3A3] md:text-xs'>
                (OVERVIEW)
              </p>
              <p className='line-height text-sm md:text-base'>
                {project[0].overview}
              </p>
              <p className='line-height text-sm md:text-base'>
                {project[0]?.description}
              </p>
              {project[0]?.documentation && (
                <p className='line-height text-sm md:text-base'>
                  Learn more{' '}
                  <a href={project[0]?.documentation}>
                    <span className='link text-purple-500'>here.</span>
                  </a>
                </p>
              )}

              <div className='mt-4 flex w-[90%] justify-between md:w-[70%]'>
                {project[0].href && (
                  <div>
                    <a
                      href={project[0]?.href}
                      className='flex items-center justify-center'
                    >
                      <span className='title-text link mt-1'>LIVE</span>
                      <Arrow className='ml-1 mt-1 h-3 w-3' />
                    </a>
                  </div>
                )}

                {project[0].code && (
                  <div>
                    <a
                      href={`https://github.com/joshuaedo/${project[0]?.code}`}
                      className='flex items-center justify-center'
                    >
                      <span className='title-text link mt-1'>CODE</span>
                      <Arrow className='ml-1 mt-1 h-3 w-3' />
                    </a>
                  </div>
                )}

                {project[0].demo && (
                  <div>
                    <a
                      href={project[0]?.demo}
                      className='flex items-center justify-center'
                    >
                      <span className='title-text link mt-1'>DEMO</span>
                      <Arrow className='ml-1 mt-1 h-3 w-3' />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className='mt-6 w-[90%] md:mt-0 md:w-[45%]'>
              <p className='text-2xs font-medium text-[#A3A3A3] md:text-xs'>
                (TECHNOLOGIES USED)
              </p>
              <div className='line-height text-sm md:text-base'>
                {project[0].tech}
              </div>
              <p className='mt-4 text-2xs font-medium text-[#A3A3A3] md:text-xs'>
                (YEAR COMPLETED)
              </p>
              <div className='text-sm md:text-base'>{project[0].year}</div>
            </div>
          </section>
          {project[0].next && (
            <div className=''>
              <div className='title-text pb-3 md:pb-5'>Next Project</div>
              <Link
                to={`/projects/${project[0].next?.slug}`}
                className={styles.project}
              >
                <h2 className='section-text truncate'>
                  {project[0].next?.title}
                </h2>
                <p className='text-xs md:text-sm'>{project[0]?.next.year}</p>
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

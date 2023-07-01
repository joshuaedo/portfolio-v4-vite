import { projects } from "../../lib/ProjectData.jsx";
import { useParams, Link } from "react-router-dom";
import styles from "./Projects.module.css";

export function Slug() {
  const { slug } = useParams();
  const project = projects.filter((p) => p.slug === slug);
  console.log(project[0]);

  return (
    <>
      <main className={`flex items-center justify-center`}>
        <div className="w-[90%]">
          <section className="pb-[5vh] pt-[15vh] text-center md:flex md:pt-[30vh] md:text-start">
            <h1 className="section-text uppercase">{project[0]?.title}</h1>
          </section>

          <section className="bg-black">
            <div className="flex items-center justify-center">
              <img
                width={1366}
                height={768}
                alt={project[0]?.title}
                src={`/images/projects/${project[0]?.src}`}
              />
            </div>
          </section>

          <section className="justify-between bg-black py-10 text-lg md:flex md:py-20">
            <div className="w-full md:w-[45%]">
              <p className="text-xs font-medium text-[#A3A3A3]">(OVERVIEW)</p>
              <p className="">{project[0].overview}</p>
              <p className="">{project[0]?.description}</p>
              {project[0]?.documentation && (
                <p className="">
                  Learn more{" "}
                  <a href={project[0]?.documentation}>
                    <span className="link text-purple-500">here.</span>
                  </a>
                </p>
              )}

              <div className="mt-4 flex w-[90%] justify-between md:w-[70%]">
                <div>
                  {project[0].href && (
                    <a href={project[0]?.href}>
                      <span className="title-text link">LIVE ↗</span>
                    </a>
                  )}
                </div>
                <div>
                  {project[0].code && (
                    <a
                      href={`https://github.com/joshuaedo/${project[0]?.code}`}
                    >
                      <span className="title-text link">CODE ↗</span>
                    </a>
                  )}
                </div>
                <div>
                  {project[0].demo && (
                    <a href={project[0]?.demo}>
                      <span className="title-text link">DEMO ↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 w-[90%] md:mt-0 md:w-[45%]">
              <p className="text-xs font-medium text-[#A3A3A3]">
                (TECHNOLOGIES USED)
              </p>
              <div className="">{project[0].tech}</div>
              <p className="mt-4 text-xs font-medium text-[#A3A3A3]">
                (YEAR COMPLETED)
              </p>
              <div className="">{project[0].year}</div>
            </div>
          </section>
          {project[0].next && (
            <div className="">
              <div className="title-text pb-3 md:pb-5">Next Project</div>
              <Link
                to={`/projects/${project[0].next?.slug}`}
                className={styles.project}
              >
                <h2 className="section-text">{project[0].next?.title}</h2>
                <p className="text-xs md:text-sm">{project[0]?.next.year}</p>
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

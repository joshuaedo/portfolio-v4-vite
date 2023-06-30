import { projects } from "../../lib/ProjectData.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//  title,
//     src,
//     slug,
//     code,
//     color,
//     tech,
//     href,
//     year,
//     demo,
//     overview,
//     description,
//     documentation,

export function Slug() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();
  const project = projects.filter((p) => p.slug === slug);
  console.log(project[0]);

  return (
    <main className={`flex items-center justify-center`}>
      <div className="w-[90%]">
        <section className="text-center md:flex md:text-start">
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

          <div className="">
            <p className="">{project[0].overview}</p>
            <p className="">{project[0]?.description}</p>
            {project[0]?.documentation && (
              <p className="">
                Learn more{" "}
                <a href={project[0]?.documentation}>
                  <span className="link">here</span>
                </a>
              </p>
            )}
            <div>
              <div>
                {project[0].href && (
                  <a href={project[0]?.href}>
                    <span className="link">LIVE</span>
                  </a>
                )}
              </div>
              <div>
                {project[0].code && (
                  <a href={project[0]?.code}>
                    <span className="link">CODE</span>
                  </a>
                )}
              </div>
              <div>
                {project[0].demo && (
                  <a href={project[0]?.demo}>
                    <span className="link">DEMO</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="">
            <div className="">{project[0].tech}</div>
            <div className="">{project[0].year}</div>
          </div>

          <div className=""></div>
        </section>
      </div>
    </main>
  );
}

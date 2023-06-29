import { projects } from "../../lib/ProjectData.jsx";
import { useParams } from "react-router-dom";

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
  const { slug } = useParams();
  const project = projects.filter((p) => p.slug === slug);
  console.log(project[0]);

  return (
    <main className={`flex items-center justify-center`}>
      <div className="relative min-h-[300vh] w-[90%]">
        <section className="fixed top-0 pb-[3vh] pt-[15vh] text-center md:flex md:pt-[37vh] md:text-start">
          <h1 className="section-text uppercase">{project[0].title}</h1>
        </section>
        <section className="absolute top-[43vh] z-[5] min-h-[200vh] bg-black">
          <div className="flex items-center justify-center">
            <img
              width={1366}
              height={768}
              alt={project[0].title}
              src={`/images/projects/${project[0].src}`}
            />
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </section>
      </div>
    </main>
  );
}

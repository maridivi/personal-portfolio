import Image from "next/image";
import { projectsData } from "../data/projectsData";
import Section from "./Section";
import H1 from "./UI/H1";
import H2 from "./UI/H2";
import H3 from "./UI/H3";
import Paragraph from "./UI/Paragraph";

export default function Projects() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <H2 className="text-2xl ">Projects</H2>
        <div className="flex flex-col gap-6">
          {projectsData.map((project, key) => {
            return <ProjectCard key={key} project={project} />;
          })}
        </div>
      </div>
    </Section>
  );
}

const ProjectCard = ({ project }) => {
  const { title, img, description, techList } = project;

  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-6 rounded-md bg-electric-200 overflow-hidden">
      <Image
        alt={title}
        src={img}
        width={300}
        height={300}
        className="rounded-lg"
      ></Image>
      <div className="p-6">
        <H3>{title}</H3>
        <Paragraph>{description}</Paragraph>
        <div className="flex gap-1 border">
          {techList.map((item, key) => {
            return (
              <span
                className="bg-electric-300 text-electric-900 py-1 px-2 rounded text-sm border shrink-0 basis-22"
                key={key}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

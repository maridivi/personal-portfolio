import Image from "next/image";
import { projectsData } from "../data/projectsData";
import Section from "./Section";
import Markdown from "marked-react";

import H2 from "./UI/H2";
import H3 from "./UI/H3";
import { ExternalLinkIcon, GitHubIcon, Icon } from "./UI/Icons";
import Paragraph from "./UI/Paragraph";

export default function Projects({ projects }) {
  return (
    <Section>
      <div className="flex flex-col gap-8 lg:items-center">
        <H2 className="text-2xl ">Projects</H2>
        <div className="flex flex-col gap-6  max-w-4xl ">
          {projects.map((project, key) => {
            return <ProjectCard key={key} project={project} />;
          })}
        </div>
      </div>
    </Section>
  );
}

const ProjectCard = ({ project }) => {
  const { title, img, description, techList, linkRepo, linkSite } = project;

  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-6 rounded-lg bg-electric-200 overflow-hidden ">
      <div className="relative w-64 h-64 overflow-hidden shrink-0">
        <Image alt={title} src={img} className="rounded-l-lg" layout="fill" />
      </div>

      <div className="p-6 gap-4 flex flex-col">
        <H3>{title}</H3>

        <Paragraph>{<Markdown>{description}</Markdown>}</Paragraph>

        <div className="flex gap-2">
          {techList.map((item, key) => {
            return (
              <span
                className="bg-electric-300 text-electric-900 py-1 px-2 rounded text-sm shrink-0 basis-22"
                key={key}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className="flex gap-2">
          {linkRepo && (
            <a href={linkRepo}>
              <GitHubIcon />
            </a>
          )}

          <a href={linkSite}>
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

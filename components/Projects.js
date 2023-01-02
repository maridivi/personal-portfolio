import Image from "next/image";
import Section from "./Section";
import Markdown from "marked-react";

import H2 from "./UI/H2";
import H3 from "./UI/H3";
import { ExternalLinkIcon, GitHubIcon } from "./UI/Icons";
import Paragraph from "./UI/Paragraph";

export default function Projects({ projects }) {
  return (
    <Section>
      <div
        id="projects"
        className="flex flex-col gap-8 lg:items-center pb-14 pt-16"
      >
        <H2 className="text-2xl text-yellow-300">Projects</H2>
        <div className="flex flex-col gap-6  max-w-4xl ">
          {projects?.map((project, key) => {
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
    <div className="flex flex-col items-center md:flex-row md:items-start gap-6 rounded-lg bg-electric-200 overflow-hidden hover:bg-electric-250">
      <div className="relative w-64 h-64 overflow-hidden shrink-0">
        <Image
          alt={title}
          src={img}
          className="rounded-lg md:rounded-r-none"
          layout="fill"
        />
      </div>

      <div className="p-6 gap-4 flex flex-col">
        <H3 className="font-bold">{title}</H3>

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
            <a href={linkRepo} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          )}

          <a href={linkSite} target="_blank" rel="noreferrer">
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

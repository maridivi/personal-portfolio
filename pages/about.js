import ContainerBlock from "../components/ContainerBlock";
import Section from "../components/Section";
import Skill from "../components/Skill";
import H2 from "../components/UI/H2";

import Paragraph from "../components/UI/Paragraph";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function About() {
  return (
    <ContainerBlock>
      <Section>
        <div className="flex flex-col md:flex-row gap-24 border xl:w-2/3 mx-auto">
          <div className="flex flex-col gap-6 md:w-1/2">
            <H2>About Me</H2>
            <Paragraph classname="text-lg">
              Hi! My name is Marianna and I am a self-taught front-end
              developer. I love building responsive and beautiful websites and
              applications. My interest in web development started in 2020, when
              I began to learn HTML, CSS, Javascript and React through online
              resources. In the meantime, I created some simple projects to
              practice more and grasp the new concepts better. I am constantly
              seeking to broaden my knowledge and acquire new skills.
            </Paragraph>
          </div>
          <div className="flex-flex-col text-center md:w-1/2">
            <H2>Skills</H2>
            <div className="grid grid-cols-3 mt-8 gap-3">
              <Skill icon={<ImHtmlFive size={48} />} text="HTML 5" />
              <Skill icon={<SiCss3 size={48} />} text="CSS3" />
              <Skill icon={<SiJavascript size={48} />} text="Javascript" />
              <Skill icon={<FaReact size={48} />} text="React" />
              <Skill icon={<SiTailwindcss size={48} />} text="Tailwind" />
              <Skill icon={<TbBrandNextjs size={48} />} text="Next.js" />
            </div>
          </div>
        </div>
      </Section>
    </ContainerBlock>
  );
}

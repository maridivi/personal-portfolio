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
    <Section>
      <div
        id="about"
        className="flex flex-col gap-24 lg:gap-14 xl:flex-row py-48 px-16 mx-auto lg:items-center"
      >
        <div className="flex flex-col gap-6 w-5/6 md:w-3/4 mx-auto justify-center ">
          <H2 className=" text-yellow-300 mx-auto">About Me</H2>
          <Paragraph>
            Hi! My name is Marianna and I am a self-taught front-end developer.
            After 5 years working as a dentist, I decided to pursue my interest
            in web development and began teaching myself to code. Through online
            courses and hands-on projects, I became comfortable with HTML, CSS,
            Javascript, and React. <br></br>
          </Paragraph>
          <Paragraph>
            I am grateful for the opportunity to combine my love of technology
            with my desire to help others and make a positive impact. I am
            excited to continue learning and growing as a developer, and hope to
            find opportunities where I can use my skills to make a meaningful
            difference.
          </Paragraph>
        </div>
        <div className="flex flex-col w-5/6 md:w-3/4 xl:w-1/2 mx-auto justify-center bg-electric-300 rounded-lg p-6">
          <H2 className="text-yellow-300 mx-auto">Skills</H2>
          <div className="grid grid-cols-3 mt-8 gap-8 max-w-sm mx-auto">
            <Skill icon={<ImHtmlFive size={36} />} text="HTML 5" />
            <Skill icon={<SiCss3 size={36} />} text="CSS3" />
            <Skill icon={<SiJavascript size={36} />} text="Javascript" />
            <Skill icon={<FaReact size={36} />} text="React" />
            <Skill icon={<SiTailwindcss size={36} />} text="Tailwind" />
            <Skill icon={<TbBrandNextjs size={36} />} text="Next.js" />
          </div>
        </div>
      </div>
    </Section>
  );
}

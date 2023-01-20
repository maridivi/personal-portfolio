import Link from "next/link";
import Section from "./Section";
import H1 from "./UI/H1";
import H2 from "./UI/H2";
import {
  GitHubIcon,
  LinkedinIcon,
  ProductHuntIcon,
  TwitterIcon,
} from "./UI/Icons";

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col gap-6 sm:gap-8 pt-16 w-full h-[85vh] pb-14 justify-center ">
        <H1 className="text-slate-300 ">Marianna Di Vito</H1>
        <H2 className="text-slate-500">Front-end developer</H2>
        <div className="flex gap-4">
          <a
            href="https://github.com/maridivi"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://twitter.com/maridivi89"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/marianna-di-vito-b4178676/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://www.producthunt.com/@maridivi89"
            target="_blank"
            rel="noreferrer"
          >
            <ProductHuntIcon />
          </a>
        </div>
        <Link href="#projects">
          <button
            type="submit"
            className="border-yellow-400 border text-yellow-400 rounded-md w-1/3 mt-6 py-2 text-sm font-bold hover:opacity-70 "
          >
            My projects
          </button>
        </Link>
      </div>
    </Section>
  );
}

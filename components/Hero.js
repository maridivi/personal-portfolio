import Section from "./Section";
import H1 from "./UI/H1";
import {
  ExternalLinkIcon,
  GitHubIcon,
  InstagramIcon,
  TwitterIcon,
} from "./UI/Icons";

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col gap-6 sm:gap-8 pt-16 w-full h-[85vh] pb-14 justify-center ">
        <H1 className="text-slate-300 ">Marianna Di Vito</H1>
        <H1 className="text-slate-500 ">Front-end developer</H1>
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
        </div>
      </div>
    </Section>
  );
}

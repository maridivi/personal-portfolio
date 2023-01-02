import Section from "./Section";
import CustomLink from "./UI/CustomLink";

export default function Navbar() {
  return (
    <div className="top-0 w-full ">
      <Section>
        <div className="flex justify-between">
          <div className=" border-yellow-300 border-[3px] px-3 py-0.5 rounded-md">
            <CustomLink
              href="/"
              text="MD"
              className="font-bold text-yellow-300 text-2xl font-chivo_mono"
            />
          </div>

          <div className="flex gap-5">
            <CustomLink
              text="Projects"
              href="#projects"
              className="text-slate-400"
            />
            <CustomLink text="About" href="#about" className="text-slate-400" />

            <CustomLink
              text="Contact"
              href="#contact"
              className="text-slate-400"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

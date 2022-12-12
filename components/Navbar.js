import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Section from "./Section";
import CustomLink from "./UI/CustomLink";
import H1 from "./UI/H1";
import H2 from "./UI/H2";
import H3 from "./UI/H3";

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

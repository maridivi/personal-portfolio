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
          <CustomLink
            href="/"
            text="Marianna Di Vito"
            className="font-bold text-yellow-300"
          />
          <div className="flex gap-3">
            <CustomLink text="About" href="#about" />
            <CustomLink text="Projects" href="#projects" />
            <CustomLink text="Contact" href="#contact" />
          </div>
        </div>
      </Section>
    </div>
  );
}

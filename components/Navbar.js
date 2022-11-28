import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Section from "./Section";
import H1 from "./UI/H1";
import H2 from "./UI/H2";
import H3 from "./UI/H3";

export default function Navbar() {
  return (
    <div className="top-0 w-full ">
      <Section>
        <div className="flex justify-between">
          <Link className="text-yellow-300 font-bold" href="/">
            Marianna Di Vito
          </Link>
          <div className="flex  gap-6">
            <Link href="#about" className="text-slate-300">
              About
            </Link>
            <Link href="/projects" className="text-slate-300">
              Projects
            </Link>
            <Link href="/contact" className="text-slate-300">
              Contact
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

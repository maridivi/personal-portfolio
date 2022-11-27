import Section from "./Section";
import H1 from "./UI/H1";

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col gap-3 sm:gap-6 pt-16">
        <H1 className="text-slate-300 ">Marianna Di Vito</H1>
        <H1 className="text-slate-500 ">Front-end developer</H1>
      </div>
    </Section>
  );
}

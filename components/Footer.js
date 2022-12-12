import Section from "./Section";
import H3 from "./UI/H3";
import Paragraph from "./UI/Paragraph";

export default function Footer() {
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };
  return (
    <div className="bottom-0 min-h-0 overflow-hidden">
      <Section>
        <small className="text-slate-300">
          © {getYear()} Created by{" "}
          <a href="https://github.com/maridivi/personal-portfolio">
            Marianna Di Vito
          </a>
        </small>
      </Section>
    </div>
  );
}

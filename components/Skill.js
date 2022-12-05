import { Icon } from "./UI/Icons";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import H3 from "./UI/H3";

export default function Skill({ icon, text }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon icon={icon} />
      <H3>{text}</H3>
    </div>
  );
}

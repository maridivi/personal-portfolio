import { Icon } from "./UI/Icons";

import H3 from "./UI/H3";
import H4 from "./UI/H4";

export default function Skill({ icon, text }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon icon={icon} />
      <H4>{text}</H4>
    </div>
  );
}

import { Icon } from "./UI/Icons";

import H3 from "./UI/H3";

export default function Skill({ icon, text }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon icon={icon} />
      <H3>{text}</H3>
    </div>
  );
}

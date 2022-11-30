import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

export const GitHubIcon = () => {
  return <Icon icon={<AiOutlineGithub size={24} />} />;
};

export const ExternalLinkIcon = () => {
  return <Icon icon={<HiOutlineExternalLink size={24} />} />;
};

export const Icon = ({ icon: Icon }) => {
  return <div className="text-slate-300 hover:opacity-20 ">{Icon}</div>;
};

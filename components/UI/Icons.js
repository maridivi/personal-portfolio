import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";

export const GitHubIcon = () => {
  return <Icon icon={<AiOutlineGithub size={24} />} />;
};

export const ProductHuntIcon = () => {
  return <Icon icon={<FaProductHunt size={24} />} />;
};

export const LinkedinIcon = () => {
  return <Icon icon={<AiFillLinkedin size={24} />} />;
};

export const ExternalLinkIcon = () => {
  return <Icon icon={<HiOutlineExternalLink size={24} />} />;
};

export const TwitterIcon = () => {
  return <Icon icon={<BsTwitter size={24} />} />;
};

export const InstagramIcon = () => {
  return <Icon icon={<BsInstagram size={24} />} />;
};

export const Icon = ({ icon: Icon }) => {
  return <div className="text-slate-300 hover-animation">{Icon}</div>;
};

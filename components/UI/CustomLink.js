import { Link } from "react-scroll";

export default function CustomLink({ href, text, className }) {
  return (
    <Link
      to={href}
      spy={true}
      smooth={true}
      activeClass="active"
      duration={500}
    >
      <span className={`${className}  cursor-pointer hover:text-yellow-300`}>
        {text}
      </span>
    </Link>
  );
}

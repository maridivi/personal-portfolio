import { Link } from "react-scroll";

export default function CustomLink({ href, text, className }) {
  return (
    <Link
      to={href}
      spy={true}
      smooth={true}
      activeClass="active"
      duration={500}
      style={{ cursor: "pointer" }}
      className={className}
    >
      {text}
    </Link>
  );
}

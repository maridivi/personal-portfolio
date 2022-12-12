import Link from "next/link";

export default function CustomLink({ href, text, className }) {
  return (
    <Link href={href}>
      <span className={`${className}  cursor-pointer hover:text-yellow-300`}>
        {text}
      </span>
    </Link>
  );
}

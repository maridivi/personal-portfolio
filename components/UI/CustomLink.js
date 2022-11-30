import Link from "next/link";

export default function CustomLink({ href, text, className }) {
  return (
    <Link href={href}>
      <span
        className={`${className} text-slate-300 cursor-pointer hover:opacity-10`}
      >
        {text}
      </span>
    </Link>
  );
}

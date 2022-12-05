export default function Paragraph({ children, classname }) {
  return <p className={`${classname} text-slate-400 `}>{children}</p>;
}

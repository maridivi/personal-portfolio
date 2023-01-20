export default function Paragraph({ children, classname }) {
  return (
    <p
      className={`${classname} text-slate-400 text-[16px] lg:text-lg leading-7`}
    >
      {children}
    </p>
  );
}

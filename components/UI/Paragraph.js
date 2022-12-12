export default function Paragraph({ children, classname }) {
  return (
    <p className={`${classname} text-slate-400 text-md lg:text-lg leading-7`}>
      {children}
    </p>
  );
}

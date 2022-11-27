export default function Paragraph({ children, classname }) {
  return (
    <p className={`${classname} text-slate-500 text-sm sm:text-md`}>
      {children}
    </p>
  );
}

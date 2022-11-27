export default function H1({ children, className = "" }) {
  return (
    <h1 className={`${className} text-3xl sm:text-6xl font-bold font-inter `}>
      {children}
    </h1>
  );
}

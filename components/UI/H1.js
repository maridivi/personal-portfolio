export default function H1({ children, className = "" }) {
  return (
    <h1
      className={`${className} text-4xl sm:text-5xl md:text-6xl font-bold font-inter `}
    >
      {children}
    </h1>
  );
}

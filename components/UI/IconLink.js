export default function IconLink({ icon, url, label }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" aria-label={label}>
      {icon}
    </a>
  );
}

export default function Section({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <section className={`my-20 px-4 ${className}`}>{children}</section>;
}

export default function Input({
  name,
  type,
  label,
}: {
  name: string;
  type: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="border text-lg border-gray-500 dark:border-gray-300 p-2 "
      />
    </div>
  );
}

import Link from "next/link";

export default function JournalEntryCard({
  title,
  preview,
  date,
}: {
  title: string;
  preview: string;
  date: string;
}) {
  return (
    <div className="bg-gray-50 relative px-4 py-8 rounded-2xl border dark:bg-gray-800 dark:border-gray-700 border-gray-300 shadow-sm dark:shadow-gray-700">
      <h2 className="heading-2 underline">
        <Link href={`/app/entry/${title}`}>{title}</Link>
      </h2>
      <p className="mb-4">{preview}</p>
      <p className="absolute bottom-4 right-4">{date}</p>
    </div>
  );
}

/**
 * Library Page
 */

// Components
import { Section } from "@/components";
import JournalEntryCard from "./components/JournalEntryCard";

// Data
import { journalEntries } from "./data/dummyEntries";

export default function Library() {
  function getPreview(entry: string) {
    return `${entry.slice(0, 20)}...`;
  }

  return (
    <main>
      <Section>
        <h1 className="heading-1">Library</h1>
      </Section>
      <Section>
        <ul className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {journalEntries.map((journalEntry) => {
            const { title, entry, date } = journalEntry;

            return (
              <li key={`${entry}`} className="">
                <JournalEntryCard
                  title={title}
                  preview={getPreview(entry)}
                  date={date}
                />
              </li>
            );
          })}
        </ul>
      </Section>
    </main>
  );
}

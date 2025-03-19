import { Section } from "@/components";

export default async function EntryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <Section>
        <h1>{id}</h1>
      </Section>
    </main>
  );
}

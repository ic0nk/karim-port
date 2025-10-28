import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs"; // server component with Node APIs

async function getMessages() {
  const dataFile = path.join(process.cwd(), "src", "data", "contacts.json");
  try {
    const raw = await fs.readFile(dataFile, "utf8");
    return JSON.parse(raw || "[]") as Array<{
      id: string;
      name: string;
      email: string;
      phone?: string;
      message: string;
      createdAt: string;
    }>;
  } catch {
    return [];
  }
}

export default async function MessagesPage() {
  const messages = await getMessages();
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-primary text-3xl mb-4">Contact Messages</h1>
      <p className="text-sm text-[var(--secondary-text)] mb-6">Reading from src/data/contacts.json</p>
      {messages.length === 0 ? (
        <p className="text-[var(--secondary-text)]">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((m) => (
            <div key={m.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <div><span className="font-semibold">Name:</span> {m.name}</div>
                <div><span className="font-semibold">Email:</span> {m.email}</div>
                {m.phone ? <div><span className="font-semibold">Phone:</span> {m.phone}</div> : null}
                <div className="text-[var(--secondary-text)]">{new Date(m.createdAt).toLocaleString()}</div>
              </div>
              <div className="mt-2 text-[var(--text)] whitespace-pre-wrap">{m.message}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

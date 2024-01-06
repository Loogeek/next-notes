import { getAllNotes } from "@/utils/redis";
import SidebarNoteItem from "./SidebarNoteItem";

// interface Notes {
//   notes: Record<string, string>;
// }

export default async function SidebarNoteList() {
  const notes = await getAllNotes();
  const arr = Object.entries(notes);
  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await sleep(5000)
  if (arr.length === 0) {
    return <div className="notes-empty">No notes created yet!</div>;
  }

  return (
    <ul className="notes-list">
      {arr.map(([noteId, note]) => {
        return (
          <li key={noteId}>
            <SidebarNoteItem noteId={noteId} note={JSON.parse(note)}/>
          </li>
        );
      })}
    </ul>
  );
}

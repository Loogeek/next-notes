import Link from "next/link";
import { getAllNotes } from "@/utils/redis";
import SidebarNoteList from "./SidebarNoteList";


export default async function Sidebar() {
  const notes = await getAllNotes();
   return (
    <section className="col sidebar">
      <Link href="/">
        <section className="sidebar-header">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="logo"
              src="/logo.svg"
              width="22px"
              height="20px"
              alt=""
              role="presentation"
            />
          }
          <strong>React Notes</strong>
        </section>
      </Link>
      <section className="sidebar-menu" role="menubar">
        {/* SideSearchField */}
      </section>
      <nav>
        <SidebarNoteList notes={notes} />
      </nav>
    </section>
  );
}

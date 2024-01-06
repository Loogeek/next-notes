import { Note } from "@/types";
import SidebarNoteItemContent from "./SidebarNoteItemContent"
import SidebarNoteItemHeader from "./SidebarNoteItemHeader";

interface SidebarNoteItemProp {
  noteId: string;
  note: Note
}

export default function SidebarNoteItem({noteId, note}: SidebarNoteItemProp) {
  const {title, content, updateTime} = note
  
  
 return(
  <SidebarNoteItemContent id={noteId} title={title} expandedChildren={
    <p className="sidebar-note-excerpt">
      {content?.slice(0, 20) || <i>(No content yet!)</i>}
    </p>
  }>
    <SidebarNoteItemHeader title={title} updateTime={updateTime} />
  </SidebarNoteItemContent>
 ) 
}
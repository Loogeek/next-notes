import dayjs from 'dayjs';
import { Note } from '@/types';

export default function SidebarNoteItemHeader({ title, updateTime }: Note) {
  return (
    <header className='sidebar-note-header'>
      <strong>{title}</strong>
      <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
    </header>
  );
}

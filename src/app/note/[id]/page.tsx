import dayjs from 'dayjs';
import { getNote } from '@/utils/redis';
import EditButton from '@/components/EditButton';
import NotePreview from '../components/NotePreview';

export default async function NotePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const noteId = params.id;
  const note = await getNote(noteId);

  if (!note) {
    return (
      <div className='note--empty-state'>
        <span className='note-text--empty-state'>
          Click a note on the left to view something! 🥺
        </span>
      </div>
    );
  }

  const { title, updateTime, content } = note;

  return (
    <div className='note'>
      <div className='note-header'>
        <h1 className='note-title'>{title}</h1>
        <div className='note-menu' role='menubar'>
          <small className='note-updated-at' role='status'>
            Last updated on {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}
          </small>
          <EditButton noteId={noteId}>Edit</EditButton>
        </div>
      </div>
      <NotePreview>{content}</NotePreview>
    </div>
  );
}

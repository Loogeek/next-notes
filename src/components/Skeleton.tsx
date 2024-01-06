interface NoteListSkeletonProps {
  type: 'noteList';
}

function NoteListSkeleton() {
  return (
    <div>
      <ul className='notes-list skeleton-container'>
        <li className='v-stack'>
          <div
            className='sidebar-note-list-item skeleton'
            style={{ height: '5em' }}
          />
        </li>
        <li className='v-stack'>
          <div
            className='sidebar-note-list-item skeleton'
            style={{ height: '5em' }}
          />
        </li>
        <li className='v-stack'>
          <div
            className='sidebar-note-list-item skeleton'
            style={{ height: '5em' }}
          />
        </li>
      </ul>
    </div>
  );
}

export default function Skeleton(props: NoteListSkeletonProps) {
  const { type } = props;
  switch (type) {
    case 'noteList':
      return <NoteListSkeleton />;
    default:
      return null;
  }
}

interface NoteListSkeletonProps {
  type: 'noteList' | 'note';
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

function NoteSkeleton() {
  return (
    <div
      className='note skeleton-container'
      role='progressbar'
      aria-busy='true'
    >
      <div className='note-header'>
        <div
          className='note-title skeleton'
          style={{ height: '3rem', width: '65%', marginInline: '12px 1em' }}
        />
        <div
          className='skeleton skeleton--button'
          style={{ width: '8em', height: '2.5em' }}
        />
      </div>
      <div className='note-preview'>
        <div className='skeleton v-stack' style={{ height: '1.5em' }} />
        <div className='skeleton v-stack' style={{ height: '1.5em' }} />
        <div className='skeleton v-stack' style={{ height: '1.5em' }} />
        <div className='skeleton v-stack' style={{ height: '1.5em' }} />
        <div className='skeleton v-stack' style={{ height: '1.5em' }} />
      </div>
    </div>
  );
}

export default function Skeleton(props: NoteListSkeletonProps) {
  const { type } = props;
  switch (type) {
    case 'noteList':
      return <NoteListSkeleton />;
    case 'note':
      return <NoteSkeleton />;
    default:
      return null;
  }
}

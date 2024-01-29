interface NoteListSkeletonProps {
  type: 'noteList' | 'note' | 'edit';
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

function NoteEditorSkeleton() {
  return (
    <div
      className='note-editor skeleton-container'
      role='progressbar'
      aria-busy='true'
    >
      <div className='note-editor-form'>
        <div className='skeleton v-stack' style={{ height: '3rem' }} />
        <div className='skeleton v-stack' style={{ height: '100%' }} />
      </div>
      <div className='note-editor-preview'>
        <div className='note-editor-menu'>
          <div
            className='skeleton skeleton--button'
            style={{ width: '8em', height: '2.5em' }}
          />
          <div
            className='skeleton skeleton--button'
            style={{ width: '8em', height: '2.5em', marginInline: '12px 0' }}
          />
        </div>
        <div
          className='note-title skeleton'
          style={{ height: '3rem', width: '65%', marginInline: '12px 1em' }}
        />
        <div className='note-preview'>
          <div className='skeleton v-stack' style={{ height: '1.5em' }} />
          <div className='skeleton v-stack' style={{ height: '1.5em' }} />
          <div className='skeleton v-stack' style={{ height: '1.5em' }} />
          <div className='skeleton v-stack' style={{ height: '1.5em' }} />
          <div className='skeleton v-stack' style={{ height: '1.5em' }} />
        </div>
      </div>
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
    case 'edit':
      return <NoteEditorSkeleton />;
    default:
      return null;
  }
}

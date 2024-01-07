import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

interface EditButtonProps {
  noteId: string | null;
  children: React.ReactNode;
}

const EditButton: React.FC<EditButtonProps> = (props) => {
  const { noteId, children } = props;
  const isDraft = noteId === null;
  return (
    <Link href={`/note/edit/${noteId || ''}`} className='link--unstyled'>
      <button
        className={cx('edit-button', {
          'edit-button--solid': isDraft,
          'edit-button--outline': !isDraft,
        })}
      >
        {children}
      </button>
    </Link>
  );
};

export default EditButton;

'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import NotePreview from './NotePreview';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';
import { deleteNote, saveNote } from '@/app/actions';
import type { EditorFormState } from '@/types';

interface NoteEditorProps {
  noteId: string | null;
  initialTitle: string;
  initialBody: string;
}

const initialState: EditorFormState = {
  message: null,
};

export default function NoteEditor({
  noteId,
  initialTitle,
  initialBody,
}: NoteEditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const [saveState, saveFormAction] = useFormState<EditorFormState, FormData>(
    saveNote,
    initialState
  );
  const [delState, delFormAction] = useFormState<EditorFormState, FormData>(
    deleteNote,
    initialState
  );
  const isDraft = !noteId;

  return (
    <div className='note-editor'>
      <form className='note-editor-form' autoComplete='off'>
        <input type='hidden' name='noteId' value={noteId || ''} />
        <div className='note-editor-menu' role='menubar'>
          <SaveButton formAction={saveFormAction} />
          <DeleteButton isDraft={isDraft} formAction={delFormAction} />
        </div>
        <div className='note-editor-menu'>
          {saveState?.message}
          {saveState?.errors && saveState.errors[0].message}
        </div>
        <label className='offscreen' htmlFor='note-title-input'>
          Enter a title for your note
        </label>
        <input
          id='note-title-input'
          type='text'
          name='title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className='offscreen' htmlFor='note-body-input'>
          Enter the body for your note
        </label>
        <textarea
          name='body'
          value={body}
          id='note-body-input'
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      <div className='note-editor-preview'>
        <div className='label label--preview' role='status'>
          Preview
        </div>
        <h1 className='note-title'>{title}</h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </div>
  );
}

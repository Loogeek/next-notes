import { useFormStatus } from 'react-dom';

export default function SaveButton({
  formAction,
}: {
  formAction: (state: FormData) => void;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className='note-editor-done'
      type='submit'
      formAction={formAction}
      disabled={pending}
      role='menuitem'
    >
      <img
        src='/checkmark.svg'
        width='14px'
        height='10px'
        role='presentation'
        alt=''
      />
      {pending ? 'Saving' : 'Done'}
    </button>
  );
}

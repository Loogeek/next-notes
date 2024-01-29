import { useFormStatus } from 'react-dom';

export default function SaveButton({
  isDraft,
  formAction,
}: {
  isDraft: boolean;
  formAction: (state: FormData) => void;
}) {
  const { pending } = useFormStatus();

  return (
    !isDraft && (
      <button
        className='note-editor-delete'
        disabled={pending}
        formAction={formAction}
        role='presentation'
      >
        <img
          src='/cross.svg'
          width='10px'
          height='10px'
          role='presentation'
          alt=''
        />
        Delete
      </button>
    )
  );
}

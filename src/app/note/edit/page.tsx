import NoteEditor from '../components/NoteEditor';

export default async function NoteEditPage() {
  return <NoteEditor noteId={null} initialTitle='Untitled' initialBody='' />;
}

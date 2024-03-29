import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  'img',
  'h1',
  'h2',
  'h3',
]);
const allowedAttributes = {
  ...sanitizeHtml.defaults.allowedAttributes,
  img: ['src', 'alt'],
};

export default function NotePreview({
  children,
}: {
  children: string | undefined;
}) {
  return (
    <div className='note-preview'>
      <div
        className='text-with-markdown'
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(marked(children || '') as string, {
            allowedTags,
            allowedAttributes,
          }),
        }}
      ></div>
    </div>
  );
}

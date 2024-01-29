import type { ZodIssue } from 'zod';
export interface Note {
  title: string;
  updateTime: string;
  content?: string;
}

export type EditorFormState = {
  message?: string | null;
  errors?: ZodIssue[];
} | void;

// export interface Note {
//   [key: string]: NoteVal
// }

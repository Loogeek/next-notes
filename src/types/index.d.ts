export interface NoteVal {
  title: string;
  content: string;
  updateTime: string;
}


export interface Note {
  [key: string]: NoteVal
}

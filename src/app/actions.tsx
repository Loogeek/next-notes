'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { addNote, updateNote, delNote } from '@/utils/prisma';
import type { EditorFormState } from '@/types';

const schema = z.object({
  title: z.string().min(1, '请填写标题').max(100, '字数最多 50'),
  content: z.string().min(1, '请填写内容').max(100, '字数最多 100'),
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function saveNote(prevData: EditorFormState, formData: FormData) {
  const noteId = formData.get('noteId') as string;
  const data = {
    title: formData.get('title'),
    content: formData.get('body'),
    updateTime: new Date(),
  };
  const validated = schema.safeParse(data);
  if (!validated.success) {
    console.log('[validated error]:', validated.error);
    return {
      errors: validated.error.issues,
    };
  }

  // await sleep(2000);

  // 更新数据库
  if (noteId) {
    await updateNote(noteId, JSON.stringify(data));
    revalidatePath('/', 'layout');
    return { message: 'Update Success!' };
  } else {
    const res = await addNote(JSON.stringify(data));
    revalidatePath('/', 'layout');
    redirect(`/note/${res}`);
    // return { message: 'Add Success!' };
  }
}

export async function deleteNote(
  prevData: EditorFormState,
  formData: FormData
) {
  const noteId = formData.get('noteId') as string;
  await delNote(noteId);
  revalidatePath('/', 'layout');
  redirect('/');
}

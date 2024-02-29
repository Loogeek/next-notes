const STRAPI_URL = 'http://127.0.0.1:1337/api';

export async function getAllNotes() {
  const resp = await fetch(`${STRAPI_URL}/notes`);
  const data: any = await resp.json();

  const result: any = {};

  data.data.forEach(
    ({ id, attributes: { title, content, slug, updatedAt } }) => {
      result[slug] = JSON.stringify({
        title,
        content,
        updateTime: updatedAt,
      });
    }
  );

  return result;
}

export async function addNote(data: string) {
  const response = await fetch(`http://localhost:1337/api/notes`, {
    method: 'POST',
    headers: {
      Authorization:
        'bearer c72d11bcf7141e2f62e69742f54618fb7f4db7f32584cc9d9e5f4e3df173ee4d120a24e94e6df6149edf3d53655992ba5f633ef535e826ac24dd6137af826e44ce8eb732810e7dc197805451b1f72d500f5c70fbf00306177c265799b13c0831b671585023fcebbebbdb0f21831bc382b3a48faf88055158dc3643ed38c169d0',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: JSON.parse(data),
    }),
  });
  const res = await response.json();
  return res.data.attributes.slug;
}

export async function updateNote(uuid: string, data: string) {
  const { id } = await getNote(uuid);
  const response = await fetch(`http://localhost:1337/api/notes/${id}`, {
    method: 'PUT',
    headers: {
      Authorization:
        'bearer c72d11bcf7141e2f62e69742f54618fb7f4db7f32584cc9d9e5f4e3df173ee4d120a24e94e6df6149edf3d53655992ba5f633ef535e826ac24dd6137af826e44ce8eb732810e7dc197805451b1f72d500f5c70fbf00306177c265799b13c0831b671585023fcebbebbdb0f21831bc382b3a48faf88055158dc3643ed38c169d0',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: JSON.parse(data),
    }),
  });
  const res = await response.json();
}

export async function getNote(uuid: string) {
  const response = await fetch(
    `http://localhost:1337/api/notes?filters[slug][$eq]=${uuid}`
  );
  const data = await response.json();
  return {
    title: data.data[0].attributes.title,
    content: data.data[0].attributes.content,
    updateTime: data.data[0].attributes.updatedAt,
    id: data.data[0].id,
  };
}

export async function delNote(uuid: string) {
  const { id } = await getNote(uuid);
  const response = await fetch(`http://localhost:1337/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization:
        'bearer c72d11bcf7141e2f62e69742f54618fb7f4db7f32584cc9d9e5f4e3df173ee4d120a24e94e6df6149edf3d53655992ba5f633ef535e826ac24dd6137af826e44ce8eb732810e7dc197805451b1f72d500f5c70fbf00306177c265799b13c0831b671585023fcebbebbdb0f21831bc382b3a48faf88055158dc3643ed38c169d0',
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();
}

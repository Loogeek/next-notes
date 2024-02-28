import Redis from 'ioredis';
import { Note } from '@/types/index';

const redis = new Redis();

const initialData = {
  '1702459181837':
    '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
  '1702459182837':
    '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
  '1702459188837':
    '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}',
};

const REDIS_NAME = 'notes';

export const getAllNotes = async () => {
  const notes = await redis.hgetall(REDIS_NAME);

  if (Object.keys(notes).length === 0) {
    await redis.hset(REDIS_NAME, initialData);
  }

  return await redis.hgetall(REDIS_NAME);
};

export const getNote = async (
  uuid: string
): Promise<Note | null | undefined> => {
  try {
    let note = await redis.hget(REDIS_NAME, uuid);

    if (note) {
      note = JSON.parse(note);
    }

    return note as Note | null;
  } catch (error) {
    console.error('getNote error: ', error);
  }

  return undefined;
};

export const updateNote = async (uuid: string, data: string) => {
  await redis.hset(REDIS_NAME, uuid, data);
};

export const addNote = async (data: string) => {
  const uuid = new Date().getTime();

  await redis.hset(REDIS_NAME, uuid, data);

  return uuid;
};

export const delNote = async (uuid: string) => {
  await redis.hdel(REDIS_NAME, uuid);
};

export async function addUser(username: string, password: string) {
  await redis.hset('users', [username], password);
  return {
    name: username,
    username,
  };
}

export async function getUser(username: string, password: string) {
  const passwordFromDB = await redis.hget('users', username);
  if (!passwordFromDB) return 0;
  if (passwordFromDB !== password) return 1;
  return {
    name: username,
    username,
  };
}

export default redis;

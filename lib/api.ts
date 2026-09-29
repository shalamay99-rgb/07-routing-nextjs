import axios from "axios";
import type { Note, NoteTag } from "../types/note";



interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesParams {
  page: number;
  perPage: number;
  search: string;
}

export interface CreateNoteParams {
  title: string;
  content: string;
  tag: NoteTag;
}

export const fetchNotes = async ({
  page,
  perPage,
  search,
}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>(
    "https://notehub-public.goit.study/api/notes",
    {
      params: {
        page,
        perPage,
        search,
      },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    },
  );
  return response.data;
};

export const createNote = async ({
  title,
  content,
  tag,
}: CreateNoteParams): Promise<Note> => {
  const response = await axios.post<Note>(
    "https://notehub-public.goit.study/api/notes",
    {
      title,
      content,
      tag,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    },
  );
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await axios.delete<Note>(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    },
  );
  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await axios.get<Note>(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    },
  );

  return response.data;
};
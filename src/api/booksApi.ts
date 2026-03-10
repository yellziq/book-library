import axios from "axios";
import type { Book } from "../types/book";

export const fetchBooksApi = async (): Promise<Book[]> => {
  const response = await axios.get<Book[]>("/books.json");
  return response.data;
};
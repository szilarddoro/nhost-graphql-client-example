import type { Request, Response } from "express";
import { client } from "./_client";

export default async function handler(req: Request, res: Response) {
  try {
    const books = await client.graphql.query.books();

    res.send(books);
  } catch (error) {
    res.status(500).send(error?.message || "An unknown error occurred.");
  }
}

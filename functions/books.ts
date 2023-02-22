import type { Request, Response } from "express";
import { client } from "./_client";

export default async function handler(req: Request, res: Response) {
  try {
    const users = await client.graphql.query.books({
      select: {
        id: true,
        title: true,
        author: true,
      },
    });

    res.send(users);
  } catch (error) {
    res.status(500).send(error?.message || "An unknown error occurred.");
  }
}

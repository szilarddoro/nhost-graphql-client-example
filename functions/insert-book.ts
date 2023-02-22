import type { Request, Response } from "express";
import { client } from "./_client";

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed.");
    return;
  }

  try {
    const user = await client.graphql.mutation.insert_books_one({
      // only `select` is available here, but we need `variables` too
    });

    res.send(user);
  } catch (error) {
    res.status(500).send(error?.message || "An unknown error occurred.");
  }
}

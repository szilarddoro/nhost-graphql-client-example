import { NhostClient } from "@nhost/nhost-js";
import schema from "../src/schema";

export const client = new NhostClient({
  subdomain: "localhost",
  schema,
  adminSecret: "nhost-admin-secret",
});

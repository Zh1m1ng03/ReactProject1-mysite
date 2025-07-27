// src/sanityClient.js
import createClient from "@sanity/client";

export const client = createClient({
  projectId: "mtqxm4xj",
  dataset: "production",
  apiVersion: "2023-07-26",
  useCdn: false,
});

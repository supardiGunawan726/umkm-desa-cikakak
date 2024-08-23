import { defineCollection, z } from "astro:content";
import { EnterpriseSchema } from "../schemas/enterprise";

const enterpriseCollection = defineCollection({
  type: "content",
  schema: EnterpriseSchema,
});

export const collections = {
  enterprise: enterpriseCollection,
};

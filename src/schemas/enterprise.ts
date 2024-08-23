import { z } from "astro:content";

export const EnterpriseSchema = z.object({
  name: z.string(),
  owner: z.string(),
  phoneNumber: z.string(),
  category: z.string(),
  bannerImg: z.string().optional(),
  mapEmbedUrl: z.string(),
});

export type IEnterprise = z.infer<typeof EnterpriseSchema>;

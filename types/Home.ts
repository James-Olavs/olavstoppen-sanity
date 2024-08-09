import { PortableTextBlock } from "sanity";

export type Home = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
  section: PortableTextBlock[];
};

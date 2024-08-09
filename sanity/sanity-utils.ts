import { Project } from "@/types/Project";
import { About } from "@/types/About";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client.config";
import { Home } from "@/types/Home";
import { Page } from "@/types/Page";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

// export async function getAbout(): Promise<About> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "about"][0]{
//             _id,
//             _createdAt,
//             name,
//             "slug": slug.current,
//             "image": image.asset->url,
//             url,
//             content
//         }`
//   );
// }

export async function getHome(): Promise<Home> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "home"][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            section
        }`
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
    }`,
    { slug }
  );
}

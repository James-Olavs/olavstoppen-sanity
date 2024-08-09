// import styles from "./page.module.css";

import { getHome } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Page() {
  const home = await getHome();
  console.log(home.content);

  return (
    <div>
      <div>
        <h1>Home page</h1>
        <h2 style={{ fontSize: "5rem" }}>Hero heading</h2>
        <PortableText value={home.content} />
        <PortableText value={home.section} />
        {home.image && (
          <Image src={home.image} alt={home.name} width={750} height={300} />
        )}
      </div>
    </div>
  );
}

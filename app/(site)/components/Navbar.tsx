import Link from "next/link";
import styles from "./Navbar.module.css";
import { getPages } from "@/sanity/sanity-utils";

export default async function Navbar() {
  const pages = await getPages();
  console.log(pages);

  return (
    <header>
      <nav
        className={styles.example}
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <Link href={"/"}>OT</Link>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Link href={"/"}>Home</Link>
          {pages.map((page) => (
            <Link key={page._id} href={`/${page.slug}`}>
              {page.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

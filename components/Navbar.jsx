import Link from "next/link";
import styles from "../styles/Header.module.css";
const Navbar = () => {
  const links = [
    {
      name: "Home",
      url: "/",
      id: 1,
    },
    {
      name: "Blog",
      url: "/blog",
      id: 2,
    },
    {
      name: "Videos",
      url: "/videos",
      id: 3,
    },
  ];
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {links.map(({ name, url, id }) => {
            return (
              <li key={id} className={styles.item}>
                <Link href={url}>
                  <a className={styles.link}>{name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

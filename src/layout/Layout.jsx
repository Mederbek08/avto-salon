import styles from "./Layout.module.css";

import React from "react";
import Logo from "../assets/logo.png"
import {instagram, whatsapp, youtube} from "../assets"

const menu = [
  {
    title: "Услуги",
    path: "/uslugi",
  },
  {
    title: "Каталог техники",
    path: "/catalog",
  },
  {
    title: "Аукционы",
    path: "/aukciony",
  },
  {
    title: "Информация",
    path: "/informacija",
  },
  {
    title: "О нас",
    path: "/o-nas",
  },
  {
    title: "Отзывы",
    path: "/otzyvy",
  },
  {
    title: "Контакты",
    path: "/kontakty",
  },
];

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__logo}>
            <img src={Logo} alt="logo" />
            <nav>
                {menu.map(m => <a href="" key={m.title}>{m.title}</a>)}
            </nav>
        </div>

        <div className={styles.sidebar__icons}>
            {[instagram, whatsapp, youtube].map(icon => <img  key={icon} src={icon} alt="" />)}
        </div>
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Layout;

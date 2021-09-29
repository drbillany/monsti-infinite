import React, { useState } from "react";
import L from "./Landing.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
export default function Nav() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={L.stickyNav}>
      <div
        className={L.mobileMenu}
        onClick={handleMenu}
        style={{ marginTop: menu ? "0" : " -100vh" }}
      >
        <a href='/' className={L.link}>
          Home
        </a>
        <a
          href='https://monstainfinite.com/roadmap/'
          className={L.link}
          href='https://monstainfinite.com/roadmap/'
        >
          Roadmap
        </a>
        <a href='https://monstainfinite.com/moni/' className={L.link}>
          MONI
        </a>
        <a href='https://monstainfinite.com/presale1/' className={L.link}>
          Presale1
        </a>
        <a
          href='https://monstainfinite.com/game-description/'
          className={L.link}
        >
          Game Description
        </a>
        <a href='https://monstainfinite.com/marketplace/' className={L.link}>
          Marketplace
        </a>
        <a href='https://docs.monstainfinite.com' className={L.link}>
          Doc
        </a>
        <a href='https://monstainfinite.com/monsta-barter/' className={L.link}>
          Monsta Barter
        </a>
        <Link
          to='/presale'
          className={L.link}
          style={{ color: "#fbca04", fontSize: "1.5rem", fontWeight: "700" }}
        >
          Monsta Presale
        </Link>
      </div>
      <header className={L.head}>
        <div>
          <img
            className={L.logo}
            src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-logo.png'
            srcset='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-logo.png 857w, https://monstainfinite.com/wp-content/uploads/2021/08/monsta-logo-300x140.png 300w, https://monstainfinite.com/wp-content/uploads/2021/08/monsta-logo-768x358.png 768w'
            alt='MonstaInfinite'
          />
        </div>

        <nav>
          <a href='/' className={L.link}>
            Home
          </a>
          <a
            href='https://monstainfinite.com/roadmap/'
            target='_blank'
            rel='noreferrer'
            className={L.link}
          >
            Roadmap
          </a>
          <a
            href='https://monstainfinite.com/moni/'
            target='_blank'
            rel='noreferrer'
            className={L.link}
          >
            MONI
          </a>
          <a href='https://monstainfinite.com/presale1/' className={L.link}>
            Presale1
          </a>
          <a
            href='https://monstainfinite.com/game-description/'
            className={L.link}
          >
            Game Description
          </a>

          <a
            className={L.link}
            href='https://docs.monstainfinite.com/'
            target='_blank'
            rel='noreferrer'
          >
            Doc
          </a>
          <a
            className={L.link}
            href='https://monstainfinite.com/monsta-barter/'
          >
            Monsta Barter
          </a>
        </nav>
        <div className={L.burger} onClick={handleMenu}>
          <MenuIcon />
        </div>
        <Link to='/presale' className={L.topRight}>
          <img
            className={L.presaleImage}
            src='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-navbar-flag@2X.png'
            alt=''
            srcset='https://monstainfinite.com/wp-content/uploads/2021/08/monsta-navbar-flag@2X.png 326w, https://monstainfinite.com/wp-content/uploads/2021/08/monsta-navbar-flag@2X-300x184.png 300w'
          />
          <div className={L.preSale}>Monsta Presale</div>
        </Link>
      </header>
    </div>
  );
}

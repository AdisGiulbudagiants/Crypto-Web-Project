import { NavLink } from "react-router-dom"
import SvgStorage from "./SvgStorage"
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <div id="top" className={styles.main}>
      <div className={styles.icon}>
        <SvgStorage className={styles.svg} id="nav" />
      </div>
      <div className={styles.links}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "link")}
          to="."
          end>
          <p>Home</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "link")}
          to="main">
          <p>Crypto</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "link")}
          to="aboutme">
          <p>About me</p>
        </NavLink>
      </div>
      <div className={styles.social}>
        <a href="https://github.com/AdisGiulbudagiants" target="_blank">
          <SvgStorage id="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/adis-giulbudagiants-developer/"
          target="_blank">
          <SvgStorage id="linkedIn" />
        </a>
        <a
          href="https://discordapp.com/users/478565463857823748/"
          target="_blank">
          <SvgStorage id="discord" />
        </a>
        <a href="https://t.me/AbuDabiSida" target="_blank">
          <SvgStorage id="telegram" />
        </a>
        <a href="https://vk.com/id383399628" target="_blank">
          <SvgStorage id="vk" />
        </a>
      </div>
    </div>
  )
}

export default Nav

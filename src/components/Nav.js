import SvgStorage from "./SvgStorage"
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <div id="top" className={styles.main}>
      <div className={styles.icon}>
        <SvgStorage className={styles.svg} id="nav" />
      </div>
      <div className={styles.links}>
        <p className={styles.home}>Home</p>
        <p className={styles.aboutMe}>About me</p>
        <p className={styles.crypto}>Crypto Info</p>
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

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
    </div>
  )
}

export default Nav

import Nav from "../components/Nav"
import styles from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.welcome}>
        <h1 className={styles.header}>Welcome to my Project</h1>
        <p className={styles.text}>Click something in Navigation</p>
      </div>
    </div>
  )
}

export default HomePage

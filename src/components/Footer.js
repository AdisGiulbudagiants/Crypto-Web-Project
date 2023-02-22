import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__main}>
        <h1 className={styles.footer__just}>I just want to say something.</h1>
        <h1 className={styles.footer__text}>
          This project was created for my{" "}
          <span className={styles.purple}>GitHub</span> profile. I know it's not
          perfect design. But{" "}
          <span className={styles.purple}>
            I really want to develop in programming.
          </span>
          That's why I do now that project and{" "}
          <span className={styles.purple}>will do all next projects.</span>
          <br />
          Because{" "}
          <span className={styles.purple}>
            I just want to prove to myself that I can do whatever I want.
          </span>
        </h1>
        <h1 className={styles.footer__text}>
          I just want you to know a little bit about my motivation
        </h1>
      </div>
    </footer>
  )
}

export default Footer

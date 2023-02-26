import styles from "./AboutMe.module.css"
import photo from "../DSC_1795.JPG"

const AboutMe = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.leftWrapper}>
          <img className={styles.photo} src={photo} alt="My Photo" />
          <div className={styles.links}></div>
          <div className={styles.funFacts}>
            <p className={styles.funFacts__text}>Fun Facts</p>
            <ul>
              <li>Studied at a music school for 8 years</li>
              <li>Dropped out of university in 2nd year</li>
              <li>I have been living in Armenia for the last six months</li>
              <li>
                This project was created to show you that I know React Router.
                This is why there is no UI styles here.That's not what I want to
                show)
              </li>
              <li>
                I understand that these are not very funny but I don't know how
                else call what I wrote above
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <p className={styles.title}>Name:</p>
          <h1 className={styles.name}>Adis Giulbudagiants</h1>
          <p className={styles.title}>Job position:</p>
          <h1 className={styles.spec}>Frontend Developer</h1>
          <p className={styles.aboutMe}>
            <span>Front-end developer with 1+ years of experience.</span> I
            created projects in pure <span>JavaScript</span> and using the{" "}
            <span>create-react-app.</span> In the process of studying and making
            projects, <span>I mastered the skill of working with:</span>
            <br />
            • API <br />• HTML / CSS <br />• Pre-processor SASS
            <br /> • Tailwindcss / Bootstrap <br />• BEM methodology <br />•
            React hooks <br />• React Routing <br />
            <span>Also using npm packages like that:</span>
            <br /> • react-beautiful-dnd <br />• react-spring <br />• axios
            <br /> • react-scroll
            <br /> • styled-components <br />
            <span>
              Free reading of documentation in English and Russian languages.
            </span>
            Incredible interest in the study of information technology for
            future use in practice. I'll be glad if you are interested in me and
            you <span>email me soon)</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutMe

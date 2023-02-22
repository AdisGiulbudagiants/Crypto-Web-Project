import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-scroll"
import Loading from "../components/Loading"
import Nav from "../components/Nav"
import styles from "./MainPage.module.css"
import SvgStorage from "../components/SvgStorage"

const MainPage = () => {
  const [crypto, setCrypto] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"

  const fetchCrypto = () => {
    axios(url)
      .then(({ data }) => {
        setCrypto(data)
        Object.values(crypto)
      })
      .catch((err) => {
        console.log(err)
        alert(`Возникла ошибка: ${err}`)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  useEffect(fetchCrypto, [])

  const filterCrypto = crypto.filter((crypto) => {
    return (
      crypto.name.toLowerCase().includes(input.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(input.toLowerCase())
    )
  })

  if (isLoading) {
    return <Loading />
  }

  const updatedDate = (date) => {
    const res = Date.parse(date)
    const res2 = new Date(res).toLocaleTimeString()
    return res2
  }

  return (
    <div>
      <Nav />
      <div className={styles.mainHeader}>
        <h1 className={styles.mainHeader__text}>Crypto Informarion</h1>
      </div>
      <form className={styles.search}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Crypto name"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div className={styles.main}>
        <div className={styles.header}>
          <p className={styles.header__logo}>Logos</p>
          <p className={styles.header__name}>Crypto Name</p>
          <p className={styles.header__price}>Price in USD</p>
          <p className={styles.header__high}>Highest in 24h</p>
          <p className={styles.header__low}>Lowest in 24h</p>
          <p className={styles.header__percent}>Change in % for 24 hours</p>
          <p className={styles.header__time}>Last updated</p>
        </div>
        {filterCrypto.map((data) => {
          return (
            <div key={data.market_cap_rank} className={styles.pack}>
              <img src={data.image} alt="Crypto" />
              <div className={styles.name}>
                <h2 className={styles.id}>{data.name}</h2>
                <hr />
                <h2 className={styles.symbol}>{data.symbol}</h2>
              </div>
              <p className={styles.price}>{data.current_price.toFixed(2)}</p>
              <p className={styles.high}>{data.high_24h.toFixed(2)}</p>
              <p className={styles.low}>{data.low_24h.toFixed(2)}</p>
              <p className={styles.change}>
                {data.price_change_percentage_24h} %
              </p>
              <p className={styles.date}>{updatedDate(data.last_updated)}</p>
            </div>
          )
        })}
      </div>
      <div className={styles.arrow}>
        <Link smooth={true} duration={3000} to="top">
          <SvgStorage id="arrow" />
        </Link>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer__main}>
          <h1 className={styles.footer__just}>I just want to say something.</h1>
          <h1 className={styles.footer__text}>
            This project was created for my{" "}
            <span className={styles.purple}>GitHub</span> profile. I know it's
            not perfect design. But{" "}
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
    </div>
  )
}

export default MainPage

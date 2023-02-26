import styles from "./SvgStorage.module.css"

const SvgStorage = ({ id }) => {
  switch (id) {
    case "github":
      return (
        <svg
          className={styles.githubName}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.0002 0C8.95583 0 0 9.18079 0 20.5063C0 29.5666 5.73066 37.2532 13.6773 39.9648C14.6769 40.1546 15.0438 39.5199 15.0438 38.9783C15.0438 38.4893 15.0253 36.8739 15.0167 35.1604C9.45262 36.4009 8.27853 32.7409 8.27853 32.7409C7.36874 30.3707 6.05788 29.7404 6.05788 29.7404C4.24326 28.4677 6.19466 28.4939 6.19466 28.4939C8.20302 28.6385 9.26053 30.607 9.26053 30.607C11.0443 33.742 13.9393 32.8357 15.0806 32.3117C15.2601 30.9864 15.7784 30.0817 16.3504 29.5696C11.9081 29.0511 7.23825 27.2928 7.23825 19.4353C7.23825 17.1965 8.01954 15.3672 9.29894 13.9311C9.09129 13.4146 8.40671 11.329 9.49269 8.50435C9.49269 8.50435 11.1722 7.95322 14.9942 10.6063C16.5895 10.152 18.3005 9.92412 20.0002 9.91631C21.6999 9.92412 23.4121 10.152 25.0105 10.6063C28.8278 7.95322 30.505 8.50435 30.505 8.50435C31.5936 11.329 30.9087 13.4146 30.7011 13.9311C31.9834 15.3672 32.7594 17.1965 32.7594 19.4353C32.7594 27.3115 28.0806 29.0457 23.6271 29.5533C24.3444 30.1897 24.9836 31.4376 24.9836 33.3508C24.9836 36.0946 24.9605 38.3029 24.9605 38.9783C24.9605 39.524 25.3205 40.1634 26.3343 39.962C34.2766 37.2475 40 29.5635 40 20.5063C40 9.18079 31.0455 0 20.0002 0"
            fill="#161514"
          />
          <path
            d="M7.63406 29.3019C7.59009 29.4028 7.43406 29.4331 7.29191 29.3638C7.14712 29.2976 7.0658 29.16 7.11274 29.0588C7.15571 28.9549 7.31208 28.926 7.45654 28.9956C7.60166 29.0619 7.68431 29.2007 7.63406 29.3019"
            fill="#161514"
          />
          <path
            d="M8.44264 30.2191C8.34743 30.3089 8.16132 30.2672 8.03504 30.1253C7.90446 29.9838 7.88 29.7945 7.97653 29.7033C8.07471 29.6136 8.2552 29.6556 8.38611 29.7972C8.51669 29.9404 8.54215 30.1283 8.44264 30.2191"
            fill="#161514"
          />
          <path
            d="M9.22974 31.3886C9.10743 31.475 8.90743 31.3939 8.78379 31.2134C8.66148 31.0328 8.66148 30.8163 8.78644 30.7295C8.9104 30.6428 9.10743 30.7208 9.23272 30.9C9.3547 31.0836 9.3547 31.3001 9.22974 31.3886"
            fill="#161514"
          />
          <path
            d="M10.3081 32.5183C10.1987 32.641 9.96561 32.608 9.79504 32.4406C9.62049 32.2769 9.5719 32.0445 9.68165 31.9218C9.79239 31.7987 10.0268 31.8334 10.1987 31.9995C10.3719 32.1629 10.4248 32.3969 10.3081 32.5183"
            fill="#161514"
          />
          <path
            d="M11.7957 33.1742C11.7474 33.3333 11.523 33.4056 11.2968 33.338C11.0711 33.2684 10.9233 33.0821 10.9689 32.9214C11.0158 32.7614 11.2413 32.686 11.4691 32.7583C11.6945 32.8276 11.8426 33.0125 11.7957 33.1742"
            fill="#161514"
          />
          <path
            d="M13.4294 33.296C13.4351 33.4634 13.2433 33.6023 13.006 33.6053C12.7673 33.6107 12.5742 33.4752 12.5716 33.3104C12.5716 33.1413 12.759 33.0038 12.9977 32.9998C13.2351 32.995 13.4294 33.1295 13.4294 33.296"
            fill="#161514"
          />
          <path
            d="M14.9498 33.0327C14.9782 33.1961 14.8132 33.3639 14.5775 33.4086C14.3458 33.4516 14.1313 33.3508 14.1018 33.1887C14.0731 33.0213 14.241 32.8535 14.4724 32.8101C14.7085 32.7684 14.9197 32.8666 14.9498 33.0327"
            fill="#161514"
          />
        </svg>
      )
    case "discord":
      return (
        <svg
          className={styles.discordName}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0ZM12.421 8.66667H28.2457C29.5802 8.66667 30.6667 9.74 30.6667 11.07V32L28.1276 29.7833L26.6987 28.4767L25.187 27.0883L25.813 29.2467H12.421C11.0865 29.2467 10 28.1733 10 26.8433V11.07C10 9.74 11.0865 8.66667 12.421 8.66667Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.6873 23.9033C23.6873 23.9033 23.2621 23.4016 22.9078 22.9583C24.4549 22.5266 25.0454 21.57 25.0454 21.57C24.5612 21.885 24.1006 22.1066 23.6873 22.2583C23.0968 22.5033 22.5299 22.6666 21.9749 22.76C20.8412 22.97 19.8019 22.9116 18.9162 22.7483C18.2431 22.62 17.6644 22.4333 17.1802 22.2466C16.9086 22.1416 16.6134 22.0133 16.3181 21.85C16.3004 21.8383 16.2827 21.8296 16.265 21.8208C16.2473 21.8121 16.2295 21.8033 16.2118 21.7916C16.1882 21.78 16.1764 21.7683 16.1646 21.7566C15.952 21.64 15.8339 21.5583 15.8339 21.5583C15.8339 21.5583 16.4008 22.4916 17.9006 22.935C17.5463 23.3783 17.1094 23.9033 17.1094 23.9033C14.4994 23.8216 13.5074 22.13 13.5074 22.13C13.5074 18.3733 15.208 15.3283 15.208 15.3283C16.9086 14.0683 18.5265 14.1033 18.5265 14.1033L18.6446 14.2433C16.5189 14.85 15.5387 15.7716 15.5387 15.7716C15.5387 15.7716 15.7985 15.6316 16.2354 15.4333C17.4991 14.885 18.5029 14.7333 18.9162 14.6983L18.9427 14.6939C19.0023 14.6839 19.0551 14.675 19.117 14.675C19.8374 14.5816 20.6522 14.5583 21.5025 14.6516C22.6244 14.78 23.829 15.1066 25.0572 15.7716C25.0572 15.7716 24.1242 14.8966 22.1166 14.29L22.2819 14.1033C22.2819 14.1033 23.8998 14.0683 25.6004 15.3283C25.6004 15.3283 27.301 18.3733 27.301 22.13C27.301 22.13 26.2972 23.8216 23.6873 23.9033ZM18.5284 18.6666C17.8606 18.6666 17.3334 19.2672 17.3334 20C17.3334 20.7327 17.8723 21.3333 18.5284 21.3333C19.1963 21.3333 19.7235 20.7327 19.7235 20C19.7352 19.2672 19.1963 18.6666 18.5284 18.6666ZM21.6099 20C21.6099 19.2672 22.1371 18.6666 22.8049 18.6666C23.4728 18.6666 24 19.2672 24 20C24 20.7327 23.4728 21.3333 22.8049 21.3333C22.1488 21.3333 21.6099 20.7327 21.6099 20Z"
            fill="black"
          />
        </svg>
      )
    case "telegram":
      return (
        <svg
          className={styles.telegramName}
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
            fill="black"
          />
          <path
            d="M8.93825 25.174C11.7439 23.6286 14.8757 22.3388 17.8019 21.0424C22.8361 18.919 27.8903 16.8324 32.9955 14.8898C33.9887 14.5588 35.7735 14.2351 35.9485 15.7071C35.8526 17.7907 35.4584 19.8621 35.188 21.9335C34.5018 26.4887 33.7085 31.0283 32.935 35.5685C32.6685 37.0808 30.774 37.8637 29.5618 36.8959C26.6486 34.9281 23.713 32.9795 20.837 30.9661C19.8949 30.0088 20.7686 28.6341 21.6099 27.9505C24.0093 25.5859 26.5539 23.5769 28.8279 21.0901C29.4413 19.6088 27.6289 20.8572 27.0311 21.2397C23.7463 23.5033 20.5419 25.9051 17.0787 27.8945C15.3097 28.8683 13.2479 28.0361 11.4797 27.4927C9.89431 26.8363 7.57109 26.175 8.93809 25.1741L8.93825 25.174Z"
            fill="#AAFFFF"
          />
        </svg>
      )
    case "vk":
      return (
        <svg
          className={styles.vkName}
          width="40"
          height="40"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5322 0.900024H32.2676C45.7157 0.900024 48.8999 4.08422 48.8999 17.5323V32.2677C48.8999 45.7158 45.7157 48.9 32.2676 48.9H17.5322C4.08409 48.9 0.899902 45.7158 0.899902 32.2677V17.5323C0.899902 4.08422 4.08409 0.900024 17.5322 0.900024Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.1942 17.4307C40.4313 16.6855 40.1942 16.1435 39.1441 16.1435H35.655C34.7743 16.1435 34.3678 16.6177 34.1307 17.1259C34.1307 17.1259 32.3354 21.4618 29.8287 24.2733C29.0157 25.0863 28.6431 25.3573 28.2027 25.3573C27.9656 25.3573 27.6607 25.0863 27.6607 24.3411V17.3968C27.6607 16.5161 27.3897 16.1096 26.6445 16.1096H21.1568C20.6148 16.1096 20.2761 16.5161 20.2761 16.9226C20.2761 17.7695 21.5294 17.9727 21.6649 20.3439V25.4928C21.6649 26.6107 21.4617 26.8139 21.0213 26.8139C19.8357 26.8139 16.9564 22.4441 15.2288 17.4646C14.8901 16.4822 14.5513 16.1096 13.6706 16.1096H10.1476C9.13141 16.1096 8.96204 16.5839 8.96204 17.092C8.96204 18.0066 10.1476 22.6135 14.4836 28.7109C17.3629 32.8774 21.4617 35.1131 25.154 35.1131C27.3897 35.1131 27.6607 34.605 27.6607 33.7582V30.6079C27.6607 29.5916 27.8639 29.4223 28.5753 29.4223C29.0834 29.4223 29.998 29.6932 32.0644 31.6918C34.4356 34.063 34.8421 35.147 36.1632 35.147H39.6522C40.6685 35.147 41.1427 34.6389 40.8717 33.6565C40.5668 32.6742 39.4151 31.2515 37.9246 29.5577C37.1116 28.6093 35.8922 27.5592 35.5196 27.051C35.0114 26.3736 35.1469 26.1026 35.5196 25.4928C35.4857 25.4928 39.7538 19.4632 40.1942 17.4307Z"
            fill="#AAFFFF"
          />
        </svg>
      )
    case "arrow":
      return (
        <svg
          className={styles.arrowName}
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.9">
            <path
              d="M41.9375 37.1562L45.625 33.4479L25 12.8438L4.375 33.4687L8.0625 37.1562L25 20.2187L41.9375 37.1562Z"
              fill="#AAFFFF"
            />
          </g>
        </svg>
      )
    case "nav":
      return (
        <svg
          className={styles.navName}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet">
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none">
            <path
              d="M2311 4966 c-117 -68 -217 -130 -222 -137 -5 -8 -9 -130 -9 -271 l0
     -257 27 -21 c42 -33 427 -250 444 -250 21 0 431 237 452 261 15 19 17 48 17
     275 0 238 -1 254 -19 271 -37 34 -429 253 -453 253 -13 0 -119 -56 -237 -124z
     m389 -72 c83 -48 150 -90 150 -93 -1 -8 -287 -171 -300 -171 -18 0 -300 164
     -297 173 2 6 282 174 295 176 1 1 70 -38 152 -85z m-202 -538 c1 -97 -1 -176
     -5 -176 -5 0 -73 38 -153 84 l-145 84 -3 180 -2 181 152 -88 153 -89 3 -176z
     m412 175 l0 -179 -148 -86 c-82 -47 -152 -86 -156 -86 -3 0 -5 79 -4 176 l3
     176 150 88 c83 49 151 89 153 89 1 1 2 -80 2 -178z"
            />
            <path
              d="M1645 4103 c-137 -80 -253 -151 -257 -157 -15 -23 -8 -56 16 -71 23
     -15 27 -15 63 3 54 28 476 272 491 284 15 13 16 60 0 76 -7 7 -23 12 -37 11
     -15 0 -138 -66 -276 -146z"
            />
            <path
              d="M3134 4225 c-15 -22 -15 -27 -1 -47 12 -19 462 -288 516 -309 48 -19
     91 45 55 81 -32 32 -507 300 -531 300 -13 0 -29 -11 -39 -25z"
            />
            <path
              d="M575 3964 c-121 -70 -223 -132 -227 -138 -5 -6 -7 -132 -5 -280 l2
     -269 225 -128 c123 -71 229 -129 235 -129 13 0 424 236 448 257 15 15 17 41
     17 278 0 237 -2 263 -17 277 -24 21 -419 249 -441 254 -9 3 -115 -52 -237
     -122z m377 -76 c79 -45 147 -84 151 -88 6 -6 -282 -180 -298 -180 -15 0 -305
     173 -300 179 10 9 289 170 297 170 5 1 72 -36 150 -81z m-349 -278 l147 -84 0
     -179 0 -178 -62 35 c-35 20 -105 60 -155 89 l-93 52 0 178 c0 98 3 177 8 175
     4 -1 74 -41 155 -88z m565 -87 l-3 -177 -95 -56 c-52 -31 -121 -71 -152 -89
     l-58 -32 0 178 0 179 148 86 c81 47 150 87 155 87 4 1 6 -79 5 -176z"
            />
            <path
              d="M4075 3969 c-116 -66 -218 -128 -227 -136 -16 -15 -18 -41 -18 -277
     0 -144 4 -266 8 -272 9 -14 442 -264 457 -264 14 0 424 236 447 257 16 15 18
     40 18 278 0 237 -2 263 -17 278 -24 20 -435 257 -448 257 -6 0 -105 -54 -220
     -121z m368 -81 c78 -45 146 -84 150 -88 7 -6 -282 -180 -298 -180 -12 0 -305
     173 -301 177 9 9 291 172 299 172 4 1 72 -36 150 -81z m-350 -278 l147 -84 0
     -179 0 -178 -62 35 c-35 20 -105 60 -155 89 l-93 52 0 178 c0 98 4 177 8 175
     5 -1 75 -41 155 -88z m565 -87 l-3 -177 -95 -56 c-52 -31 -121 -71 -152 -89
     l-58 -32 0 178 0 179 148 86 c81 47 150 87 155 87 4 1 6 -79 5 -176z"
            />
            <path
              d="M2165 3210 c-198 -115 -365 -217 -372 -226 -19 -25 -19 -852 0 -877
     15 -21 737 -437 757 -437 8 0 182 97 385 214 l370 214 0 448 0 449 -369 212
     c-204 117 -379 213 -390 212 -12 0 -183 -95 -381 -209z m679 -72 c154 -88 287
     -166 293 -172 10 -9 -60 -53 -287 -184 l-300 -173 -300 172 c-165 95 -296 177
     -292 181 17 17 577 338 591 338 7 0 140 -73 295 -162z m-671 -435 c150 -86
     284 -165 300 -175 l27 -19 0 -345 c0 -189 -2 -344 -5 -344 -3 0 -141 78 -305
     172 l-300 173 0 347 c0 192 2 348 6 348 3 0 127 -70 277 -157z m1037 -190 l0
     -348 -295 -170 c-163 -93 -300 -171 -305 -173 -6 -2 -10 123 -10 345 l0 348
     298 172 c163 95 300 172 305 173 4 0 7 -156 7 -347z"
            />
            <path
              d="M1402 3234 c-26 -18 -29 -55 -4 -76 34 -30 210 -128 229 -128 30 0
     57 35 49 64 -4 18 -35 41 -121 90 -63 36 -118 66 -122 66 -5 0 -19 -7 -31 -16z"
            />
            <path
              d="M3540 3182 c-95 -56 -116 -72 -118 -93 -3 -30 20 -59 48 -59 19 0
     200 100 233 128 9 8 17 25 17 38 0 22 -33 54 -55 54 -5 0 -62 -31 -125 -68z"
            />
            <path
              d="M565 1942 l-220 -127 -3 -271 c-2 -248 -1 -272 15 -286 39 -33 426
     -248 447 -248 19 0 326 169 429 236 l37 24 0 264 c0 217 -3 267 -14 279 -26
     25 -434 257 -453 257 -10 -1 -117 -58 -238 -128z m537 -160 c9 -9 -289 -178
     -305 -174 -32 9 -295 168 -288 175 4 4 72 45 152 91 l144 83 145 -84 c80 -47
     148 -88 152 -91z m-492 -193 l140 -81 0 -178 0 -179 -152 88 -153 88 -3 178
     c-2 158 -1 177 13 171 9 -3 79 -42 155 -87z m558 -85 l-3 -176 -153 -88 -152
     -88 2 180 3 181 145 83 c80 46 148 84 153 84 4 0 6 -79 5 -176z"
            />
            <path
              d="M4055 1942 l-220 -128 -3 -271 c-2 -233 0 -272 13 -283 41 -34 430
     -250 450 -250 20 0 409 216 450 250 13 11 15 52 15 274 0 195 -3 266 -12 278
     -19 23 -434 258 -455 258 -10 -1 -117 -58 -238 -128z m537 -160 c6 -6 -259
     -165 -289 -174 -18 -5 -313 166 -304 175 5 5 74 46 152 91 l144 82 145 -84
     c80 -45 148 -86 152 -90z m-502 -186 l145 -84 3 -180 2 -181 -152 88 -153 88
     -3 177 c-1 97 1 176 5 176 5 0 73 -38 153 -84z m568 -92 l-3 -176 -153 -89
     -152 -88 2 181 3 180 145 84 c80 46 148 84 153 84 4 0 6 -79 5 -176z"
            />
            <path
              d="M1497 1997 c-110 -63 -133 -89 -110 -125 23 -38 48 -33 164 34 62 35
     116 70 121 76 21 34 -5 78 -45 78 -12 0 -71 -28 -130 -63z"
            />
            <path
              d="M3431 2046 c-7 -8 -11 -27 -9 -42 3 -24 20 -38 113 -92 115 -67 150
     -77 172 -46 32 43 13 64 -134 147 -85 49 -122 57 -142 33z"
            />
            <path
              d="M1402 1214 c-26 -18 -29 -55 -4 -76 35 -32 507 -298 527 -298 12 0
     26 5 33 12 18 18 15 63 -5 80 -23 19 -509 298 -520 298 -5 0 -19 -7 -31 -16z"
            />
            <path
              d="M3405 1085 c-137 -79 -259 -155 -269 -169 -18 -23 -18 -26 -2 -50 9
     -15 26 -26 38 -26 21 0 494 266 531 298 9 8 17 25 17 38 0 22 -33 54 -55 54
     -5 0 -122 -65 -260 -145z"
            />
            <path
              d="M2310 934 c-118 -69 -218 -130 -222 -137 -10 -16 -10 -518 0 -534 13
     -20 440 -263 462 -263 22 0 410 220 448 253 22 20 22 24 22 273 0 248 0 253
     -22 277 -32 34 -423 257 -450 256 -13 0 -120 -56 -238 -125z m393 -74 c81 -46
     147 -87 147 -90 0 -3 -68 -44 -150 -91 l-151 -87 -149 86 c-83 48 -150 89
     -150 92 0 7 293 179 300 177 3 -1 72 -40 153 -87z m-353 -276 l150 -86 0 -174
     c0 -96 -4 -174 -8 -174 -5 0 -74 37 -153 83 l-144 83 -3 177 c-1 97 0 177 3
     177 3 0 73 -39 155 -86z m558 -91 l-3 -176 -145 -84 c-79 -45 -148 -83 -152
     -83 -5 0 -8 78 -8 174 l0 174 148 86 c81 47 150 86 155 86 4 0 6 -79 5 -177z"
            />
          </g>
        </svg>
      )
    case "linkedIn":
      return (
        <svg
          className={styles.linkedInName}
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.3187 14.8227C17.3187 16.3918 16.1376 17.6473 14.2411 17.6473H14.2064C12.3804 17.6473 11.2 16.3918 11.2 14.8227C11.2 13.2204 12.4164 12 14.277 12C16.1376 12 17.2834 13.2204 17.3187 14.8227ZM16.9605 19.8778V36.2196H11.5216V19.8778H16.9605ZM36.5751 36.2196L36.5753 26.8497C36.5753 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1325 21.0802 25.4106 22.1929V19.8783H19.9711C20.0427 21.4117 19.9711 36.22 19.9711 36.22H25.4106V27.0934C25.4106 26.605 25.4459 26.1178 25.5897 25.7681C25.9828 24.7924 26.8778 23.7822 28.3805 23.7822C30.3494 23.7822 31.1364 25.2807 31.1364 27.4767V36.2196H36.5751Z"
            fill="#AAFFFF"
          />
        </svg>
      )

    default:
      return <svg></svg>
  }
}

export default SvgStorage

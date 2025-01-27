import { motion } from "framer-motion";
const NotFound = () => {
    
  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col">
      <svg
        width="350"
        height="350"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          animate={{ rotate: 360 }} // Rotate 360 degrees
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path
            d="M32.9846 97.4359L35.9366 98.7179L33.883 103.077L37.4767 104.744L35.9366 108.205L32.3429 106.538L26.054 120.256L23.1021 118.974L17.0698 99.6154L18.61 96.1538L30.9311 101.795L32.9846 97.4359ZM25.1556 114.744L29.391 105.385L20.9202 101.538L25.1556 114.744Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M31.9579 92.6923C26.5674 88.9744 25.1556 83.2051 29.776 76.4103C34.3964 69.6154 40.3003 68.8462 45.6908 72.5641C51.0813 76.2821 52.493 82.0513 48.001 88.718C43.2522 95.5128 37.4767 96.4103 31.9579 92.6923ZM43.3805 75.8975C39.2735 73.0769 35.4232 74.1026 32.4712 78.3334C29.5193 82.5641 30.0327 86.5385 34.1397 89.359C38.2468 92.1795 42.0971 91.1539 45.049 86.9231C48.1293 82.6923 47.4876 78.5898 43.3805 75.8975Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M67.2527 54.2308L69.5629 56.5385L66.2259 60L69.0495 62.6923L66.4826 65.3846L63.659 62.6923L53.1347 73.4615L50.8246 71.1538L51.5946 50.8975L54.1615 48.2051L63.9157 57.5641L67.2527 54.2308ZM54.1615 67.8205L61.3488 60.3846L54.6749 53.9744L54.1615 67.8205Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M98.4405 25.641C100.879 29.6154 99.5956 33.5898 95.4885 36.1539L84.9642 42.5641L88.0446 47.5641L84.8359 49.4872L74.0549 31.7949L87.7878 23.4615C91.7665 20.8974 96.0019 21.6667 98.4405 25.641ZM92.4083 33.9744C94.2051 32.8205 97.0287 31.1538 94.9752 27.6923C92.7933 24.2308 89.9697 25.8974 88.1729 27.0513L78.9321 32.6923L83.1674 39.6154L92.4083 33.9744Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M126.291 28.3333L122.184 25.1282L108.195 30.7692L107.553 35.8974L103.574 37.5641L106.911 13.8462L111.403 12.0513L130.398 26.6667L126.291 28.3333ZM108.708 27.1795L119.232 22.9487L110.248 15.8974L108.708 27.1795Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M138.356 3.33335C146.056 1.66668 150.805 4.35899 152.345 8.46155L148.367 9.35899C147.212 6.66668 144.003 5.51284 139.126 6.66669C131.168 8.33336 131.168 13.5898 131.682 16.0256C132.195 18.5898 134.634 23.2051 142.719 21.5385C146.313 20.7692 148.238 19.8718 150.548 18.2052L149.778 14.8718L140.923 16.7949L140.281 13.718L152.859 11.0257L154.527 18.9744C150.677 22.3077 147.597 23.8462 143.233 24.7436C134.89 26.5385 128.987 23.4616 127.575 16.9231C126.291 10.3846 130.142 5.12822 138.356 3.33335Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M179.554 3.20513L161.458 3.84615L161.714 9.23079L179.169 8.58976L179.298 11.9231L161.843 12.5641L162.099 18.0769L180.196 17.4359L180.324 20.7692L158.506 21.5385L157.736 0.769239L179.554 0V3.20513Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M221.78 6.15385L225.502 6.92309L221.01 27.1795L215.748 26.0256L203.17 5.76923L199.448 22.4359L195.726 21.6667L200.218 1.41026L205.48 2.5641L218.058 22.8205L221.78 6.15385Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M227.812 18.5897C230.507 12.4359 236.154 10.2564 244.369 13.8462C252.711 17.4359 254.893 23.0769 252.326 29.2308C249.759 35.3846 243.984 37.5641 235.769 34.1026C227.427 30.2564 225.117 24.6154 227.812 18.5897ZM248.604 27.4359C250.657 22.5641 248.476 19.1026 243.085 16.7949C237.695 14.4872 233.716 15.1282 231.534 20.1282C229.352 25.1282 231.662 28.4615 237.053 30.7692C242.443 33.0769 246.55 32.4359 248.604 27.4359Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M279.663 38.4615L270.679 32.5641L261.182 47.0513L258.101 45L267.599 30.5128L258.486 24.6154L260.283 21.7949L281.46 35.7692L279.663 38.4615Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M309.311 67.6923L297.118 54.359L291.984 59.1026L302.894 71.1538L300.455 73.4615L289.546 61.4103L284.284 66.1539L281.717 63.3333L297.118 49.359L311.878 65.5128L309.311 67.6923Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M306.487 75.1282C312.135 71.5385 318.038 72.8205 322.916 80.5128C327.793 88.0769 326.509 94.1026 320.862 97.6923C315.215 101.282 309.311 100 304.434 92.4359C299.557 84.6154 300.969 78.7179 306.487 75.1282ZM318.809 94.2308C323.301 91.4102 323.301 87.3077 320.22 82.3077C317.14 77.3077 313.29 75.641 308.798 78.5897C304.306 81.5385 304.306 85.641 307.386 90.5128C310.466 95.3846 314.316 97.0513 318.809 94.2308Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M332.413 126.154C325.739 128.846 320.99 126.41 317.653 118.077C314.316 109.615 316.113 104.744 322.787 102.051L332.67 98.0769L334.082 101.538L324.199 105.513C321.119 106.795 317.653 108.974 320.734 116.795C323.814 124.615 327.921 123.846 331.001 122.692L340.884 118.718L342.296 122.179L332.413 126.154Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M348.585 150.769L349.355 154.487L328.948 158.333L327.921 153.077L341.654 133.59L324.841 136.795L324.071 133.077L344.478 129.231L345.504 134.487L331.771 153.974L348.585 150.769Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M339.729 187.051C332.67 187.179 329.333 182.564 329.204 177.051L328.948 162.179L349.74 161.795L349.996 176.667C350.125 182.18 346.916 186.923 339.729 187.051ZM332.541 175.128C332.67 180.513 333.953 183.205 339.6 183.077C345.376 182.949 346.531 180.256 346.531 174.872L346.403 165.769L332.413 166.026L332.541 175.128Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M318.552 249.744L315.6 248.462L317.525 243.974L313.931 242.436L315.472 238.974L319.065 240.513L325.097 226.667L328.049 227.949L334.467 247.18L332.926 250.641L320.477 245.256L318.552 249.744ZM325.996 232.308L321.889 241.795L330.36 245.513L325.996 232.308Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M319.579 254.487C325.097 258.077 326.509 263.846 322.145 270.641C317.653 277.436 311.878 278.462 306.359 274.872C300.84 271.282 299.3 265.513 303.792 258.718C308.156 251.795 314.06 250.897 319.579 254.487ZM308.413 271.538C312.52 274.231 316.37 273.205 319.194 268.846C322.017 264.487 321.375 260.641 317.268 257.82C313.161 255.128 309.183 256.154 306.359 260.513C303.664 264.744 304.306 268.846 308.413 271.538Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M284.926 293.462L282.615 291.282L285.952 287.692L283 285L285.567 282.308L288.519 285L298.787 273.974L301.097 276.154L300.712 296.41L298.145 299.103L288.262 289.872L284.926 293.462ZM297.888 279.615L290.829 287.18L297.632 293.462L297.888 279.615Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M254.379 322.821C251.941 318.974 253.096 314.872 257.203 312.308L267.599 305.769L264.39 300.769L267.599 298.718L278.765 316.282L265.16 324.872C261.053 327.308 256.818 326.667 254.379 322.821ZM260.283 314.231C258.486 315.385 255.663 317.18 257.845 320.513C260.027 323.974 262.85 322.18 264.647 321.026L273.759 315.256L269.396 308.462L260.283 314.231Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M226.4 320.513L230.507 323.59L244.369 317.692L245.01 312.564L248.989 310.897L246.165 334.744L241.802 336.667L222.55 322.308L226.4 320.513ZM243.984 321.41L233.588 325.897L242.7 332.692L243.984 321.41Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M214.849 345.641C207.277 347.436 202.4 344.872 200.731 340.769L204.71 339.872C205.993 342.436 209.074 343.59 214.079 342.436C222.037 340.641 221.908 335.385 221.395 332.949C220.753 330.513 218.315 325.769 210.357 327.692C206.764 328.59 204.838 329.487 202.528 331.154L203.298 334.487L212.026 332.436L212.796 335.513L200.346 338.462L198.549 330.513C202.4 327.18 205.48 325.513 209.715 324.487C217.93 322.564 223.962 325.513 225.502 332.051C226.785 338.462 222.935 343.718 214.849 345.641Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M173.651 346.667L191.747 345.641L191.49 340.256L174.036 341.154L173.907 337.949L191.362 336.923L191.105 331.538L173.009 332.564L172.88 329.359L194.699 328.205L195.854 348.846L174.036 350L173.651 346.667Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M131.425 344.359L127.703 343.59L131.81 323.205L137.072 324.231L150.035 344.359L153.372 327.564L157.094 328.333L152.987 348.718L147.725 347.692L134.762 327.564L131.425 344.359Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M125.136 332.18C122.569 338.333 117.051 340.641 108.58 337.308C100.237 333.846 97.9271 328.333 100.366 322.18C102.933 316.026 108.451 313.718 116.922 317.051C125.393 320.385 127.703 325.897 125.136 332.18ZM104.216 323.59C102.162 328.59 104.473 331.923 109.992 334.103C115.51 336.282 119.489 335.513 121.414 330.641C123.468 325.641 121.158 322.308 115.639 320.128C110.248 317.821 106.27 318.59 104.216 323.59Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M72.8998 313.205L82.0123 318.974L91.2532 304.231L94.4618 306.282L85.221 321.026L94.3334 326.795L92.5366 329.615L71.103 316.026L72.8998 313.205Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M42.7388 284.487L55.1883 297.564L60.1937 292.821L49.0277 281.026L51.4663 278.718L62.6323 290.513L67.7661 285.641L70.3329 288.333L55.1883 302.564L40.1719 286.667L42.7388 284.487Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M45.4341 276.923C39.9152 280.641 33.883 279.359 28.8776 271.923C23.8721 264.359 25.0272 258.462 30.5461 254.744C36.0649 251.026 42.0971 252.308 47.1025 259.744C52.108 267.308 50.9529 273.333 45.4341 276.923ZM32.8563 258.077C28.3642 261.026 28.4925 265.128 31.7012 270C34.9098 274.872 38.6318 276.538 43.1239 273.59C47.6159 270.641 47.4876 266.538 44.279 261.667C41.0704 256.795 37.22 255.128 32.8563 258.077Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M18.4816 226.538C25.0272 223.718 29.9043 226.026 33.3697 234.359C36.835 242.692 35.1665 247.692 28.4925 250.513L18.61 254.615L17.1982 251.154L26.9524 247.051C30.0327 245.769 33.3697 243.462 30.161 235.769C26.9524 228.077 22.8454 228.846 19.7651 230.128L10.1392 234.103L8.72743 230.641L18.4816 226.538Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M2.05352 202.051L1.28345 198.333L21.5619 194.103L22.717 199.359L9.36916 219.103L26.1823 215.641L26.9524 219.359L6.67391 223.59L5.51881 218.333L18.8667 198.59L2.05352 202.051Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M10.2676 165.641C17.3266 165.513 20.6635 170.128 20.7918 175.641L21.0485 190.513L0.256666 190.897L0 176.026C0 170.513 3.20862 165.769 10.2676 165.641ZM17.5832 177.564C17.4549 172.179 16.1715 169.487 10.3959 169.615C4.62042 169.744 3.46529 172.436 3.59364 177.821L3.72199 186.923L17.7116 186.667L17.5832 177.564Z"
            fill="#0F0F0F"
          ></path>
        </motion.g>
        <path
          d="M174.047 74.5111C172.324 74.4971 170.622 74.5532 168.928 74.6304C167.226 74.7216 165.559 74.8549 163.871 75.0093C162.204 75.1777 160.544 75.4022 158.891 75.6548C157.245 75.9074 155.627 76.2022 154.002 76.539C152.384 76.8687 150.786 77.2406 149.203 77.6476C147.606 78.0616 146.03 78.5177 144.481 79.0089C142.919 79.493 141.385 80.0193 139.864 80.5736C138.33 81.1349 136.837 81.7314 135.344 82.3699C133.866 83.0014 132.394 83.668 130.943 84.3697C129.486 85.0643 128.07 85.8011 126.661 86.5729C125.259 87.3518 123.871 88.1517 122.504 88.9797C121.13 89.8077 119.784 90.6848 118.466 91.5829C117.134 92.474 115.85 93.4073 114.574 94.3615C113.291 95.3299 112.035 96.3122 110.822 97.3366C109.594 98.3541 108.38 99.4066 107.209 100.473C106.03 101.554 104.879 102.655 103.756 103.799C102.626 104.922 101.531 106.08 100.478 107.265C99.5086 108.493 98.6367 109.819 97.8347 111.216C97.0884 112.619 96.3839 114.065 95.6586 115.566C94.8704 117.082 94.0404 118.618 93.1965 120.19C92.2758 121.727 91.1878 123.214 89.8835 124.555C88.4537 125.797 86.9193 127.018 85.3221 128.21C83.6691 129.396 81.9951 130.596 80.3003 131.824C78.6822 133.094 77.2872 134.596 76.1922 136.259C75.1321 137.957 74.1556 139.704 73.2768 141.535C72.4747 143.402 71.8261 145.324 71.303 147.275C70.8915 149.233 70.7101 151.183 70.752 153.127C70.9194 155.043 71.1774 156.93 71.5959 158.832C72.0562 160.698 72.5933 162.536 73.1931 164.382C73.8487 166.185 74.5671 167.974 75.3343 169.736C76.0737 171.469 76.8827 173.181 77.6709 174.879C78.4381 176.528 79.1983 178.156 79.8958 179.77C80.2236 181.475 80.391 183.166 80.4258 184.871C80.2864 186.527 80.1259 188.056 80.0771 189.53C80.112 190.961 80.1957 192.372 80.4189 193.726C80.7676 195.094 81.2977 196.385 81.9882 197.613C82.6856 198.813 83.3831 199.992 84.0527 201.164C84.5549 202.406 84.9036 203.697 85.1617 205.03C85.3012 206.433 85.4058 207.83 85.4755 209.233C85.4546 210.685 85.336 212.152 85.1686 213.625C85.0291 215.106 85.0431 216.566 85.2175 218.011C85.5871 219.435 86.1102 220.811 86.7449 222.186C87.4075 223.575 88.2026 224.979 89.0256 226.347C89.8556 227.722 90.7344 229.076 91.6202 230.403C92.513 231.729 93.4267 233.034 94.3961 234.318C95.3447 235.595 96.3212 236.872 97.3325 238.1C98.3508 239.342 99.397 240.549 100.464 241.735C101.531 242.913 102.633 244.071 103.763 245.208C104.886 246.338 106.03 247.432 107.202 248.499C108.387 249.579 109.587 250.632 110.822 251.656C112.028 252.667 113.291 253.663 114.567 254.617C115.85 255.586 117.141 256.505 118.473 257.41C119.784 258.308 121.137 259.171 122.49 259.992C123.857 260.834 125.259 261.634 126.654 262.413C128.07 263.192 129.493 263.929 130.95 264.623C132.394 265.318 133.866 265.999 135.351 266.637C136.83 267.262 138.337 267.858 139.857 268.412C141.378 268.981 142.926 269.5 144.474 269.991C146.03 270.468 147.606 270.917 149.189 271.338C150.779 271.745 152.384 272.124 154.002 272.454C155.62 272.777 157.245 273.071 158.891 273.331C160.544 273.591 162.19 273.794 163.871 273.97C165.538 274.131 167.226 274.271 168.928 274.342C170.615 274.426 172.317 274.475 174.026 274.468C175.749 274.461 177.458 274.426 179.159 274.335C180.854 274.264 182.535 274.138 184.195 273.97C185.876 273.801 187.536 273.591 189.175 273.317C190.821 273.079 192.453 272.784 194.071 272.454C195.689 272.117 197.294 271.752 198.884 271.338C200.46 270.91 202.043 270.475 203.599 269.984C205.154 269.507 206.695 268.981 208.216 268.405C209.743 267.865 211.243 267.262 212.736 266.63C214.221 265.992 215.679 265.332 217.13 264.623C218.58 263.929 220.003 263.185 221.405 262.413C222.821 261.648 224.209 260.834 225.576 260.013C226.936 259.171 228.282 258.301 229.614 257.41C230.933 256.505 232.223 255.586 233.499 254.624C234.783 253.663 236.038 252.674 237.266 251.656C238.493 250.639 239.693 249.586 240.864 248.506C242.043 247.439 243.194 246.338 244.324 245.208C245.44 244.071 246.542 242.913 247.665 241.777C248.837 240.626 249.994 239.461 251.117 238.289C252.247 237.111 253.475 235.904 254.737 234.655C256.013 233.392 257.276 232.087 258.49 230.739C259.724 229.385 260.945 227.989 262.13 226.607C263.337 225.287 264.55 224.038 265.743 222.81C266.943 221.583 268.142 220.369 269.321 219.106C270.472 217.843 271.574 216.53 272.62 215.183C273.611 213.822 274.531 212.426 275.368 210.973C276.135 209.507 276.798 207.977 277.3 206.398C277.642 204.763 277.816 203.072 277.872 201.339C277.865 199.592 277.795 197.803 277.663 195.985C277.558 194.182 277.3 192.365 276.784 190.568C276.142 188.786 275.382 186.962 274.559 185.123C273.722 183.306 272.76 181.461 271.72 179.573C270.723 177.651 269.921 175.742 269.544 173.904C269.217 172.135 268.972 170.43 268.903 168.823C268.952 167.259 268.903 165.708 268.756 164.178C268.526 162.649 268.205 161.133 267.717 159.639C267.068 158.13 266.259 156.593 265.311 155.05C264.369 153.471 263.428 151.913 262.486 150.355C261.6 148.791 260.742 147.247 259.898 145.696C259.166 144.145 258.559 142.581 258.099 141.023C257.799 139.444 257.548 137.887 257.36 136.343C257.206 134.792 257.067 133.255 256.899 131.74C256.753 130.217 256.585 128.723 256.383 127.256C256.181 125.783 255.909 124.337 255.595 122.906C255.302 121.474 254.918 120.085 254.486 118.717C254.068 117.341 253.565 116.015 252.973 114.696C252.31 113.405 251.543 112.128 250.713 110.893C249.715 109.665 248.683 108.451 247.616 107.265C246.542 106.073 245.447 104.929 244.324 103.799C243.201 102.648 242.043 101.554 240.864 100.48C239.693 99.4136 238.486 98.3471 237.266 97.3296C236.038 96.3192 234.783 95.3369 233.513 94.3615C232.237 93.4143 230.933 92.4881 229.614 91.5899C228.289 90.6918 226.943 89.8006 225.583 88.9797C224.216 88.1307 222.828 87.3518 221.419 86.5729C220.01 85.8011 218.58 85.0713 217.123 84.3767C215.686 83.661 214.221 83.0084 212.736 82.3769C211.243 81.7243 209.729 81.1349 208.209 80.5806C206.695 80.0123 205.147 79.493 203.592 79.0018C202.043 78.5177 200.467 78.0616 198.884 77.6616C197.287 77.2476 195.689 76.8758 194.071 76.5319C192.453 76.2022 190.828 75.9004 189.175 75.6478C187.536 75.4093 185.876 75.1847 184.195 75.0233C182.535 74.8549 180.854 74.7146 179.159 74.6374C177.465 74.5462 175.749 74.5041 174.047 74.5111ZM68.7154 180.696C68.5619 179.868 68.3178 179.026 68.0528 178.177C67.7389 177.314 67.425 176.402 67.0972 175.503C66.7764 174.598 66.4346 173.672 66.1138 172.732C65.786 171.785 65.4373 170.83 65.1304 169.862C64.4957 167.897 63.9098 165.897 63.3797 163.877C62.8636 161.793 62.4939 159.709 62.1871 157.569C61.9499 155.393 62.0057 153.19 62.0057 150.973C62.2987 148.741 62.7381 146.538 63.303 144.377C63.9447 142.223 64.7049 140.132 65.5628 138.069C66.4904 136.069 67.5297 134.133 68.6107 132.238C69.8871 130.47 71.4146 128.821 73.0745 127.256C74.8461 125.741 76.6874 124.302 78.5497 123.011C80.3631 121.706 82.044 120.366 83.4459 118.885C84.4363 117.264 85.1965 115.587 85.7754 113.917C86.3125 112.198 86.8635 110.514 87.4354 108.865C88.0073 107.244 88.6281 105.673 89.3883 104.213C90.3787 102.824 91.5435 101.498 92.7152 100.178C93.9079 98.8733 95.1076 97.5963 96.363 96.3473C97.5905 95.0983 98.8669 93.8844 100.171 92.6775C101.475 91.4987 102.801 90.3269 104.161 89.2183C105.5 88.0956 106.902 86.9939 108.311 85.9344C109.713 84.8749 111.149 83.8434 112.621 82.854C114.072 81.8647 115.557 80.9104 117.071 79.9912C118.584 79.058 120.119 78.1739 121.674 77.3178C123.236 76.4688 124.813 75.6619 126.417 74.876C128.014 74.0971 129.639 73.3674 131.285 72.6587C132.924 71.964 134.591 71.2974 136.265 70.6729C137.953 70.0765 139.648 69.4801 141.371 68.9609C143.093 68.4135 144.837 67.9154 146.581 67.4733C148.338 67.0032 150.117 66.6032 151.902 66.2243C153.695 65.8665 155.501 65.5297 157.315 65.263C159.128 64.9894 160.969 64.7438 162.811 64.5613C163.738 64.4631 164.666 64.3859 165.594 64.3158C166.528 64.2386 167.456 64.1824 168.384 64.1333C169.318 64.0772 170.274 64.0491 171.215 64.021C172.157 64 173.091 64 174.047 64C174.989 64 175.944 64.007 176.886 64.0281C177.827 64.0421 178.762 64.0842 179.703 64.1263C180.638 64.1824 181.573 64.2316 182.493 64.3017C183.428 64.3719 184.356 64.4701 185.269 64.5613C187.125 64.7438 188.952 64.9894 190.772 65.256C192.593 65.5297 194.392 65.8665 196.171 66.2313C197.963 66.6032 199.735 67.0102 201.492 67.4663C203.243 67.9083 204.98 68.4206 206.695 68.9538C208.418 69.4801 210.12 70.0695 211.801 70.68C213.482 71.3045 215.142 71.964 216.795 72.6587C218.434 73.3674 220.052 74.1112 221.656 74.883C223.26 75.6478 224.837 76.4758 226.399 77.3108C227.954 78.1668 229.482 79.058 230.988 79.9772C232.502 80.9034 233.994 81.8717 235.459 82.847C236.917 83.8504 238.354 84.8749 239.755 85.9344C241.164 86.9939 242.559 88.0815 243.905 89.2183C245.265 90.3339 246.598 91.5057 247.902 92.6916C249.199 93.8844 250.469 95.0983 251.717 96.3543C252.959 97.5893 254.172 98.8733 255.344 100.178C256.53 101.484 257.687 102.831 258.803 104.192C259.926 105.56 261.014 106.95 262.068 108.367C263.121 109.791 263.979 111.223 264.648 112.752C265.248 114.275 265.75 115.826 266.19 117.412C266.566 119.004 266.866 120.625 267.061 122.288C267.285 123.944 267.466 125.621 267.612 127.319C267.759 129.024 267.843 130.765 267.919 132.498C268.045 134.252 268.184 135.999 268.366 137.76C268.617 139.521 268.952 141.269 269.537 143.016C270.409 144.721 271.365 146.419 272.334 148.117C273.366 149.815 274.406 151.52 275.431 153.232C276.47 154.93 277.454 156.649 278.409 158.368C279.344 160.088 279.951 161.835 280.25 163.589C280.334 164.459 280.383 165.35 280.411 166.227C280.404 167.132 280.334 168.031 280.264 168.922C280.202 169.827 280.111 170.739 280.02 171.651C279.951 172.584 279.881 173.539 279.818 174.514C279.811 175.482 279.909 176.479 280.167 177.482C280.523 178.493 280.969 179.51 281.408 180.52C281.897 181.538 282.413 182.555 282.901 183.566C283.41 184.583 283.919 185.594 284.4 186.604C285.335 188.639 286.019 190.688 286.597 192.758C286.821 194.849 286.939 196.905 286.988 198.939C287.023 200.974 286.981 202.981 286.869 204.953C286.688 206.903 286.353 208.805 285.788 210.594C285.091 212.313 284.303 213.962 283.41 215.548C282.454 217.106 281.45 218.607 280.397 220.067C279.302 221.526 278.151 222.944 276.938 224.319C275.71 225.701 274.434 227.042 273.122 228.368C271.79 229.687 270.409 230.978 269 232.234C267.626 233.532 266.336 234.886 265.171 236.297C264.146 237.749 263.121 239.195 262.068 240.612C261.007 242.029 259.926 243.433 258.803 244.794C257.687 246.162 256.516 247.495 255.337 248.808C254.172 250.113 252.952 251.39 251.717 252.646C250.469 253.895 249.199 255.116 247.895 256.301C246.598 257.487 245.266 258.652 243.912 259.775C242.559 260.904 241.164 261.999 239.755 263.059C238.354 264.118 236.917 265.143 235.452 266.139C233.987 267.121 232.495 268.09 230.988 269.016C229.482 269.935 227.94 270.819 226.399 271.675C224.83 272.517 223.26 273.324 221.649 274.096C220.052 274.882 218.434 275.626 216.788 276.313C215.135 277.008 213.489 277.675 211.794 278.299C210.106 278.916 208.418 279.492 206.695 280.032C204.98 280.579 203.243 281.064 201.485 281.513C199.735 281.976 197.963 282.383 196.178 282.755C194.392 283.127 192.572 283.449 190.765 283.723C188.952 284.004 187.118 284.235 185.276 284.432C184.349 284.53 183.428 284.593 182.493 284.677C181.566 284.754 180.631 284.811 179.697 284.853C178.762 284.895 177.813 284.944 176.872 284.972C175.923 284.986 174.982 285 174.04 285C173.091 284.993 172.143 284.993 171.194 284.965C170.267 284.944 169.318 284.895 168.384 284.867C167.456 284.811 166.514 284.747 165.587 284.684C164.666 284.614 163.738 284.53 162.804 284.418C160.969 284.235 159.135 284.004 157.308 283.723C155.48 283.449 153.695 283.127 151.895 282.755C150.117 282.397 148.338 281.969 146.588 281.513C144.837 281.071 143.093 280.579 141.378 280.032C139.655 279.499 137.953 278.916 136.265 278.292C134.591 277.675 132.924 277.008 131.292 276.327C129.646 275.626 128.007 274.889 126.417 274.11C124.82 273.324 123.229 272.524 121.667 271.654C120.119 270.826 118.584 269.935 117.078 269.016C115.564 268.09 114.072 267.128 112.621 266.139C111.142 265.129 109.713 264.111 108.311 263.059C106.895 261.999 105.507 260.897 104.147 259.775C102.794 258.652 101.468 257.48 100.171 256.301C98.8669 255.116 97.5975 253.895 96.356 252.646C95.1145 251.397 93.9079 250.113 92.7152 248.808C91.5435 247.495 90.3787 246.162 89.2767 244.794C88.1398 243.426 87.0657 242.029 85.9986 240.619C84.9454 239.195 83.9341 237.742 82.9367 236.29C81.9603 234.816 81.0047 233.315 80.098 231.799C79.1704 230.283 78.2846 228.733 77.4267 227.175C76.6037 225.61 75.7807 224.017 75.0135 222.396C74.33 220.797 73.8627 219.169 73.6046 217.555C73.4651 215.983 73.4163 214.446 73.3535 212.952C73.0536 211.563 72.7188 210.166 72.391 208.77C72.0214 207.402 71.6168 206.026 71.1844 204.644C70.5915 203.276 69.9499 201.872 69.3291 200.427C68.7433 198.925 68.3039 197.347 68.1295 195.691C68.0179 194.042 67.99 192.372 68.0249 190.702C68.0737 189.846 68.1365 188.99 68.2271 188.141C68.3806 187.299 68.548 186.471 68.6875 185.643C68.7502 184.829 68.806 184.008 68.827 183.187C68.82 182.359 68.7921 181.524 68.7154 180.696Z"
          fill="#0F0F0F"
        ></path>
        <path
          d="M152.453 147.254C152.802 148.433 153.165 149.605 153.527 150.762C153.939 151.92 154.337 153.057 154.734 154.179C155.118 155.288 155.508 156.383 155.864 157.456C156.234 158.544 156.561 159.589 156.847 160.6C157.161 161.624 157.412 162.621 157.65 163.589C157.873 164.55 158.054 165.497 158.194 166.396C158.514 168.227 158.8 169.946 159.031 171.539C159.261 173.132 159.337 174.57 159.254 175.833C159.121 177.089 158.779 178.142 158.27 178.984C157.733 179.819 157.085 180.478 156.31 180.906C155.508 181.341 154.616 181.559 153.625 181.524C152.614 181.503 151.554 181.229 150.473 180.738C149.35 180.254 148.122 179.524 146.846 178.619C145.472 177.693 144.035 176.563 142.452 175.258C140.757 173.925 138.964 172.43 137.102 170.774C135.261 169.132 133.378 167.35 131.494 165.455C130.588 164.543 129.709 163.603 128.9 162.642C128.175 161.694 127.449 160.719 126.752 159.709C126.082 158.712 125.427 157.695 124.813 156.642C124.227 155.597 123.683 154.537 123.153 153.457C122.672 152.383 122.232 151.303 121.855 150.194C121.528 149.092 121.304 147.97 121.193 146.826C121.2 145.682 121.367 144.566 121.625 143.451C121.918 142.342 122.288 141.248 122.685 140.16C123.125 139.093 123.585 138.041 124.073 137.009C124.583 135.978 125.12 134.961 125.671 133.971C126.243 132.975 126.828 132.013 127.421 131.087C128.014 130.154 128.607 129.242 129.214 128.365C130.42 126.611 131.613 124.969 132.827 123.474C134.019 121.98 135.163 120.618 136.3 119.439C137.402 118.247 138.497 117.243 139.578 116.394C140.631 115.573 141.664 114.914 142.689 114.479C143.721 114.037 144.746 113.812 145.779 113.819C146.818 113.791 147.815 114.03 148.736 114.479C149.65 114.921 150.487 115.566 151.219 116.415C151.944 117.25 152.558 118.282 153.039 119.475C153.493 120.66 153.834 122.029 154.03 123.53C154.204 125.053 154.239 126.709 154.127 128.491C154.078 129.382 153.995 130.294 153.876 131.249C153.758 132.203 153.618 133.178 153.451 134.175C153.297 135.185 153.109 136.203 152.907 137.248C152.732 138.286 152.53 139.36 152.328 140.441C152.16 141.528 152.105 142.637 152.098 143.767C152.153 144.91 152.251 146.068 152.453 147.254Z"
          fill="#0F0F0F"
        ></path>
        <path
          d="M207.895 146.868C208.16 147.991 208.418 149.113 208.697 150.222C208.99 151.317 209.276 152.411 209.562 153.478C209.855 154.537 210.127 155.576 210.378 156.6C210.65 157.653 210.88 158.656 211.062 159.631C211.25 160.614 211.403 161.575 211.522 162.494C211.641 163.428 211.731 164.34 211.801 165.224C211.857 166.978 211.773 168.599 211.55 170.1C211.41 171.595 211.285 172.956 210.992 174.156C210.678 175.363 210.225 176.395 209.597 177.237C208.969 178.079 208.244 178.745 207.428 179.194C206.64 179.65 205.726 179.889 204.715 179.889C203.675 179.889 202.594 179.657 201.471 179.208C200.349 178.759 199.191 178.1 198.026 177.258C196.861 176.409 195.641 175.384 194.322 174.205C192.99 173.048 191.623 171.721 190.347 170.283C189.119 168.845 187.975 167.259 186.846 165.54C186.288 164.684 185.723 163.792 185.137 162.873C184.558 161.954 183.986 161.021 183.407 160.038C182.842 159.077 182.284 158.074 181.726 157.042C181.182 156.018 180.666 154.972 180.171 153.906C179.697 152.832 179.243 151.738 178.846 150.622C178.483 149.52 178.197 148.412 177.988 147.289C177.834 146.145 177.792 145.037 177.897 143.921C178.078 142.798 178.35 141.69 178.685 140.602C179.055 139.514 179.473 138.441 179.927 137.381C180.415 136.336 180.917 135.304 181.447 134.301C181.991 133.291 182.542 132.308 183.121 131.354C183.693 130.407 184.279 129.48 184.865 128.582C186.023 126.793 187.208 125.123 188.429 123.614C189.621 122.092 190.807 120.709 191.986 119.51C193.13 118.289 194.267 117.257 195.383 116.415C196.492 115.559 197.58 114.914 198.654 114.479C199.721 114.03 200.781 113.798 201.806 113.812C202.838 113.805 203.808 114.03 204.673 114.479C205.552 114.928 206.333 115.552 207.009 116.408C207.679 117.243 208.195 118.261 208.6 119.439C209.018 120.618 209.297 121.973 209.451 123.474C209.548 124.969 209.548 126.611 209.423 128.372C209.353 129.249 209.262 130.161 209.144 131.094C209.011 132.049 208.851 133.01 208.683 133.999C208.523 134.996 208.349 136.006 208.16 137.045C208 138.083 207.832 139.143 207.679 140.223C207.574 141.297 207.505 142.384 207.484 143.493C207.56 144.602 207.707 145.724 207.895 146.868Z"
          fill="#0F0F0F"
        ></path>
        <path
          d="M249.987 192.905C251.703 193.494 253.007 194.589 253.691 195.873C254.36 197.199 254.451 198.764 253.851 200.259C253.524 201.164 253.14 202.069 252.687 202.953C252.17 203.844 251.536 204.721 250.789 205.584C250.043 206.468 249.311 207.353 248.627 208.244C247.986 209.142 247.379 210.033 246.87 210.917C246.43 211.815 246.033 212.727 245.642 213.618C245.342 214.531 245.049 215.422 244.784 216.306C244.533 217.19 244.24 218.053 243.94 218.909C243.619 219.744 243.271 220.565 242.831 221.365C242.225 222.13 241.478 222.846 240.683 223.554C239.846 224.256 238.953 224.93 237.949 225.575C236.819 226.207 235.599 226.81 234.357 227.371C233.123 227.968 231.888 228.564 230.667 229.168C229.475 229.806 228.296 230.424 227.131 231.027C226.008 231.638 224.941 232.227 223.874 232.802C222.814 233.371 221.782 233.932 220.784 234.486C219.899 235.055 219.034 235.616 218.19 236.17C217.402 236.732 216.613 237.272 215.818 237.798C215.016 238.317 214.193 238.83 213.384 239.328C212.561 239.826 211.731 240.31 210.887 240.773C210.05 241.236 209.199 241.693 208.335 242.128C207.477 242.556 206.612 242.977 205.733 243.384C204.854 243.784 203.961 244.162 203.069 244.541C202.169 244.906 201.269 245.264 200.349 245.594C199.449 245.938 198.528 246.253 197.594 246.555C196.673 246.857 195.731 247.145 194.797 247.411C193.855 247.678 192.907 247.923 191.944 248.155C190.989 248.38 190.012 248.597 189.05 248.793C188.08 248.99 187.111 249.165 186.127 249.32C185.144 249.474 184.153 249.614 183.156 249.727C182.152 249.853 181.154 249.958 180.15 250.035C179.146 250.113 178.12 250.176 177.109 250.218C176.098 250.26 175.072 250.281 174.047 250.281C173.008 250.281 171.983 250.253 170.971 250.218C169.953 250.169 168.928 250.113 167.923 250.035C166.926 249.951 165.928 249.853 164.917 249.727C163.934 249.607 162.943 249.474 161.953 249.32C160.976 249.165 160 248.99 159.031 248.786C158.061 248.597 157.092 248.38 156.136 248.148C155.174 247.923 154.218 247.671 153.276 247.411C152.342 247.145 151.407 246.857 150.473 246.548C149.545 246.253 148.624 245.938 147.704 245.601C146.797 245.264 145.897 244.899 145.011 244.541C144.105 244.169 143.226 243.784 142.347 243.377C141.475 242.977 140.596 242.556 139.746 242.128C138.881 241.693 138.023 241.236 137.186 240.766C136.349 240.31 135.512 239.826 134.689 239.328C133.88 238.83 133.057 238.324 132.262 237.798C131.46 237.272 130.671 236.725 129.89 236.177C129.116 235.616 128.335 235.048 127.582 234.465C126.828 233.883 126.075 233.279 125.336 232.669C124.61 232.066 123.885 231.434 123.167 230.796C122.462 230.164 121.758 229.511 121.06 228.838C120.384 228.178 119.742 227.512 119.163 226.838C118.584 226.157 118.04 225.47 117.566 224.768C117.085 224.073 116.631 223.365 116.171 222.642C115.746 221.933 115.313 221.204 114.909 220.467C114.532 219.73 114.169 218.993 113.828 218.25C113.486 217.485 113.2 216.741 112.914 215.976C112.649 215.218 112.384 214.439 112.14 213.668C111.896 212.882 111.665 212.103 111.47 211.31C111.268 210.524 111.107 209.724 110.954 208.931C110.794 208.124 110.661 207.31 110.536 206.496C110.403 205.675 110.298 204.848 110.201 204.013C110.117 203.171 110.033 202.336 109.978 201.486C109.824 200.062 110.34 198.539 111.324 197.206C112.265 195.845 113.653 194.673 115.202 194.028C116.645 193.361 118.277 193.396 119.742 193.993C121.186 194.589 122.344 195.705 122.741 197.206C123.013 198.708 123.299 200.174 123.606 201.599C123.871 203.016 124.185 204.405 124.527 205.774C124.848 207.128 125.203 208.44 125.636 209.738C126.068 211.022 126.556 212.292 127.121 213.52C127.693 214.762 128.328 215.955 129.025 217.106C129.709 218.278 130.434 219.386 131.257 220.481C132.101 221.561 133.043 222.621 134.04 223.617C135.017 224.635 136.105 225.596 137.263 226.515C138.434 227.427 139.669 228.305 140.966 229.133C142.291 229.961 143.665 230.732 145.081 231.469C146.504 232.199 148.004 232.886 149.51 233.511C151.031 234.135 152.558 234.704 154.127 235.209C155.697 235.721 157.287 236.17 158.919 236.57C160.537 236.949 162.176 237.286 163.843 237.553C165.496 237.812 167.184 238.023 168.886 238.149C170.595 238.289 172.303 238.36 174.047 238.36C175.77 238.353 177.492 238.289 179.201 238.156C180.903 238.016 182.584 237.812 184.237 237.553C185.904 237.279 187.543 236.949 189.168 236.563C190.786 236.177 192.376 235.728 193.96 235.216C195.592 234.711 197.224 234.15 198.856 233.532C200.481 232.908 202.113 232.241 203.766 231.511C205.433 230.781 207.114 230.031 208.934 229.308C210.831 228.613 212.763 227.884 214.758 227.126C216.816 226.354 218.811 225.519 220.687 224.628C222.591 223.709 224.467 222.726 226.225 221.667C227.822 220.551 229.224 219.344 230.34 218.053C231.149 216.713 231.756 215.31 232.244 213.85C232.704 212.398 233.13 210.896 233.569 209.373C234.406 207.886 235.438 206.398 236.463 204.911C237.614 203.458 238.751 201.985 239.693 200.49C240.544 198.981 241.297 197.473 241.918 195.957C242.497 194.491 243.647 193.431 245.091 192.898C246.444 192.344 248.202 192.309 249.987 192.905Z"
          fill="#0F0F0F"
        ></path>
      </svg>
    </div>
  );
};
export default NotFound;

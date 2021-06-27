import styled from "styled-components";
import { COLORS } from "../../styles/constant";
import { device } from "../../device";

export const Practice = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${COLORS.lightYellow};
  overflow: hidden;

  > .background {
    background-image: url("data:image/svg+xml, %3Csvg width='320' height='377' viewBox='0 0 320 377' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M320.804 20.3247C317.241 12.3222 311.727 5.33498 304.78 0C296.399 0.418039 289.073 5.89237 286.326 13.8948L263.633 80.2834C261.005 87.9873 250.594 89.1817 246.274 82.2741C241.437 74.5304 232.857 69.932 223.74 70.2107C214.284 70.4894 205.764 75.9637 201.544 84.424L183.708 126.805L141.147 84.2449C133.782 76.8794 123.789 72.7388 113.377 72.7388C107.485 72.7388 101.852 75.0878 97.6711 79.2483C88.9918 87.9276 74.9377 87.9276 66.2784 79.2483L45.0977 58.0676C38.6281 51.598 29.8293 47.9551 20.6723 47.9551C9.14633 47.9551 -1.60324 53.6882 -8.01317 63.2633L-143 254.586L423.164 245.17L320.804 20.3247Z' fill='%23F6E6A4' /%3E%3Cpath d='M-28.5554 133C-28.8938 133 -29.2322 133 -29.5706 133C-75.9332 133.219 -120.325 151.772 -153.768 183.861L-309 332.743H188.944C179.529 220.868 85.7484 133 -28.5554 133Z' fill='%23ADB010' /%3E%3Crect x='279.911' y='96.6256' width='10.1833' height='29.7955' fill='%239F7535' /%3E%3Cpath opacity='0.1' d='M284.06 96.6256L290.095 96.6256L290.095 126.421L284.06 126.421L284.06 96.6256Z' fill='black' /%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M283.872 31L303.306 60.7012L296.475 60.7012L311.12 83.0479L302.793 83.0479L315.366 101.906L252 101.906L264.573 83.0479L256.246 83.0479L270.892 60.7012L264.437 60.7012L283.872 31Z' fill='%239CC27E' /%3E%3Cpath opacity='0.1' fill-rule='evenodd' clip-rule='evenodd' d='M252.002 101.903L252 101.906L252.002 101.906L252.002 101.903ZM283.683 101.906L315.366 101.906L302.793 83.0479L311.12 83.0479L296.475 60.7012L303.306 60.7012L283.872 31L283.683 31.2881L283.683 101.906Z' fill='black' /%3E%3Crect x='131.66' y='172.226' width='7.17293' height='20.9875' fill='%239F7535' /%3E%3Cpath opacity='0.1' d='M134.583 172.226L138.833 172.226L138.833 193.213L134.583 193.213L134.583 172.226Z' fill='black' /%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M134.45 126L148.139 146.921L143.327 146.921L153.643 162.662L147.778 162.662L156.634 175.945L112 175.945L120.856 162.662L114.991 162.662L125.307 146.921L120.76 146.921L134.45 126Z' fill='%239CC27E' /%3E%3Cpath opacity='0.1' fill-rule='evenodd' clip-rule='evenodd' d='M112.001 175.943L112 175.945L112.001 175.945L112.001 175.943ZM134.317 175.945L156.634 175.945L147.778 162.662L153.643 162.662L143.327 146.921L148.139 146.921L134.45 126L134.317 126.203L134.317 175.945Z' fill='black' /%3E%3Crect x='33.7025' y='250.495' width='7.55317' height='22.926' fill='%239F7535' /%3E%3Cpath opacity='0.1' d='M36.7798 250.495L41.2557 250.495L41.2557 273.421L36.7798 273.421L36.7798 250.495Z' fill='black' /%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M36.6398 200L51.0548 222.853L45.9878 222.853L56.8505 240.048L50.6746 240.048L60 254.558L13 254.558L22.3254 240.048L16.1495 240.048L27.0123 222.853L22.2249 222.853L36.6398 200Z' fill='%239CC27E' /%3E%3Cpath opacity='0.1' fill-rule='evenodd' clip-rule='evenodd' d='M13.0012 254.556L13 254.558L13.0012 254.558L13.0012 254.556ZM36.5 254.558L60 254.558L50.6746 240.048L56.8505 240.048L45.9878 222.853L51.0548 222.853L36.6398 200L36.5 200.222L36.5 254.558Z' fill='black' /%3E%3Cpath d='M299.113 113C285.098 113 271.462 118.255 261.509 128.129C261.449 128.189 261.39 128.248 261.33 128.308L230.893 158.745C215.266 174.372 194.065 183.012 171.969 183.071C150.032 183.131 128.991 191.87 113.464 207.397L82.1305 238.73C66.5635 254.297 45.4426 263.056 23.4259 263.056H-15.6508C-33.8057 263.056 -51.6221 267.834 -67.3284 276.931L-261 388.906H560.646L360.007 133.962C349.596 120.724 333.671 113 316.83 113H299.113Z' fill='%23D3D265' /%3E%3Cpath d='M299.113 113C285.098 113 271.462 118.255 261.509 128.129C261.449 128.189 261.39 128.248 261.33 128.308L230.893 158.745C215.266 174.372 194.065 183.012 171.969 183.071C150.032 183.131 128.991 191.87 113.464 207.397L82.1305 238.73C66.5635 254.297 45.4426 263.056 23.4259 263.056H-15.6508C-33.8057 263.056 -51.6221 267.834 -67.3284 276.931L-261 388.906H560.646L360.007 133.962C349.596 120.724 333.671 113 316.83 113H299.113Z' fill='%23D3D265' /%3E%3Cpath d='M208.378 297.026L203.024 305.678L213.293 317.809H223.649L233.303 305.473L227.327 297.026H208.378Z' fill='%233F4553' /%3E%3Cpath d='M203.024 305.678C203.024 305.678 179.992 307.449 174.215 313.45C168.437 319.45 171.155 325.966 176.783 325.966C187.142 325.966 209.06 326.596 219.431 325.966L220.05 311.917L203.024 305.678Z' fill='%233F4553' /%3E%3Cpath d='M232.707 305.38C232.707 305.38 256.826 307.449 262.604 313.45C268.382 319.45 265.052 323.426 260.036 325.966C252.976 329.542 227.53 328.949 214.332 324.604L216.773 311.917L232.707 305.38Z' fill='%233F4553' /%3E%3Cpath d='M233.768 317.164L232.137 312.973L234.169 312.074C234.169 312.074 233.888 309.594 236.374 309.116C238.86 308.639 241.822 310.235 244.709 308.949C247.371 307.763 250.629 306.67 253.669 308.311C254.119 308.553 254.329 309.087 254.176 309.571L254.164 309.609C254.011 310.097 253.531 310.399 253.017 310.347C251.945 310.239 250.033 310.261 248.143 311.399C244.885 313.368 233.768 317.164 233.768 317.164Z' fill='%23FEBBA0' /%3E%3Cpath d='M252.743 317.403C252.743 317.403 236.648 314.557 202.743 314.117L199.47 318.533C199.47 318.533 207.906 323.329 215.824 325.063C223.743 326.797 251.079 332.257 263.286 323.847L252.743 317.403Z' fill='%233F4553' /%3E%3Cpath d='M215.824 325.067C207.707 323.202 199.215 318.421 199.215 318.421L199.721 317.567' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M202.743 314.117C202.743 314.117 239.992 313.271 249.931 319.007' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M184.458 316.519C184.458 316.519 191.259 313.349 195.908 315.426' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M200.253 317.802L202.739 314.035L200.253 312.697C200.253 312.697 199.384 310.53 196.946 309.859C194.506 309.191 192.77 310.269 189.992 308.762C187.431 307.371 184.266 306.032 181.109 307.431C180.645 307.636 180.39 308.15 180.506 308.646L180.513 308.684C180.63 309.183 181.083 309.519 181.597 309.508C182.673 309.482 184.581 309.653 186.373 310.936C189.467 313.152 200.253 317.802 200.253 317.802Z' fill='%23FEBBA0' /%3E%3Cpath d='M221.654 314.252L231.837 313.256' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M208.704 309.862L214.384 313.953' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M207.238 254.187C207.478 256.521 209.522 258.222 211.801 257.991C214.081 257.76 215.734 255.679 215.494 253.348C215.254 251.013 213.211 249.313 210.931 249.544C208.656 249.771 207.002 251.852 207.238 254.187Z' fill='%233F4553' /%3E%3Cpath d='M215.753 255.884C215.753 255.884 208.509 254.795 207.369 247.996C206.365 241.988 210.418 237.174 214.861 236.342C214.864 236.342 225.539 252.706 215.753 255.884Z' fill='%233F4553' /%3E%3Cpath d='M215.918 236.987C215.386 237.248 214.879 237.591 214.418 238.035C210.29 241.984 212.903 249.652 216.6 253.113C218.647 255.026 221.639 255.917 224.253 254.94C228.073 253.512 229.269 249.208 228.493 245.374C227.916 242.518 226.322 239.821 223.971 238.143C221.621 236.469 218.445 235.76 215.918 236.987Z' fill='%23FDBCA0' /%3E%3Cpath d='M215.232 250.801C214.508 251.513 213.248 251.804 212.281 251.464C211.314 251.125 210.519 250.219 210.268 249.167C210.043 248.224 210.286 247.149 210.984 246.571C211.681 245.993 212.937 246.031 213.533 246.78L215.232 250.801Z' fill='%23FDBCA0' /%3E%3Cpath d='M214.174 248.294L214.936 261.847C215.037 264.353 217.08 266.344 219.6 266.393C222.509 266.453 224.792 263.924 224.421 261.053L222.884 248.47L214.174 248.294Z' fill='%23FDBCA0' /%3E%3Cpath d='M223.919 256.965L223.728 255.108C223.728 255.108 219.978 256.253 216.6 253.109C216.6 253.113 218.546 256.644 223.919 256.965Z' fill='%23DF8370' /%3E%3Cpath d='M212.686 246.247C217.568 245.997 222.022 242.738 224.481 238.538C224.481 238.538 219.99 234.298 213.425 236.778C207.984 238.829 212.686 246.247 212.686 246.247Z' fill='%233F4553' /%3E%3Cpath d='M213.222 249.365C212.66 249.421 212.169 249.119 212.124 248.69C212.09 248.365 212.318 248.063 212.671 247.907' stroke='%23444359' stroke-width='1.1144' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M224.95 248.306C225.062 247.966 225.257 247.698 225.475 247.444L225.58 247.772C225.332 247.679 225.197 247.537 225.059 247.399C224.927 247.254 224.811 247.109 224.706 246.952C224.496 246.642 224.32 246.314 224.193 245.967C224.455 246.232 224.695 246.504 224.946 246.765C225.074 246.892 225.194 247.023 225.325 247.135C225.449 247.243 225.595 247.355 225.696 247.381L226 247.452L225.801 247.709C225.599 247.974 225.374 248.22 225.062 248.399C225.025 248.421 224.98 248.406 224.957 248.373C224.946 248.347 224.946 248.324 224.95 248.306Z' fill='%23444359' /%3E%3Cpath d='M226.048 249.492C225.899 249.797 225.644 250.062 225.314 250.222C224.987 250.39 224.583 250.424 224.223 250.319C223.855 250.219 223.57 249.98 223.327 249.734C223.218 249.6 223.109 249.462 223.019 249.32C222.94 249.167 222.858 249.018 222.798 248.861C222.937 248.966 223.057 249.078 223.177 249.189L223.548 249.495C223.81 249.667 224.058 249.853 224.343 249.92C224.616 250.006 224.909 250.002 225.197 249.924C225.482 249.842 225.767 249.682 226.048 249.492Z' fill='%23444359' /%3E%3Cpath d='M222.123 244.617C222.269 245.05 222.352 245.497 222.322 245.979C222.303 246.213 222.247 246.471 222.071 246.698C221.891 246.93 221.587 247.03 221.321 247.023C221.047 247.019 220.777 246.9 220.593 246.732C220.402 246.564 220.252 246.37 220.14 246.165C219.915 245.751 219.772 245.318 219.701 244.863C219.69 244.793 219.738 244.725 219.81 244.711C219.877 244.699 219.937 244.74 219.956 244.8L219.96 244.808C220.087 245.21 220.256 245.617 220.473 245.967C220.691 246.307 220.987 246.62 221.336 246.609C221.508 246.616 221.669 246.571 221.767 246.448C221.876 246.329 221.928 246.135 221.958 245.938C222.014 245.538 221.977 245.098 221.909 244.677V244.67C221.898 244.61 221.943 244.55 222.003 244.543C222.052 244.535 222.104 244.569 222.123 244.617Z' fill='%23444359' /%3E%3Cpath d='M227.567 243.771C227.691 244.136 227.758 244.509 227.751 244.908C227.747 245.106 227.71 245.322 227.582 245.527C227.458 245.744 227.181 245.878 226.941 245.867C226.69 245.863 226.461 245.732 226.315 245.579C226.165 245.423 226.049 245.255 225.962 245.076C225.794 244.718 225.689 244.353 225.636 243.968C225.625 243.898 225.677 243.83 225.752 243.819C225.816 243.812 225.876 243.849 225.895 243.909L225.899 243.916C226.007 244.252 226.139 244.595 226.307 244.893C226.476 245.184 226.705 245.464 226.956 245.449C227.083 245.453 227.185 245.415 227.252 245.311C227.327 245.207 227.365 245.046 227.387 244.878C227.425 244.543 227.395 244.174 227.353 243.823V243.816C227.346 243.756 227.391 243.7 227.451 243.689C227.5 243.689 227.552 243.722 227.567 243.771Z' fill='%23444359' /%3E%3Cpath d='M231.616 263.078C231.582 260.803 224.166 258.983 224.166 258.983C223.701 259.494 222.903 260.355 219.54 260.355C216.323 260.355 215.037 259.527 214.534 258.983H211.351C210.643 258.983 209.994 259.386 209.698 260.027C203.32 273.904 206.905 289.403 208.374 297.022C208.509 297.723 221.819 297.25 227.822 297.723C229.119 297.831 231.744 271.346 231.616 263.078Z' fill='%23FEE6C6' /%3E%3Cpath d='M216.128 282.701C216.788 277.398 217.594 274.217 218.212 275.261C218.76 276.186 218.456 280.825 217.635 285.301C217.639 285.301 215.847 284.973 216.128 282.701Z' fill='%23FEBBA0' /%3E%3Cpath d='M220.484 282.701C219.825 277.398 219.019 274.217 218.4 275.261C217.852 276.186 218.156 280.825 218.977 285.301C218.974 285.301 220.766 284.973 220.484 282.701Z' fill='%23FEBBA0' /%3E%3Cpath d='M242.463 281.385H234.083L235.414 289.851L220.207 282.47C220.155 281.903 220.083 281.202 219.997 280.46C219.423 280.46 218.846 280.46 218.272 280.453C218.276 281.098 218.287 281.534 218.287 281.534C218.287 281.534 217.991 285.428 218.67 286.725C219.96 289.194 233.153 297.145 236.816 298.089C237.045 298.148 237.274 298.193 237.502 298.223C241.038 298.719 243.381 296.746 243.355 293.196L242.463 281.385Z' fill='%23FEBBA0' /%3E%3Cpath d='M216.465 280.423C216.334 281.258 216.218 282.064 216.128 282.701L201.359 289.504L201.982 281.389H193.602L192.713 293.207C192.691 296.757 195.034 298.726 198.566 298.234C198.795 298.201 199.023 298.156 199.252 298.1C202.915 297.156 215.187 290.559 217.807 286.71C218.584 285.573 218.216 281.743 218.216 281.743C218.216 281.743 218.216 281.213 218.201 280.46C217.624 280.449 217.046 280.438 216.465 280.423Z' fill='%23FEBBA0' /%3E%3Cpath d='M204.126 286.018C207.403 276.378 207.377 276.37 211.4 258.988C208.708 259.171 208.431 258.734 206.308 259.831C199.942 263.12 193.947 273.924 192.181 286.018H204.126Z' fill='%23FEE6C6' /%3E%3Cpath d='M233.303 285.066C231.376 278.237 224.166 258.987 224.166 258.987C231.376 258.744 241.214 268.094 243.569 283.817L233.303 285.066Z' fill='%23FEE6C6' /%3E%3Cpath d='M231.62 269.988L230.101 282.399' stroke='%23EED2AD' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M205.506 272.024L206.713 285.301' stroke='%23EED2AD' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3C/svg%3E");
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;

    @media ${device.tablet} {
      background-size: cover;
      background-image: url("data:image/svg+xml, %3Csvg width='1024' height='377' viewBox='0 0 320 377' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M320.804 20.3247C317.241 12.3222 311.727 5.33498 304.78 0C296.399 0.418039 289.073 5.89237 286.326 13.8948L263.633 80.2834C261.005 87.9873 250.594 89.1817 246.274 82.2741C241.437 74.5304 232.857 69.932 223.74 70.2107C214.284 70.4894 205.764 75.9637 201.544 84.424L183.708 126.805L141.147 84.2449C133.782 76.8794 123.789 72.7388 113.377 72.7388C107.485 72.7388 101.852 75.0878 97.6711 79.2483C88.9918 87.9276 74.9377 87.9276 66.2784 79.2483L45.0977 58.0676C38.6281 51.598 29.8293 47.9551 20.6723 47.9551C9.14633 47.9551 -1.60324 53.6882 -8.01317 63.2633L-143 254.586L423.164 245.17L320.804 20.3247Z' fill='%23F6E6A4' /%3E%3Cpath d='M-28.5554 133C-28.8938 133 -29.2322 133 -29.5706 133C-75.9332 133.219 -120.325 151.772 -153.768 183.861L-309 332.743H188.944C179.529 220.868 85.7484 133 -28.5554 133Z' fill='%23ADB010' /%3E%3Crect x='279.911' y='96.6256' width='10.1833' height='29.7955' fill='%239F7535' /%3E%3Cpath opacity='0.1' d='M284.06 96.6256L290.095 96.6256L290.095 126.421L284.06 126.421L284.06 96.6256Z' fill='black' /%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M283.872 31L303.306 60.7012L296.475 60.7012L311.12 83.0479L302.793 83.0479L315.366 101.906L252 101.906L264.573 83.0479L256.246 83.0479L270.892 60.7012L264.437 60.7012L283.872 31Z' fill='%239CC27E' /%3E%3Cpath opacity='0.1' fill-rule='evenodd' clip-rule='evenodd' d='M252.002 101.903L252 101.906L252.002 101.906L252.002 101.903ZM283.683 101.906L315.366 101.906L302.793 83.0479L311.12 83.0479L296.475 60.7012L303.306 60.7012L283.872 31L283.683 31.2881L283.683 101.906Z' fill='black' /%3E%3Crect x='131.66' y='172.226' width='7.17293' height='20.9875' fill='%239F7535' /%3E%3Cpath opacity='0.1' d='M134.583 172.226L138.833 172.226L138.833 193.213L134.583 193.213L134.583 172.226Z' fill='black' /%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M134.45 126L148.139 146.921L143.327 146.921L153.643 162.662L147.778 162.662L156.634 175.945L112 175.945L120.856 162.662L114.991 162.662L125.307 146.921L120.76 146.921L134.45 126Z' fill='%239CC27E' /%3E%3Cpath opacity='0.1' fill-rule='evenodd' clip-rule='evenodd' d='M112.001 175.943L112 175.945L112.001 175.945L112.001 175.943ZM134.317 175.945L156.634 175.945L147.778 162.662L153.643 162.662L143.327 146.921L148.139 146.921L134.45 126L134.317 126.203L134.317 175.945Z' fill='black' /%3E%3Crect x='33.7025' y='250.495' width='7.55317' height='22.926' fill='%239F7535' /%3E%3Cpath opacity='0.1' d='M36.7798 250.495L41.2557 250.495L41.2557 273.421L36.7798 273.421L36.7798 250.495Z' fill='black' /%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M36.6398 200L51.0548 222.853L45.9878 222.853L56.8505 240.048L50.6746 240.048L60 254.558L13 254.558L22.3254 240.048L16.1495 240.048L27.0123 222.853L22.2249 222.853L36.6398 200Z' fill='%239CC27E' /%3E%3Cpath opacity='0.1' fill-rule='evenodd' clip-rule='evenodd' d='M13.0012 254.556L13 254.558L13.0012 254.558L13.0012 254.556ZM36.5 254.558L60 254.558L50.6746 240.048L56.8505 240.048L45.9878 222.853L51.0548 222.853L36.6398 200L36.5 200.222L36.5 254.558Z' fill='black' /%3E%3Cpath d='M299.113 113C285.098 113 271.462 118.255 261.509 128.129C261.449 128.189 261.39 128.248 261.33 128.308L230.893 158.745C215.266 174.372 194.065 183.012 171.969 183.071C150.032 183.131 128.991 191.87 113.464 207.397L82.1305 238.73C66.5635 254.297 45.4426 263.056 23.4259 263.056H-15.6508C-33.8057 263.056 -51.6221 267.834 -67.3284 276.931L-261 388.906H560.646L360.007 133.962C349.596 120.724 333.671 113 316.83 113H299.113Z' fill='%23D3D265' /%3E%3Cpath d='M299.113 113C285.098 113 271.462 118.255 261.509 128.129C261.449 128.189 261.39 128.248 261.33 128.308L230.893 158.745C215.266 174.372 194.065 183.012 171.969 183.071C150.032 183.131 128.991 191.87 113.464 207.397L82.1305 238.73C66.5635 254.297 45.4426 263.056 23.4259 263.056H-15.6508C-33.8057 263.056 -51.6221 267.834 -67.3284 276.931L-261 388.906H560.646L360.007 133.962C349.596 120.724 333.671 113 316.83 113H299.113Z' fill='%23D3D265' /%3E%3Cpath d='M208.378 297.026L203.024 305.678L213.293 317.809H223.649L233.303 305.473L227.327 297.026H208.378Z' fill='%233F4553' /%3E%3Cpath d='M203.024 305.678C203.024 305.678 179.992 307.449 174.215 313.45C168.437 319.45 171.155 325.966 176.783 325.966C187.142 325.966 209.06 326.596 219.431 325.966L220.05 311.917L203.024 305.678Z' fill='%233F4553' /%3E%3Cpath d='M232.707 305.38C232.707 305.38 256.826 307.449 262.604 313.45C268.382 319.45 265.052 323.426 260.036 325.966C252.976 329.542 227.53 328.949 214.332 324.604L216.773 311.917L232.707 305.38Z' fill='%233F4553' /%3E%3Cpath d='M233.768 317.164L232.137 312.973L234.169 312.074C234.169 312.074 233.888 309.594 236.374 309.116C238.86 308.639 241.822 310.235 244.709 308.949C247.371 307.763 250.629 306.67 253.669 308.311C254.119 308.553 254.329 309.087 254.176 309.571L254.164 309.609C254.011 310.097 253.531 310.399 253.017 310.347C251.945 310.239 250.033 310.261 248.143 311.399C244.885 313.368 233.768 317.164 233.768 317.164Z' fill='%23FEBBA0' /%3E%3Cpath d='M252.743 317.403C252.743 317.403 236.648 314.557 202.743 314.117L199.47 318.533C199.47 318.533 207.906 323.329 215.824 325.063C223.743 326.797 251.079 332.257 263.286 323.847L252.743 317.403Z' fill='%233F4553' /%3E%3Cpath d='M215.824 325.067C207.707 323.202 199.215 318.421 199.215 318.421L199.721 317.567' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M202.743 314.117C202.743 314.117 239.992 313.271 249.931 319.007' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M184.458 316.519C184.458 316.519 191.259 313.349 195.908 315.426' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M200.253 317.802L202.739 314.035L200.253 312.697C200.253 312.697 199.384 310.53 196.946 309.859C194.506 309.191 192.77 310.269 189.992 308.762C187.431 307.371 184.266 306.032 181.109 307.431C180.645 307.636 180.39 308.15 180.506 308.646L180.513 308.684C180.63 309.183 181.083 309.519 181.597 309.508C182.673 309.482 184.581 309.653 186.373 310.936C189.467 313.152 200.253 317.802 200.253 317.802Z' fill='%23FEBBA0' /%3E%3Cpath d='M221.654 314.252L231.837 313.256' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M208.704 309.862L214.384 313.953' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M207.238 254.187C207.478 256.521 209.522 258.222 211.801 257.991C214.081 257.76 215.734 255.679 215.494 253.348C215.254 251.013 213.211 249.313 210.931 249.544C208.656 249.771 207.002 251.852 207.238 254.187Z' fill='%233F4553' /%3E%3Cpath d='M215.753 255.884C215.753 255.884 208.509 254.795 207.369 247.996C206.365 241.988 210.418 237.174 214.861 236.342C214.864 236.342 225.539 252.706 215.753 255.884Z' fill='%233F4553' /%3E%3Cpath d='M215.918 236.987C215.386 237.248 214.879 237.591 214.418 238.035C210.29 241.984 212.903 249.652 216.6 253.113C218.647 255.026 221.639 255.917 224.253 254.94C228.073 253.512 229.269 249.208 228.493 245.374C227.916 242.518 226.322 239.821 223.971 238.143C221.621 236.469 218.445 235.76 215.918 236.987Z' fill='%23FDBCA0' /%3E%3Cpath d='M215.232 250.801C214.508 251.513 213.248 251.804 212.281 251.464C211.314 251.125 210.519 250.219 210.268 249.167C210.043 248.224 210.286 247.149 210.984 246.571C211.681 245.993 212.937 246.031 213.533 246.78L215.232 250.801Z' fill='%23FDBCA0' /%3E%3Cpath d='M214.174 248.294L214.936 261.847C215.037 264.353 217.08 266.344 219.6 266.393C222.509 266.453 224.792 263.924 224.421 261.053L222.884 248.47L214.174 248.294Z' fill='%23FDBCA0' /%3E%3Cpath d='M223.919 256.965L223.728 255.108C223.728 255.108 219.978 256.253 216.6 253.109C216.6 253.113 218.546 256.644 223.919 256.965Z' fill='%23DF8370' /%3E%3Cpath d='M212.686 246.247C217.568 245.997 222.022 242.738 224.481 238.538C224.481 238.538 219.99 234.298 213.425 236.778C207.984 238.829 212.686 246.247 212.686 246.247Z' fill='%233F4553' /%3E%3Cpath d='M213.222 249.365C212.66 249.421 212.169 249.119 212.124 248.69C212.09 248.365 212.318 248.063 212.671 247.907' stroke='%23444359' stroke-width='1.1144' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M224.95 248.306C225.062 247.966 225.257 247.698 225.475 247.444L225.58 247.772C225.332 247.679 225.197 247.537 225.059 247.399C224.927 247.254 224.811 247.109 224.706 246.952C224.496 246.642 224.32 246.314 224.193 245.967C224.455 246.232 224.695 246.504 224.946 246.765C225.074 246.892 225.194 247.023 225.325 247.135C225.449 247.243 225.595 247.355 225.696 247.381L226 247.452L225.801 247.709C225.599 247.974 225.374 248.22 225.062 248.399C225.025 248.421 224.98 248.406 224.957 248.373C224.946 248.347 224.946 248.324 224.95 248.306Z' fill='%23444359' /%3E%3Cpath d='M226.048 249.492C225.899 249.797 225.644 250.062 225.314 250.222C224.987 250.39 224.583 250.424 224.223 250.319C223.855 250.219 223.57 249.98 223.327 249.734C223.218 249.6 223.109 249.462 223.019 249.32C222.94 249.167 222.858 249.018 222.798 248.861C222.937 248.966 223.057 249.078 223.177 249.189L223.548 249.495C223.81 249.667 224.058 249.853 224.343 249.92C224.616 250.006 224.909 250.002 225.197 249.924C225.482 249.842 225.767 249.682 226.048 249.492Z' fill='%23444359' /%3E%3Cpath d='M222.123 244.617C222.269 245.05 222.352 245.497 222.322 245.979C222.303 246.213 222.247 246.471 222.071 246.698C221.891 246.93 221.587 247.03 221.321 247.023C221.047 247.019 220.777 246.9 220.593 246.732C220.402 246.564 220.252 246.37 220.14 246.165C219.915 245.751 219.772 245.318 219.701 244.863C219.69 244.793 219.738 244.725 219.81 244.711C219.877 244.699 219.937 244.74 219.956 244.8L219.96 244.808C220.087 245.21 220.256 245.617 220.473 245.967C220.691 246.307 220.987 246.62 221.336 246.609C221.508 246.616 221.669 246.571 221.767 246.448C221.876 246.329 221.928 246.135 221.958 245.938C222.014 245.538 221.977 245.098 221.909 244.677V244.67C221.898 244.61 221.943 244.55 222.003 244.543C222.052 244.535 222.104 244.569 222.123 244.617Z' fill='%23444359' /%3E%3Cpath d='M227.567 243.771C227.691 244.136 227.758 244.509 227.751 244.908C227.747 245.106 227.71 245.322 227.582 245.527C227.458 245.744 227.181 245.878 226.941 245.867C226.69 245.863 226.461 245.732 226.315 245.579C226.165 245.423 226.049 245.255 225.962 245.076C225.794 244.718 225.689 244.353 225.636 243.968C225.625 243.898 225.677 243.83 225.752 243.819C225.816 243.812 225.876 243.849 225.895 243.909L225.899 243.916C226.007 244.252 226.139 244.595 226.307 244.893C226.476 245.184 226.705 245.464 226.956 245.449C227.083 245.453 227.185 245.415 227.252 245.311C227.327 245.207 227.365 245.046 227.387 244.878C227.425 244.543 227.395 244.174 227.353 243.823V243.816C227.346 243.756 227.391 243.7 227.451 243.689C227.5 243.689 227.552 243.722 227.567 243.771Z' fill='%23444359' /%3E%3Cpath d='M231.616 263.078C231.582 260.803 224.166 258.983 224.166 258.983C223.701 259.494 222.903 260.355 219.54 260.355C216.323 260.355 215.037 259.527 214.534 258.983H211.351C210.643 258.983 209.994 259.386 209.698 260.027C203.32 273.904 206.905 289.403 208.374 297.022C208.509 297.723 221.819 297.25 227.822 297.723C229.119 297.831 231.744 271.346 231.616 263.078Z' fill='%23FEE6C6' /%3E%3Cpath d='M216.128 282.701C216.788 277.398 217.594 274.217 218.212 275.261C218.76 276.186 218.456 280.825 217.635 285.301C217.639 285.301 215.847 284.973 216.128 282.701Z' fill='%23FEBBA0' /%3E%3Cpath d='M220.484 282.701C219.825 277.398 219.019 274.217 218.4 275.261C217.852 276.186 218.156 280.825 218.977 285.301C218.974 285.301 220.766 284.973 220.484 282.701Z' fill='%23FEBBA0' /%3E%3Cpath d='M242.463 281.385H234.083L235.414 289.851L220.207 282.47C220.155 281.903 220.083 281.202 219.997 280.46C219.423 280.46 218.846 280.46 218.272 280.453C218.276 281.098 218.287 281.534 218.287 281.534C218.287 281.534 217.991 285.428 218.67 286.725C219.96 289.194 233.153 297.145 236.816 298.089C237.045 298.148 237.274 298.193 237.502 298.223C241.038 298.719 243.381 296.746 243.355 293.196L242.463 281.385Z' fill='%23FEBBA0' /%3E%3Cpath d='M216.465 280.423C216.334 281.258 216.218 282.064 216.128 282.701L201.359 289.504L201.982 281.389H193.602L192.713 293.207C192.691 296.757 195.034 298.726 198.566 298.234C198.795 298.201 199.023 298.156 199.252 298.1C202.915 297.156 215.187 290.559 217.807 286.71C218.584 285.573 218.216 281.743 218.216 281.743C218.216 281.743 218.216 281.213 218.201 280.46C217.624 280.449 217.046 280.438 216.465 280.423Z' fill='%23FEBBA0' /%3E%3Cpath d='M204.126 286.018C207.403 276.378 207.377 276.37 211.4 258.988C208.708 259.171 208.431 258.734 206.308 259.831C199.942 263.12 193.947 273.924 192.181 286.018H204.126Z' fill='%23FEE6C6' /%3E%3Cpath d='M233.303 285.066C231.376 278.237 224.166 258.987 224.166 258.987C231.376 258.744 241.214 268.094 243.569 283.817L233.303 285.066Z' fill='%23FEE6C6' /%3E%3Cpath d='M231.62 269.988L230.101 282.399' stroke='%23EED2AD' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3Cpath d='M205.506 272.024L206.713 285.301' stroke='%23EED2AD' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round' /%3E%3C/svg%3E");
    }

    > .container {
      /* 반응형을 위한 부분 */
      max-width: 700px;
      margin: 0 auto;
      position: relative;
      z-index: 10;

      > .content {
        padding-top: 4em;
        padding-left: 10%;

        > h2 {
          font-size: 1.5em;

          > .thiner {
            font-weight: 400;
          }
        }

        > .button-container {
          margin-top: 1em;
          padding: 0 1em;
          display: flex;
          flex-direction: row;
          flex-flow: wrap;
          justify-content: space-evenly;
          align-items: center;
          max-width: 90%;

          > a > button {
            margin-top: 0.5em;
          }
        }
      }
    }
  }
`;

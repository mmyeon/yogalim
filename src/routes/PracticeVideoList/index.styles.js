import styled from "styled-components";
import { device } from "../../device";
import { COLORS, FONT_WEIGHT } from "../../styles/constant";

export const Container = styled.div`
  background: ${COLORS.lightYellow};
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  > .background {
    width: 102%;
    height: 100%;
    background-image: url("/assets/images/practiceVideoList/bg-mobile.svg");
    background-repeat: no-repeat;
    background-position: left 68% top -16%;

    @media ${device.tablet} {
      background-image: url("data:image/svg+xml,%3Csvg width='1920' height='1080' viewBox='0 0 1920 1080' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1087.67 75C1054.75 75 1022.72 87.3428 999.344 110.532C999.204 110.673 999.064 110.813 998.924 110.953L927.428 182.439C890.722 219.14 840.923 239.431 789.02 239.571C737.491 239.712 688.066 260.236 651.594 296.704L577.994 370.293C541.428 406.855 491.816 427.426 440.1 427.426H348.311C305.667 427.426 263.817 438.647 226.924 460.013L274.5 636.5L1702 723L1230.71 124.231C1206.26 93.1403 1168.85 75 1129.29 75H1087.67Z' fill='%23D3D265'/%3E%3Crect x='1018.5' y='450.913' width='20.5964' height='61.7891' fill='%239F7535'/%3E%3Cpath opacity='0.1' d='M1026.89 450.913H1039.1V512.702H1026.89V450.913Z' fill='black'/%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M1055.1 338.183C1055.1 344.519 1052.77 350.311 1048.92 354.746C1056.01 360.445 1060.54 369.19 1060.54 378.995C1060.54 382.63 1059.92 386.121 1058.77 389.364C1069.34 397.915 1076.09 410.987 1076.09 425.637C1076.09 451.397 1055.21 472.279 1029.45 472.279C1003.69 472.279 982.807 451.397 982.807 425.637C982.807 410.987 989.561 397.915 1000.13 389.364C998.978 386.121 998.354 382.63 998.354 378.995C998.354 368.977 1003.09 360.066 1010.45 354.379C1006.78 349.994 1004.57 344.346 1004.57 338.183C1004.57 324.229 1015.88 312.918 1029.84 312.918C1043.79 312.918 1055.1 324.229 1055.1 338.183Z' fill='%239CC27E'/%3E%3Cpath d='M1366.36 1128.84L1369.62 579.32C1369.62 579.32 1303.81 480.063 1133.05 490.523C962.29 500.983 926.523 562.563 721.103 447.464C721.103 447.464 648.681 399.372 515.915 400.336L511.625 1123.77L1366.36 1128.84Z' fill='%2339AE76'/%3E%3Cpath d='M1919.07 1134.16L1921.91 656.001C1921.91 656.001 1861.78 569.617 1705.82 578.675C1549.86 587.733 1517.21 641.307 1329.56 541.101C1329.56 541.101 1263.4 499.236 1142.14 500.041L1138.41 1129.53L1919.07 1134.16Z' fill='%2339AE76'/%3E%3Cpath d='M887.464 469.503L876.437 487.324L897.588 512.31H918.916L938.801 486.901L926.492 469.503H887.464Z' fill='%233F4553'/%3E%3Cpath d='M876.437 487.323C876.437 487.323 828.999 490.972 817.099 503.331C805.2 515.69 810.798 529.109 822.389 529.109C843.726 529.109 888.869 530.407 910.229 529.109L911.503 500.174L876.437 487.323Z' fill='%233F4553'/%3E%3Cpath d='M937.573 486.709C937.573 486.709 987.25 490.972 999.15 503.331C1011.05 515.69 1004.19 523.878 993.86 529.109C979.319 536.475 926.909 535.254 899.727 526.305L904.754 500.174L937.573 486.709Z' fill='%233F4553'/%3E%3Cpath d='M939.758 510.981L936.399 502.348L940.585 500.497C940.585 500.497 940.006 495.389 945.125 494.406C950.245 493.422 956.346 496.71 962.292 494.06C967.774 491.617 974.485 489.367 980.748 492.746C981.674 493.246 982.107 494.344 981.79 495.343L981.767 495.419C981.45 496.426 980.462 497.048 979.404 496.94C977.196 496.718 973.257 496.764 969.365 499.106C962.655 503.162 939.758 510.981 939.758 510.981Z' fill='%23FEBBA0'/%3E%3Cpath d='M978.84 511.473C978.84 511.473 945.689 505.612 875.858 504.706L869.116 513.8C869.116 513.8 886.491 523.678 902.8 527.25C919.109 530.822 975.412 542.067 1000.56 524.746L978.84 511.473Z' fill='%233F4553'/%3E%3Cpath d='M902.8 527.258C886.082 523.417 868.591 513.57 868.591 513.57L869.633 511.811' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M875.857 504.706C875.857 504.706 952.577 502.962 973.049 514.776' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M838.196 509.653C838.196 509.653 852.204 503.124 861.78 507.402' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M870.73 512.295L875.85 504.537L870.73 501.779C870.73 501.779 868.938 497.317 863.919 495.934C858.892 494.559 855.316 496.779 849.594 493.676C844.32 490.811 837.803 488.053 831.301 490.934C830.343 491.356 829.818 492.416 830.057 493.438L830.073 493.514C830.312 494.544 831.246 495.235 832.304 495.212C834.521 495.158 838.451 495.512 842.142 498.154C848.513 502.716 870.73 512.295 870.73 512.295Z' fill='%23FEBBA0'/%3E%3Cpath d='M914.808 504.982L935.782 502.931' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M888.136 495.942L899.835 504.368' stroke='%236E758F' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M885.116 381.271C885.611 386.079 889.819 389.582 894.514 389.105C899.209 388.629 902.615 384.343 902.121 379.542C901.626 374.734 897.418 371.231 892.723 371.708C888.035 372.176 884.63 376.462 885.116 381.271Z' fill='%233F4553'/%3E%3Cpath d='M902.653 384.766C902.653 384.766 887.734 382.523 885.387 368.52C883.317 356.146 891.665 346.23 900.815 344.517C900.823 344.517 922.808 378.221 902.653 384.766Z' fill='%233F4553'/%3E%3Cpath d='M902.993 345.845C901.897 346.383 900.854 347.089 899.904 348.004C891.402 356.138 896.785 371.93 904.399 379.058C908.615 382.999 914.777 384.834 920.16 382.822C928.029 379.88 930.492 371.016 928.893 363.12C927.704 357.236 924.422 351.683 919.58 348.226C914.739 344.777 908.198 343.318 902.993 345.845Z' fill='%23FDBCA0'/%3E%3Cpath d='M901.58 374.296C900.09 375.763 897.495 376.362 895.503 375.663C893.51 374.964 891.873 373.097 891.356 370.931C890.892 368.988 891.394 366.776 892.831 365.585C894.267 364.395 896.854 364.472 898.082 366.015L901.58 374.296Z' fill='%23FDBCA0'/%3E%3Cpath d='M899.402 369.134L900.97 397.047C901.178 402.209 905.387 406.311 910.576 406.411C916.569 406.534 921.271 401.326 920.507 395.411L917.341 369.495L899.402 369.134Z' fill='%23FDBCA0'/%3E%3Cpath d='M919.472 386.993L919.078 383.167C919.078 383.167 911.356 385.525 904.398 379.05C904.398 379.058 908.406 386.332 919.472 386.993Z' fill='%23DF8370'/%3E%3Cpath d='M896.337 364.917C906.391 364.403 915.565 357.69 920.631 349.041C920.631 349.041 911.379 340.307 897.858 345.415C886.653 349.64 896.337 364.917 896.337 364.917Z' fill='%233F4553'/%3E%3Cpath d='M897.441 371.339C896.283 371.454 895.271 370.832 895.178 369.948C895.109 369.28 895.58 368.658 896.306 368.335' stroke='%23444359' stroke-width='1.1144' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M921.596 369.157C921.828 368.458 922.229 367.905 922.677 367.383L922.893 368.059C922.384 367.867 922.106 367.575 921.82 367.291C921.55 366.991 921.31 366.692 921.094 366.369C920.662 365.732 920.299 365.056 920.036 364.341C920.577 364.887 921.071 365.447 921.588 365.985C921.851 366.246 922.098 366.515 922.368 366.745C922.623 366.968 922.924 367.199 923.133 367.252L923.758 367.398L923.349 367.928C922.932 368.474 922.468 368.981 921.828 369.349C921.75 369.395 921.658 369.365 921.611 369.296C921.588 369.242 921.588 369.196 921.596 369.157Z' fill='%23444359'/%3E%3Cpath d='M923.859 371.6C923.55 372.23 923.025 372.775 922.345 373.106C921.673 373.451 920.839 373.52 920.098 373.305C919.341 373.098 918.754 372.606 918.252 372.099C918.028 371.823 917.804 371.539 917.619 371.247C917.457 370.932 917.287 370.625 917.163 370.302C917.449 370.517 917.696 370.748 917.943 370.978L918.708 371.608C919.248 371.961 919.758 372.345 920.345 372.483C920.909 372.66 921.511 372.652 922.106 372.491C922.692 372.322 923.279 371.992 923.859 371.6Z' fill='%23444359'/%3E%3Cpath d='M915.773 361.561C916.074 362.452 916.244 363.374 916.183 364.364C916.144 364.848 916.028 365.378 915.665 365.847C915.295 366.323 914.669 366.53 914.121 366.515C913.557 366.507 913.001 366.262 912.623 365.916C912.229 365.57 911.92 365.171 911.688 364.748C911.225 363.896 910.931 363.005 910.785 362.068C910.762 361.922 910.862 361.784 911.009 361.753C911.148 361.73 911.271 361.814 911.31 361.937L911.318 361.953C911.58 362.782 911.928 363.619 912.376 364.341C912.823 365.04 913.433 365.686 914.152 365.662C914.507 365.678 914.839 365.586 915.04 365.332C915.264 365.086 915.372 364.687 915.434 364.28C915.549 363.458 915.472 362.552 915.333 361.684V361.668C915.31 361.545 915.403 361.423 915.526 361.407C915.627 361.392 915.735 361.461 915.773 361.561Z' fill='%23444359'/%3E%3Cpath d='M926.986 359.817C927.241 360.57 927.38 361.338 927.364 362.16C927.357 362.567 927.279 363.013 927.017 363.435C926.762 363.881 926.191 364.157 925.696 364.134C925.179 364.127 924.708 363.858 924.407 363.543C924.098 363.22 923.858 362.874 923.681 362.506C923.333 361.768 923.117 361.016 923.009 360.225C922.986 360.079 923.094 359.94 923.248 359.917C923.38 359.902 923.503 359.979 923.542 360.102L923.55 360.117C923.773 360.808 924.044 361.515 924.391 362.129C924.739 362.729 925.21 363.305 925.727 363.274C925.99 363.282 926.198 363.205 926.337 362.99C926.492 362.775 926.569 362.444 926.615 362.099C926.692 361.407 926.631 360.647 926.546 359.925V359.91C926.53 359.787 926.623 359.671 926.747 359.648C926.847 359.648 926.955 359.718 926.986 359.817Z' fill='%23444359'/%3E%3Cpath d='M935.326 399.582C935.256 394.897 919.982 391.148 919.982 391.148C919.024 392.201 917.379 393.975 910.453 393.975C903.827 393.975 901.178 392.27 900.143 391.148H893.587C892.128 391.148 890.792 391.978 890.182 393.299C877.046 421.88 884.429 453.803 887.456 469.496C887.734 470.94 915.148 469.964 927.511 470.94C930.183 471.162 935.588 416.611 935.326 399.582Z' fill='%23FEE6C6'/%3E%3Cpath d='M903.426 440.001C904.785 429.078 906.445 422.526 907.719 424.677C908.847 426.582 908.221 436.137 906.53 445.354C906.538 445.354 902.846 444.678 903.426 440.001Z' fill='%23FEBBA0'/%3E%3Cpath d='M912.399 440.001C911.039 429.078 909.379 422.526 908.105 424.677C906.978 426.582 907.603 436.137 909.294 445.354C909.287 445.354 912.978 444.678 912.399 440.001Z' fill='%23FEBBA0'/%3E%3Cpath d='M957.666 437.289H940.407L943.148 454.725L911.827 439.524C911.719 438.357 911.573 436.913 911.395 435.384C910.213 435.384 909.024 435.384 907.843 435.369C907.85 436.698 907.874 437.596 907.874 437.596C907.874 437.596 907.264 445.615 908.661 448.289C911.318 453.373 938.492 469.749 946.037 471.693C946.508 471.816 946.979 471.908 947.45 471.969C954.732 472.991 959.558 468.928 959.504 461.615L957.666 437.289Z' fill='%23FEBBA0'/%3E%3Cpath d='M904.12 435.307C903.85 437.028 903.611 438.687 903.425 440.001L873.008 454.011L874.29 437.297H857.031L855.201 461.638C855.154 468.951 859.981 473.006 867.255 471.992C867.726 471.923 868.197 471.831 868.668 471.716C876.213 469.772 901.487 456.185 906.885 448.258C908.484 445.915 907.727 438.026 907.727 438.026C907.727 438.026 907.727 436.936 907.696 435.384C906.507 435.361 905.317 435.338 904.12 435.307Z' fill='%23FEBBA0'/%3E%3Cpath d='M878.707 446.831C885.456 426.975 885.402 426.96 893.688 391.158C888.143 391.535 887.572 390.636 883.201 392.894C870.089 399.669 857.741 421.921 854.104 446.831H878.707Z' fill='%23FEE6C6'/%3E%3Cpath d='M938.801 444.87C934.832 430.806 919.982 391.156 919.982 391.156C934.832 390.657 955.095 409.914 959.944 442.297L938.801 444.87Z' fill='%23FEE6C6'/%3E%3Cpath d='M935.333 413.816L932.206 439.378' stroke='%23EED2AD' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M881.549 418.01L884.035 445.354' stroke='%23EED2AD' stroke-width='1.5925' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M751.879 1140.51L755.676 500.323C755.676 500.323 696.833 384.797 543.71 397.254C390.588 409.712 358.42 481.507 174.423 347.746C174.423 347.746 109.565 291.836 -9.47551 293.171L-14.4735 1135.96L751.879 1140.51Z' fill='%2339AE76'/%3E%3C/svg%3E%0A");
      background-position: center -19%;
    }

    > .content {
      text-align: center;
      height: 100vh;
      position: relative;
      top: 15%;

      > .title {
        font-weight: 300;
        margin-bottom: 6.5em;

        > b {
          font-weight: 600;
        }
      }

      > .video-list {
        .video-container {
          overflow: scroll;
          height: auto;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          > .container {
            position: relative;

            &:first-child {
              margin-left: 1.3em;
            }

            &:last-child {
              margin-right: 1.3em;
            }

            .video {
              background: ${COLORS.primaryTeal};
              min-width: 213px;
              height: 250px;
              margin-right: 0.6em;
            }

            .title-container {
              position: absolute;
              bottom: 1.5em;
              color: ${COLORS.white};
              text-align: left;
              padding: 0 1.4em;

              > h3 {
                font-size: 1.2em;
                font-weight: ${FONT_WEIGHT.bold};
                margin-bottom: 0.1em;
                word-break: keep-all;
                letter-spacing: 1.5px;
              }

              > span {
                font-size: 0.8em;
                font-weight: ${FONT_WEIGHT.thin};
              }
            }
          }
        }
      }
    }
  }
`;

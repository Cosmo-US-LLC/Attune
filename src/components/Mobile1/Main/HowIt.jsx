import React from 'react'
// import Image from 'next/image'

function HowIt() {
  return (
    <div id='mobile-how-it-works' className='bg-[#E5FF7D] py-[30px] px-5 space-y-6'>
      <h1 className='font-miniature text-center text-[38px] '>How it Works</h1>

      <div className='space-y-5'>
        <HowItCards id="01" title="Sign Up" body="Create Your Profile In Just A Few Clicks. It’s Quick, Simple, And All About You.">
            <svg width="60" height="37" viewBox="0 0 60 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_5_1341" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="37">
                <path d="M0.231689 0.833496H59.6305V36.8498H0.231689V0.833496Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_5_1341)">
                <path d="M55.9065 20.4887C56.7462 21.2619 57.471 21.9295 57.471 23.2963C57.471 24.4448 56.6568 25.301 56.1717 25.7088C55.4292 26.3322 54.4736 26.7355 53.736 26.7355C53.3716 26.7355 53.077 27.007 53.077 27.3426C53.077 27.6773 53.3716 27.9489 53.736 27.9489C54.1033 27.9489 54.4883 27.8912 54.8772 27.782C54.8988 28.1284 54.8998 28.6968 54.7594 29.2977C54.4775 30.4967 53.7674 31.278 52.6488 31.6217C50.7091 32.2172 48.9098 30.9397 48.8745 30.9135C48.5907 30.7051 48.1772 30.7475 47.9493 31.0082C47.7215 31.2699 47.7667 31.6515 48.0505 31.8617C48.079 31.8825 48.297 32.0403 48.6555 32.2316C48.57 32.5347 48.3373 33.2421 47.8806 33.934C47.1352 35.0636 46.1491 35.6365 44.948 35.6365C43.4119 35.6365 42.3228 35.0798 41.7119 33.9827C41.2287 33.1157 41.2139 32.2163 41.213 32.1955V30.5788C41.213 30.2441 40.9183 29.9725 40.5539 29.9725C40.1906 29.9725 39.8949 30.2441 39.8949 30.5788V32.1955C39.8949 32.2045 39.8832 33.1103 39.397 33.9827C38.7851 35.0798 37.697 35.6365 36.1599 35.6365C35.3182 35.6365 34.6062 35.429 34.0454 35.0203C33.5868 34.6874 33.2145 34.2128 32.9376 33.611C32.4573 32.569 32.4269 31.4945 32.4259 31.3962C32.4279 31.2392 32.365 31.0804 32.2354 30.9604C32.0085 30.7493 31.6559 30.7231 31.3986 30.8846C31.3976 30.8855 31.3966 30.8855 31.3957 30.8864C31.3799 30.8964 31.3642 30.9072 31.3495 30.9189C31.3407 30.9243 31.3338 30.9315 31.3259 30.9379C31.319 30.9433 31.3112 30.9487 31.3043 30.955C31.2906 30.9676 29.9185 32.1793 28.5043 31.6371C26.8013 30.9839 26.8691 29.4763 27.0841 27.9886C27.0861 27.9751 27.0881 27.9624 27.09 27.9489H32.4976C32.9779 28.1519 34.5512 28.7582 36.1599 28.7582C37.8384 28.7582 38.8333 28.1663 39.3725 27.6701C40.0815 27.0169 40.334 26.2365 40.334 25.7241V23.2963C40.334 22.9616 40.0393 22.6891 39.6749 22.6891H37.7068C37.7961 22.5331 37.859 22.3661 37.8786 22.1929C37.9199 21.8438 37.7863 21.5082 37.5054 21.2492C36.6981 20.5049 35.2279 21.1238 34.1927 21.6534C33.4336 22.0414 32.7451 22.4807 32.4298 22.6891H21.2209C21.213 22.6891 21.2051 22.69 21.1973 22.6909C21.1875 22.6909 21.1786 22.6909 21.1688 22.6918C21.156 22.6927 21.1433 22.6945 21.1315 22.6954C21.1227 22.6973 21.1138 22.6982 21.105 22.6991C21.0912 22.7018 21.0785 22.7045 21.0657 22.7072C21.0578 22.709 21.05 22.7108 21.0421 22.7126C21.0284 22.7162 21.0146 22.7207 21.0009 22.7243C20.994 22.727 20.9871 22.7288 20.9802 22.7315C20.9665 22.7369 20.9537 22.7424 20.94 22.7478C20.936 22.7496 20.9311 22.7514 20.9272 22.7532C20.9105 22.7604 19.2802 23.4984 17.7058 23.4984C16.7463 23.4984 16.0451 23.244 15.5619 22.7207C14.7948 21.8889 14.7477 20.5744 14.7889 19.8572H17.7058C17.9985 19.8572 18.2558 19.6803 18.3383 19.4214C18.4208 19.1634 18.3089 18.8864 18.0624 18.7402C17.7441 18.5517 17.4043 18.2422 17.3179 18.0744C17.4741 18.0663 17.9848 18.1105 19.2046 18.7574C20.0659 19.2139 20.8123 19.7263 20.8251 19.7363C20.829 19.739 20.8339 19.7408 20.8378 19.7435C20.8477 19.7507 20.8585 19.757 20.8683 19.7624C20.8771 19.7678 20.885 19.7724 20.8928 19.7769C20.9036 19.7823 20.9144 19.7868 20.9243 19.7922C20.9341 19.7958 20.9429 19.8003 20.9518 19.8039C20.9616 19.8084 20.9724 19.812 20.9832 19.8157C20.993 19.8193 21.0028 19.8229 21.0127 19.8256C21.0225 19.8292 21.0333 19.8319 21.0431 19.8346C21.0539 19.8373 21.0647 19.84 21.0755 19.8418C21.0853 19.8436 21.0951 19.8454 21.106 19.8472C21.1168 19.849 21.1285 19.8508 21.1403 19.8526C21.1492 19.8535 21.159 19.8545 21.1698 19.8554C21.1816 19.8554 21.1934 19.8563 21.2051 19.8563C21.211 19.8563 21.216 19.8572 21.2209 19.8572H28.2509C28.6153 19.8572 28.9099 19.5856 28.9099 19.2509C28.9099 18.9153 28.6153 18.6437 28.2509 18.6437H21.4359C21.1207 18.4353 20.4322 17.9959 19.674 17.6071C18.6379 17.0775 17.1686 16.4595 16.3613 17.2029C16.0794 17.4618 15.9469 17.7975 15.9871 18.1466C16.0078 18.3207 16.0706 18.4876 16.159 18.6437H14.1908C13.8687 18.6437 13.5937 18.8584 13.5407 19.1507C13.5358 19.1787 13.4189 19.8382 13.4758 20.6854C13.5544 21.8627 13.9178 22.8109 14.5532 23.502C15.2918 24.305 16.3525 24.7127 17.7058 24.7127C19.3155 24.7127 20.8879 24.1065 21.3692 23.9035H32.6449C32.6498 23.9035 32.6547 23.9026 32.6596 23.9026C32.6724 23.9026 32.6852 23.9017 32.6979 23.9008C32.7068 23.8999 32.7166 23.899 32.7254 23.8981C32.7372 23.8972 32.749 23.8954 32.7608 23.8936C32.7706 23.8918 32.7804 23.8899 32.7903 23.8881C32.8011 23.8854 32.8119 23.8827 32.8237 23.88C32.8335 23.8773 32.8433 23.8746 32.8531 23.8719C32.8639 23.8683 32.8737 23.8656 32.8836 23.862C32.8934 23.8584 32.9042 23.8539 32.914 23.8503C32.9238 23.8466 32.9327 23.8421 32.9415 23.8376C32.9523 23.8331 32.9621 23.8277 32.9729 23.8223C32.9808 23.8178 32.9896 23.8133 32.9975 23.8088C33.0083 23.8024 33.0181 23.7961 33.0279 23.7898C33.0329 23.7871 33.0368 23.7844 33.0407 23.7817C33.0476 23.7772 33.7871 23.2674 34.6514 22.8082C35.879 22.1568 36.3917 22.1117 36.5489 22.1208C36.4634 22.2877 36.1275 22.5917 35.8034 22.7866C35.5579 22.9318 35.4459 23.2097 35.5284 23.4677C35.6109 23.7257 35.8682 23.9035 36.1599 23.9035H39.0159V25.7241C39.0159 26.1084 38.5318 27.5447 36.1599 27.5447C34.5856 27.5447 32.9553 26.8067 32.9395 26.7995C32.9356 26.7977 32.9307 26.7959 32.9258 26.7941C32.913 26.7887 32.9003 26.7833 32.8875 26.7779C32.8796 26.7752 32.8708 26.7724 32.8629 26.7697C32.8512 26.7661 32.8394 26.7625 32.8266 26.7589C32.8168 26.7562 32.807 26.7544 32.7971 26.7517C32.7863 26.7499 32.7755 26.7481 32.7657 26.7463C32.7529 26.7436 32.7412 26.7418 32.7284 26.7409C32.7196 26.74 32.7117 26.7391 32.7019 26.7382C32.6881 26.7373 32.6744 26.7364 32.6606 26.7364C32.6557 26.7364 32.6508 26.7355 32.6449 26.7355H26.4939C26.4909 26.7355 26.488 26.7355 26.4841 26.7355C26.4723 26.7355 26.4595 26.7364 26.4467 26.7373C26.4379 26.7382 26.4281 26.7382 26.4192 26.7391C26.4075 26.7409 26.3957 26.7427 26.3839 26.7445C26.3741 26.7463 26.3642 26.7472 26.3544 26.749C26.3436 26.7517 26.3328 26.7544 26.322 26.7571C26.3122 26.7589 26.3024 26.7616 26.2925 26.7643C26.2817 26.7679 26.2719 26.7715 26.2621 26.7752C26.2523 26.7779 26.2415 26.7815 26.2317 26.7851C26.2228 26.7887 26.213 26.7932 26.2042 26.7977C26.1933 26.8022 26.1835 26.8067 26.1737 26.8112C26.1658 26.8158 26.157 26.8212 26.1492 26.8257C26.1384 26.8311 26.1285 26.8374 26.1187 26.8437C26.1109 26.8482 26.104 26.8536 26.0961 26.8591C26.0863 26.8663 26.0765 26.8726 26.0667 26.8807C26.0647 26.8825 26.0617 26.8834 26.0598 26.8852L19.4462 32.2145C17.7019 30.9135 10.997 25.8594 5.86341 21.2438C3.93747 19.5125 2.63419 17.6721 1.9909 15.7747C1.43109 14.1264 1.40359 12.4818 1.91135 11.0184C2.30223 9.88796 3.00641 8.89194 3.94729 8.13861C4.89209 7.38168 6.05492 6.88637 7.31204 6.70413C8.96397 6.46595 10.7475 6.77089 12.4701 7.58828C14.4717 8.53738 16.3486 10.1297 18.0486 12.3203C18.1763 12.4854 18.3845 12.5801 18.6045 12.5747C18.8245 12.5684 19.0268 12.461 19.1437 12.2896C20.2633 10.6395 21.6068 9.32048 23.138 8.36957C24.4972 7.52422 25.9959 6.99013 27.4711 6.82412C29.6563 6.57783 31.6952 7.13718 33.0653 8.35785C33.077 8.36867 33.0869 8.37679 33.0996 8.38672C33.1153 8.39844 34.6651 9.63264 34.7584 11.7374C34.8458 13.7078 33.683 15.819 31.3004 18.0122C31.0431 18.2495 31.0431 18.6338 31.3004 18.8702C31.5577 19.1074 31.9751 19.1074 32.2324 18.8702C34.8969 16.4171 36.1894 13.992 36.0745 11.6608C35.9498 9.13734 34.1957 7.65504 33.9678 7.4728C33.5043 7.0623 32.9808 6.71406 32.4102 6.43077C32.4338 6.32792 32.4308 6.21875 32.3915 6.11139C32.0615 5.19838 32.2648 4.20507 32.9523 3.38407C33.7085 2.47918 34.892 1.98207 36.1187 2.05424C36.1324 2.05515 36.1462 2.05515 36.1599 2.05515C37.0861 2.05515 38.0093 2.45301 38.6938 3.14589C39.2418 3.70164 39.8949 4.70037 39.8949 6.30356V9.54062C39.8949 9.87533 40.1906 10.1469 40.5539 10.1469C40.9183 10.1469 41.213 9.87533 41.213 9.54062V6.30356C41.213 4.70037 41.867 3.70164 42.4151 3.14589C43.0996 2.45301 44.0228 2.05515 44.948 2.05515C47.2726 2.05515 48.5897 3.46166 48.6781 6.02388C48.46 6.15019 48.244 6.29364 48.0289 6.45423C46.8611 7.33025 46.1668 8.40837 46.1373 8.45348C45.9537 8.74218 46.0578 9.11388 46.372 9.2844C46.6853 9.45401 47.09 9.35747 47.2736 9.06787C47.2805 9.05885 47.8757 8.135 48.8617 7.39611C50.0884 6.47678 51.3219 6.29183 52.526 6.84668C53.7331 7.40152 54.3488 8.36506 54.3587 9.71023C54.3665 10.7974 53.9707 11.7338 53.9668 11.7429C53.8853 11.9296 53.9108 12.1416 54.0336 12.3076C54.1554 12.4745 54.3606 12.5747 54.5787 12.5747C55.9733 12.5747 58.3137 13.0213 58.3137 16.0138C58.3137 17.1596 57.7951 18.0519 56.7727 18.6663C55.9526 19.1589 54.8036 19.453 53.6997 19.453C53.3363 19.453 53.0407 19.7245 53.0407 20.0592C53.0407 20.3949 53.3363 20.6664 53.6997 20.6664C54.4186 20.6664 55.1404 20.5672 55.8152 20.3831C55.8407 20.421 55.8711 20.4562 55.9065 20.4887ZM57.4926 19.683C58.8921 18.8422 59.6317 17.5737 59.6317 16.0138C59.6317 14.4269 59.0896 13.2062 58.022 12.387C57.3374 11.862 56.4594 11.5299 55.4498 11.4109C55.5667 10.9715 55.6777 10.3842 55.6777 9.74271C55.6777 7.90946 54.7918 6.53181 53.1163 5.76044C52.0772 5.28318 51.0116 5.19026 49.9627 5.47715C49.836 4.14011 49.3891 3.06109 48.6299 2.26265C47.746 1.33339 46.4732 0.841701 44.948 0.841701C43.6525 0.841701 42.3738 1.38392 41.4398 2.32941C41.0872 2.68758 40.7906 3.09537 40.5539 3.54286C40.3182 3.09537 40.0216 2.68758 39.6691 2.32941C38.74 1.38933 37.4701 0.848017 36.1815 0.841701C34.5247 0.75058 32.9287 1.42271 31.9073 2.64337C31.4565 3.18198 31.1452 3.8054 31.0048 4.44685C30.8997 4.93043 30.8908 5.4122 30.9763 5.88494C29.8429 5.57098 28.5956 5.47445 27.311 5.6197C25.6296 5.80826 23.9315 6.41182 22.4004 7.36363C20.9518 8.26402 19.6613 9.45491 18.5534 10.9119C16.8789 8.91991 15.0384 7.44122 13.0742 6.50926C11.1001 5.57369 9.03763 5.22634 7.10678 5.50512C5.60511 5.72255 4.21344 6.31619 3.08204 7.22289C1.95947 8.12237 1.11976 9.30695 0.655212 10.6494C0.0649561 12.3518 0.0924554 14.2491 0.732799 16.1374C1.44189 18.2287 2.85811 20.2388 4.94218 22.1126C10.9115 27.478 18.9708 33.4207 19.0523 33.4802C19.1722 33.5695 19.3175 33.6138 19.4629 33.6138C19.618 33.6138 19.7732 33.5632 19.897 33.4631L25.666 28.815C25.6375 29.2742 25.6483 29.784 25.7651 30.2901C26.0352 31.462 26.7866 32.2929 27.9975 32.7576C28.4071 32.9146 28.8353 32.993 29.2733 32.993C29.837 32.993 30.4165 32.8631 30.992 32.6042C31.0735 32.5681 31.1521 32.5293 31.2267 32.4914C31.3112 32.947 31.4575 33.4965 31.707 34.0486C32.0694 34.8489 32.5742 35.4912 33.2087 35.9585C34.011 36.5504 35.005 36.8499 36.1599 36.8499C38.7085 36.8499 39.9539 35.6238 40.5539 34.5638C41.155 35.6238 42.3994 36.8499 44.948 36.8499C46.6294 36.8499 48.0407 36.0488 49.0287 34.5322C49.4775 33.8438 49.7388 33.1581 49.8723 32.735C50.3693 32.8866 50.9438 32.9967 51.5665 32.9967C52.0428 32.9967 52.5476 32.9317 53.0662 32.7729C54.6484 32.2875 55.6826 31.1607 56.0558 29.5151C56.3249 28.3323 56.152 27.2912 56.1442 27.2479C56.1442 27.2461 56.1442 27.2452 56.1442 27.2443C56.4624 27.062 56.7717 26.8482 57.0595 26.6055C58.1752 25.6682 58.789 24.4926 58.789 23.2963C58.789 21.6146 57.9513 20.6736 57.1174 19.8896C57.2471 19.8238 57.3718 19.7552 57.4926 19.683Z" fill="#A3CB03"/>
                </g>
                <path d="M43.7966 14.2422C43.4656 13.5439 42.7408 13.1063 41.9031 13.0991C41.8962 13.0991 41.8893 13.0991 41.8824 13.0991C41.0417 13.0991 40.3051 13.5313 39.9565 14.2314C39.8052 14.5363 39.9496 14.8963 40.2806 15.0361C40.6125 15.176 41.0034 15.0424 41.1547 14.7375C41.354 14.3396 41.7675 14.3117 41.8903 14.3126C42.0091 14.3144 42.4079 14.3468 42.5886 14.7276C42.6966 14.9558 42.9382 15.0921 43.1926 15.0921C43.281 15.0921 43.3703 15.0758 43.4558 15.0406C43.7897 14.9071 43.9419 14.5489 43.7966 14.2422Z" fill="#A3CB03"/>
                <path d="M49.5955 13.0927C48.8452 13.1351 48.1989 13.5609 47.864 14.2312C47.7128 14.5362 47.8581 14.8962 48.1891 15.036C48.2775 15.0739 48.3708 15.0919 48.4631 15.0919C48.7126 15.0919 48.9512 14.9602 49.0622 14.7374C49.1948 14.473 49.4128 14.3188 49.676 14.3034C49.9952 14.2854 50.3174 14.4721 50.5393 14.8032C50.7299 15.0883 51.1355 15.1767 51.4458 15.0008C51.7562 14.8249 51.8514 14.4514 51.6609 14.1663C51.1797 13.4472 50.4067 13.0467 49.5955 13.0927Z" fill="#A3CB03"/>
                <path d="M47.1191 16.4831C46.741 16.8314 46.3511 17.01 45.9386 17.0226C45.5261 17.01 45.1352 16.8314 44.7571 16.4831C44.4998 16.2459 44.0834 16.2459 43.826 16.4831C43.5677 16.7204 43.5677 17.1038 43.826 17.3411C44.4379 17.905 45.146 18.2081 45.8856 18.2343V18.237C45.9032 18.237 45.9209 18.2361 45.9386 18.2352C45.9563 18.2361 45.974 18.237 45.9916 18.237V18.2343C46.7302 18.2081 47.4383 17.905 48.0511 17.3411C48.3085 17.1038 48.3085 16.7204 48.0511 16.4831C47.7938 16.2459 47.3764 16.2459 47.1191 16.4831Z" fill="#A3CB03"/>
                <path d="M31.3539 10.9812C30.743 10.4192 29.8002 10.2486 28.9507 10.5473C28.1581 10.826 27.6385 11.454 27.5934 12.1856C27.5727 12.5204 27.8517 12.8064 28.215 12.8253C28.2278 12.8262 28.2396 12.8262 28.2524 12.8262C28.5991 12.8262 28.8898 12.5763 28.9094 12.2533C28.932 11.8915 29.2748 11.7327 29.4211 11.6813C29.698 11.5839 30.1263 11.5667 30.4219 11.8392C30.6792 12.0765 31.0966 12.0765 31.3539 11.8392C31.6112 11.6028 31.6112 11.2185 31.3539 10.9812Z" fill="#A3CB03"/>
                <path d="M21.2552 12.8941C20.4499 13.1179 19.8665 13.7296 19.6927 14.528C19.622 14.8573 19.8528 15.1767 20.2102 15.2425C20.2535 15.2506 20.2967 15.2543 20.3399 15.2543C20.6473 15.2543 20.9223 15.0549 20.9851 14.7662C21.0637 14.408 21.3004 14.1491 21.6373 14.0552C21.9457 13.9695 22.2717 14.0489 22.5094 14.2673C22.7667 14.5045 23.1841 14.5045 23.4414 14.2673C23.6987 14.03 23.6987 13.6457 23.4414 13.4093C22.863 12.877 22.0252 12.6794 21.2552 12.8941Z" fill="#A3CB03"/>
                <path d="M28.5791 14.0969C28.0841 13.8262 27.6255 14.4559 27.6255 14.4559L27.6264 14.4523C27.6235 14.4587 27.3495 15.1669 26.7337 15.3572C26.3045 15.4899 25.7555 15.3536 25.1004 14.9522C24.7979 14.7654 24.3884 14.8412 24.1871 15.12C23.9847 15.3987 24.0672 15.7759 24.3697 15.9617C25.0847 16.4011 25.7624 16.6212 26.3939 16.6212C26.66 16.6212 26.9183 16.5824 27.1678 16.503C28.4023 16.1133 28.857 14.8917 28.8757 14.8394C28.8757 14.8394 29.0751 14.3675 28.5791 14.0969Z" fill="#A3CB03"/>
            </svg>
        </HowItCards>
        
        <HowItCards id="02" title="Find Your Listener" body="Explore A Variety Of Compassionate, Judgment-Free Listeners. Choose Someone Who Truly Gets You.">
            <svg width="49" height="37" viewBox="0 0 49 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.1999 9.77758C23.0847 9.77758 22.9716 9.81426 22.8789 9.88356L20.8826 11.3795V10.3115C20.8826 10.016 20.6432 9.77758 20.3476 9.77758H18.922C18.4309 9.77758 18.0304 9.37812 18.0304 8.88695V3.18858C18.0304 2.69741 18.4309 2.29796 18.922 2.29796H28.9044C29.3955 2.29796 29.796 2.69741 29.796 3.18858V8.88695C29.796 9.37812 29.3955 9.77758 28.9044 9.77758H23.1999ZM30.865 8.88695V3.18858C30.865 2.10842 29.9855 1.229 28.9044 1.229H18.922C17.8408 1.229 16.9614 2.10842 16.9614 3.18858V8.88695C16.9614 9.96712 17.8408 10.8455 18.922 10.8455H19.8137V12.4484C19.8137 12.6502 19.9278 12.8357 20.1092 12.9264C20.1846 12.9641 20.2661 12.9824 20.3476 12.9824C20.4618 12.9824 20.5749 12.9467 20.6686 12.8754L23.3782 10.8455H28.9044C29.9855 10.8455 30.865 9.96712 30.865 8.88695Z" fill="#A3CB03"/>
                <mask id="mask0_5_1359" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="25" y="0" width="24" height="37">
                <path d="M25.2644 0.503418H48.6887V36.5034H25.2644V0.503418Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_5_1359)">
                <path d="M47.6178 28.8311C47.6178 30.108 46.5784 31.1464 45.3005 31.1464H36.7438C35.466 31.1464 34.4266 30.108 34.4266 28.8311V25.982C34.4266 24.7061 35.466 23.6667 36.7438 23.6667H40.3094C42.1762 23.6667 43.6966 22.1494 43.6966 20.2836V12.27H45.3005C46.5784 12.27 47.6178 13.3084 47.6178 14.5852V28.8311ZM35.1399 5.32537C35.1399 3.26287 36.8192 1.58556 38.8827 1.58556C40.9473 1.58556 42.6266 3.26287 42.6266 5.32537C42.6266 7.38685 40.9473 9.06416 38.8827 9.06416C36.8192 9.06416 35.1399 7.38685 35.1399 5.32537ZM31.2177 21.1742H26.5832V15.1192H31.2177V21.1742ZM45.3005 11.2021H43.4582C43.1158 10.343 42.432 9.65621 41.574 9.30974C42.8539 8.44459 43.6966 6.98128 43.6966 5.32537C43.6966 2.67387 41.5373 0.516602 38.8827 0.516602C36.2292 0.516602 34.0699 2.67387 34.0699 5.32537C34.0699 6.98128 34.9126 8.44459 36.1925 9.30974C34.9493 9.8111 34.0699 11.0288 34.0699 12.4483V17.6127H32.2876V14.5852C32.2876 14.2897 32.0482 14.0512 31.7527 14.0512H26.0482C25.7527 14.0512 25.5132 14.2897 25.5132 14.5852V21.7082C25.5132 22.0037 25.7527 22.2421 26.0482 22.2421H27.3046C26.2133 23.1246 25.5132 24.4728 25.5132 25.982V29.5434C25.5132 29.839 25.7527 30.0784 26.0482 30.0784H29.0787V35.9551C29.0787 36.2496 29.3182 36.4891 29.6137 36.4891H32.466C32.7615 36.4891 33.001 36.2496 33.001 35.9551C33.001 35.6596 32.7615 35.4201 32.466 35.4201H30.1487V30.0784H32.466C32.7615 30.0784 33.001 29.839 33.001 29.5434C33.001 29.2489 32.7615 29.0095 32.466 29.0095H26.5832V25.982C26.5832 23.9205 28.2625 22.2421 30.327 22.2421H31.7527C32.0482 22.2421 32.2876 22.0037 32.2876 21.7082V18.6807H34.6049C34.9004 18.6807 35.1399 18.4422 35.1399 18.1467V12.4483C35.1399 11.1715 36.1793 10.1331 37.4571 10.1331H40.3094C41.5872 10.1331 42.6266 11.1715 42.6266 12.4483V20.2836C42.6266 21.5604 41.5872 22.5988 40.3094 22.5988H36.7438C34.876 22.5988 33.3566 24.1161 33.3566 25.982V28.8311C33.3566 30.697 34.876 32.2153 36.7438 32.2153H37.3053L35.5526 35.7156C35.4201 35.9796 35.5281 36.3006 35.7921 36.433C35.8685 36.4707 35.95 36.4891 36.0305 36.4891C36.2262 36.4891 36.4157 36.3811 36.5094 36.1936L38.5006 32.2153H44.2571L46.2482 36.1936C46.342 36.3811 46.5305 36.4891 46.7272 36.4891C46.8077 36.4891 46.8892 36.4707 46.9656 36.433C47.2296 36.3006 47.3366 35.9796 47.2051 35.7156L45.4514 32.2112C47.2489 32.1328 48.6878 30.647 48.6878 28.8311V14.5852C48.6878 12.7194 47.1684 11.2021 45.3005 11.2021Z" fill="#A3CB03"/>
                </g>
                <mask id="mask1_5_1359" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="37">
                <path d="M0.559326 0.503418H21.6133V36.5034H0.559326V0.503418Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_5_1359)">
                <path d="M6.61945 5.32537C6.61945 3.26287 8.2988 1.58556 10.3633 1.58556C12.4279 1.58556 14.1072 3.26287 14.1072 5.32537C14.1072 7.38685 12.4279 9.06416 10.3633 9.06416C8.2988 9.06416 6.61945 7.38685 6.61945 5.32537ZM8.93772 23.6667H12.5023C13.7801 23.6667 14.8195 24.7061 14.8195 25.982V28.8311C14.8195 30.108 13.7801 31.1464 12.5023 31.1464H3.94554C2.6687 31.1464 1.62828 30.108 1.62828 28.8311V14.5852C1.62828 13.3084 2.6687 12.27 3.94554 12.27H5.5505V20.2836C5.5505 22.1494 7.06986 23.6667 8.93772 23.6667ZM18.2067 21.8865C17.0318 21.8865 16.1972 21.6562 15.7264 21.2017C15.3514 20.84 15.1762 20.3223 15.1762 19.5713V12.4483C15.1762 11.0288 14.2968 9.8111 13.0546 9.30974C14.3334 8.44459 15.1762 6.98128 15.1762 5.32537C15.1762 2.67387 13.0169 0.516602 10.3633 0.516602C7.7098 0.516602 5.5505 2.67387 5.5505 5.32537C5.5505 6.98128 6.39323 8.44459 7.6721 9.30974C6.8151 9.65621 6.13032 10.343 5.78895 11.2021H3.94554C2.07869 11.2021 0.559326 12.7194 0.559326 14.5852V28.8311C0.559326 30.647 1.99717 32.1328 3.79574 32.2112L2.042 35.7156C1.90953 35.9796 2.01653 36.3006 2.28045 36.433C2.3579 36.4707 2.43942 36.4891 2.51992 36.4891C2.71558 36.4891 2.9041 36.3811 2.99785 36.1936L4.98901 32.2153H10.7455L12.7377 36.1936C12.8314 36.3811 13.0199 36.4891 13.2156 36.4891C13.2961 36.4891 13.3776 36.4707 13.455 36.433C13.719 36.3006 13.826 35.9796 13.6935 35.7156L11.9418 32.2153H12.5023C14.3701 32.2153 15.8895 30.697 15.8895 28.8311V25.982C15.8895 24.1161 14.3701 22.5988 12.5023 22.5988H8.93772C7.65987 22.5988 6.61945 21.5604 6.61945 20.2836V12.4483C6.61945 11.1715 7.65987 10.1331 8.93772 10.1331H11.79C13.0668 10.1331 14.1072 11.1715 14.1072 12.4483V19.5713C14.1072 21.8162 15.486 22.9544 18.2067 22.9544C19.0444 22.9544 19.6578 23.1735 20.0298 23.6046C20.3579 23.9837 20.524 24.5441 20.524 25.2697V35.4201H18.7417V30.2557C18.7417 29.9612 18.5023 29.7218 18.2067 29.7218C17.9112 29.7218 17.6718 29.9612 17.6718 30.2557V35.9551C17.6718 36.2496 17.9112 36.4891 18.2067 36.4891H21.059C21.3545 36.4891 21.594 36.2496 21.594 35.9551V25.2697C21.594 24.2802 21.3402 23.4854 20.8399 22.9065C20.255 22.2299 19.3695 21.8865 18.2067 21.8865Z" fill="#A3CB03"/>
                </g>
                <path d="M23.9408 5.43848C23.6157 5.43848 23.3528 5.70138 23.3528 6.02645C23.3528 6.3505 23.6157 6.61341 23.9408 6.61341C24.2658 6.61341 24.5287 6.3505 24.5287 6.02645C24.5287 5.70138 24.2658 5.43848 23.9408 5.43848Z" fill="#A3CB03"/>
                <path d="M27.4705 5.43848C27.1455 5.43848 26.8826 5.70138 26.8826 6.02645C26.8826 6.3505 27.1455 6.61341 27.4705 6.61341C27.7956 6.61341 28.0585 6.3505 28.0585 6.02645C28.0585 5.70138 27.7956 5.43848 27.4705 5.43848Z" fill="#A3CB03"/>
                <path d="M20.3661 5.43848C20.042 5.43848 19.7781 5.70138 19.7781 6.02645C19.7781 6.3505 20.042 6.61341 20.3661 6.61341C20.6911 6.61341 20.954 6.3505 20.954 6.02645C20.954 5.70138 20.6911 5.43848 20.3661 5.43848Z" fill="#A3CB03"/>
            </svg>
        </HowItCards>
        
        <HowItCards id="03" title="Connect" body="Open Up Through Voice Or Video, Anytime And Anywhere. It’s Your Safe Space To Share.">
            <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.4834 15.6776L14.5166 23.6577L11.4151 20.5511C11.355 20.491 11.2862 20.4441 11.2077 20.4118C11.1293 20.3796 11.0472 20.3627 10.963 20.3627C10.878 20.3627 10.7959 20.3796 10.7175 20.4118C10.639 20.4441 10.5702 20.491 10.5101 20.5511L6.88903 24.178C6.82893 24.2381 6.78276 24.3077 6.75052 24.3861C6.71754 24.4645 6.70142 24.5459 6.70142 24.6309C6.70142 24.7159 6.71754 24.798 6.75052 24.8764C6.78276 24.9548 6.82893 25.0244 6.88903 25.0845L14.0637 32.2724C14.1238 32.3324 14.1927 32.3794 14.2711 32.4116C14.3495 32.4438 14.4308 32.4607 14.5158 32.4607C14.6009 32.4607 14.6822 32.4438 14.7606 32.4116C14.839 32.3794 14.9087 32.3324 14.9687 32.2724L27.0095 20.211C27.0696 20.1509 27.1158 20.0813 27.1488 20.0029C27.181 19.9245 27.1972 19.8424 27.1972 19.7574C27.1972 19.6724 27.181 19.591 27.1488 19.5126C27.1158 19.4335 27.0696 19.3646 27.0095 19.3045L23.3885 15.6776C23.3284 15.6175 23.2595 15.5713 23.1811 15.5391C23.1027 15.5061 23.0214 15.49 22.9363 15.49C22.8513 15.49 22.77 15.5061 22.6916 15.5391C22.6132 15.5713 22.5435 15.6175 22.4834 15.6776ZM14.5166 30.9129L8.24334 24.6294L10.9622 21.9127L14.0637 25.02C14.1245 25.0779 14.1941 25.1219 14.2725 25.1534C14.351 25.1849 14.4316 25.2003 14.5158 25.2003C14.6001 25.2003 14.6815 25.1849 14.7599 25.1534C14.8376 25.1219 14.9072 25.0779 14.9687 25.02L22.9363 17.04L25.6545 19.7574L14.5166 30.9129Z" fill="#A3CB03"/>
                <mask id="mask0_5_1380" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="37">
                <path d="M0.947021 0.0827637H32.8408V36.0828H0.947021V0.0827637Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_5_1380)">
                <path d="M29.6047 4.32398H27.0368V3.50612C27.0368 3.39765 27.0317 3.28846 27.0207 3.18C27.0104 3.07153 26.9943 2.9638 26.973 2.85681C26.9518 2.74981 26.9254 2.64428 26.8939 2.53948C26.8624 2.43542 26.8257 2.33282 26.784 2.23168C26.7429 2.13128 26.696 2.03235 26.6447 1.93634C26.5934 1.84034 26.5377 1.74653 26.4769 1.65566C26.4168 1.56552 26.3523 1.47758 26.2827 1.3933C26.2138 1.30902 26.1412 1.2284 26.0636 1.15072C25.9866 1.07377 25.9067 1.00049 25.8225 0.931599C25.7382 0.861977 25.651 0.797486 25.5601 0.736659C25.4699 0.675832 25.3761 0.620135 25.2801 0.568836C25.1841 0.517536 25.0859 0.470633 24.9855 0.428861C24.8851 0.387088 24.7825 0.350445 24.6785 0.318932C24.5737 0.286687 24.4681 0.260304 24.3619 0.239051C24.2549 0.217799 24.1471 0.201676 24.0387 0.191416C23.9302 0.180423 23.8218 0.175293 23.7133 0.175293C23.6041 0.175293 23.4956 0.180423 23.3872 0.191416C23.2787 0.201676 23.171 0.217799 23.0647 0.239051C22.9577 0.260304 22.8522 0.286687 22.7481 0.318932C22.6433 0.350445 22.5415 0.387088 22.4403 0.428861C22.3399 0.470633 22.2417 0.517536 22.1457 0.568836C22.0497 0.620135 21.9566 0.675832 21.8658 0.736659C21.7756 0.797486 21.6877 0.861977 21.6041 0.931599C21.5199 1.00049 21.4393 1.07377 21.3623 1.15072C21.2854 1.2284 21.2121 1.30902 21.1432 1.3933C21.0743 1.47758 21.0091 1.56552 20.949 1.65566C20.8881 1.74653 20.8324 1.84034 20.7811 1.93634C20.7298 2.03235 20.6837 2.13128 20.6419 2.23168C20.6001 2.33282 20.5635 2.43542 20.532 2.53948C20.5005 2.64428 20.4741 2.74981 20.4528 2.85681C20.4316 2.9638 20.4162 3.07153 20.4052 3.18C20.3949 3.28846 20.3898 3.39765 20.3898 3.50612V4.32398H12.8729C12.7886 4.32398 12.7066 4.3401 12.6281 4.37308C12.5497 4.40533 12.4808 4.4515 12.4207 4.51159C12.3607 4.57169 12.3145 4.64131 12.2815 4.71972C12.2493 4.79814 12.2331 4.88022 12.2331 4.96523V6.42288C12.2331 6.55772 12.2199 6.69037 12.1936 6.82228C12.1679 6.9542 12.1291 7.08244 12.0778 7.2063C12.0265 7.33015 11.9634 7.44814 11.8887 7.56027C11.8139 7.67166 11.7297 7.77499 11.6344 7.87026C11.5399 7.96553 11.4365 8.04981 11.3251 8.12456C11.2137 8.19932 11.0957 8.26234 10.9719 8.31364C10.848 8.36567 10.7198 8.40451 10.5886 8.43016C10.4567 8.45655 10.324 8.46974 10.1899 8.46974C10.0558 8.46974 9.92244 8.45655 9.79126 8.43016C9.65935 8.40451 9.53183 8.36567 9.40798 8.31364C9.28413 8.26234 9.16614 8.19932 9.05474 8.12456C8.94335 8.04981 8.84002 7.96553 8.74475 7.87026C8.65021 7.77499 8.5652 7.67166 8.49118 7.56027C8.41643 7.44814 8.3534 7.33015 8.3021 7.2063C8.2508 7.08244 8.21196 6.9542 8.18558 6.82228C8.15993 6.69037 8.14674 6.55772 8.14674 6.42288V3.50612C8.14674 3.29799 8.17752 3.09498 8.23981 2.89638C8.3021 2.69778 8.39224 2.5131 8.51097 2.34161C8.62896 2.17086 8.7704 2.02135 8.93382 1.8931C9.09798 1.76559 9.27753 1.66519 9.47174 1.5919C9.66595 1.51861 9.86748 1.47611 10.0749 1.46438C10.2823 1.45266 10.4867 1.47245 10.6883 1.52301C10.8898 1.57358 11.0789 1.65346 11.2562 1.76192C11.4336 1.87112 11.5904 2.00303 11.7275 2.15986C11.7546 2.19431 11.7846 2.22582 11.8176 2.25367C11.8506 2.28225 11.8865 2.30643 11.9246 2.32769C11.9627 2.34821 12.003 2.36506 12.0448 2.37825C12.0866 2.39071 12.1291 2.39951 12.1723 2.40317C12.2155 2.40757 12.2588 2.40683 12.302 2.4017C12.3453 2.39731 12.3878 2.38778 12.4295 2.37459C12.4706 2.3614 12.5102 2.34381 12.5483 2.32182C12.5856 2.30057 12.6215 2.27492 12.6538 2.24634C12.6868 2.21776 12.7161 2.18551 12.7425 2.15107C12.7689 2.11589 12.7908 2.07925 12.8099 2.03967C12.8282 2.0001 12.8429 1.95906 12.8531 1.91729C12.8634 1.87478 12.8693 1.83154 12.8715 1.78831C12.8729 1.74433 12.87 1.7011 12.8627 1.65786C12.8553 1.61462 12.8436 1.57285 12.8282 1.53254C12.8121 1.4915 12.7923 1.45339 12.7689 1.41675C12.7454 1.38011 12.7183 1.34566 12.6875 1.31488C12.5768 1.1881 12.4574 1.07084 12.3291 0.961646C12.2002 0.853183 12.0646 0.754981 11.9209 0.667038C11.7773 0.579096 11.6285 0.502879 11.4732 0.437655C11.3185 0.372431 11.1595 0.318932 10.9961 0.277893C10.8334 0.236853 10.6678 0.208271 10.5007 0.192881C10.3336 0.176759 10.1658 0.173827 9.99793 0.183354C9.8301 0.192882 9.66375 0.214867 9.49959 0.249311C9.33469 0.284488 9.1742 0.331391 9.01664 0.390752C8.85907 0.450113 8.70737 0.520467 8.5608 0.60328C8.4135 0.68536 8.27425 0.778432 8.14161 0.881765C8.00896 0.98583 7.88511 1.09869 7.76932 1.22108C7.65426 1.34346 7.54873 1.47391 7.45272 1.61242C7.35745 1.75093 7.27244 1.89603 7.19916 2.047C7.12514 2.1987 7.06358 2.3548 7.01301 2.5153C6.96318 2.67579 6.9258 2.83922 6.90015 3.00631C6.87524 3.17267 6.86204 3.33976 6.86278 3.50831V4.32618H4.29779C4.19299 4.32618 4.08892 4.33131 3.98486 4.34157C3.88006 4.35183 3.77673 4.36722 3.67413 4.38774C3.57153 4.40899 3.46966 4.43391 3.36926 4.46469C3.26959 4.49547 3.17066 4.53065 3.07392 4.57095C2.97718 4.61126 2.88265 4.65596 2.79031 4.7058C2.69797 4.7549 2.60783 4.80913 2.52062 4.86703C2.43414 4.92565 2.34986 4.98795 2.26851 5.05464C2.1879 5.12133 2.11022 5.19168 2.0362 5.2657C1.96218 5.34045 1.89183 5.41813 1.82514 5.49875C1.75845 5.58009 1.69615 5.66437 1.63826 5.75158C1.57963 5.83879 1.52613 5.92893 1.4763 6.02127C1.4272 6.11361 1.38249 6.20888 1.34219 6.30562C1.30188 6.40236 1.2667 6.50129 1.23592 6.60169C1.20587 6.70209 1.18022 6.80396 1.1597 6.90656C1.13918 7.00916 1.12379 7.11322 1.11353 7.21729C1.10328 7.32209 1.09741 7.42689 1.09741 7.53168V32.8774C1.09741 32.9823 1.10328 33.087 1.11353 33.1911C1.12379 33.2959 1.13918 33.3992 1.1597 33.5026C1.18022 33.6052 1.20587 33.707 1.23592 33.8074C1.2667 33.9078 1.30188 34.0068 1.34219 34.1035C1.38249 34.2003 1.4272 34.2948 1.4763 34.3879C1.52613 34.4802 1.57963 34.5703 1.63826 34.6576C1.69615 34.7448 1.75845 34.829 1.82514 34.9097C1.89183 34.991 1.96218 35.0687 2.0362 35.1427C2.11022 35.2175 2.1879 35.2878 2.26851 35.3538C2.34986 35.4205 2.43414 35.4835 2.52062 35.5414C2.60783 35.6 2.69797 35.6535 2.79031 35.7033C2.88265 35.7532 2.97718 35.7979 3.07392 35.8382C3.17066 35.8785 3.26959 35.9137 3.36926 35.9444C3.46966 35.9745 3.57153 36.0001 3.67413 36.0207C3.77673 36.0412 3.88006 36.0566 3.98486 36.0676C4.08892 36.0778 4.19299 36.083 4.29779 36.083H26.3963C26.4813 36.083 26.5626 36.0668 26.6411 36.0339C26.7195 36.0016 26.7891 35.9554 26.8492 35.8953C26.9093 35.8353 26.9554 35.7656 26.9877 35.6872C27.0207 35.6088 27.0368 35.5267 27.0368 35.4417C27.0368 35.3567 27.0207 35.2753 26.9877 35.1962C26.9554 35.1178 26.9093 35.0489 26.8492 34.9888C26.7891 34.928 26.7195 34.8818 26.6411 34.8496C26.5626 34.8166 26.4813 34.8005 26.3963 34.8005H4.29779C4.17174 34.8005 4.04715 34.788 3.9233 34.7638C3.80018 34.7389 3.67999 34.7023 3.56347 34.6539C3.44694 34.6063 3.33628 34.5469 3.23148 34.4765C3.12669 34.4062 3.02922 34.3263 2.94054 34.2376C2.85113 34.1482 2.77125 34.0508 2.70163 33.946C2.63128 33.8404 2.57192 33.7298 2.52428 33.6132C2.47591 33.4967 2.43927 33.3765 2.41435 33.2527C2.39017 33.1288 2.37771 33.0035 2.37771 32.8774V13.1505H31.5248V32.8774C31.5248 33.0035 31.5131 33.1288 31.4881 33.2527C31.4632 33.3765 31.4273 33.4967 31.379 33.6132C31.3306 33.7298 31.2712 33.8404 31.2016 33.946C31.1312 34.0508 31.0521 34.1482 30.9627 34.2376C30.8733 34.3263 30.7765 34.4062 30.6717 34.4765C30.567 34.5469 30.4563 34.6063 30.3398 34.6539C30.2232 34.7023 30.1031 34.7389 29.9792 34.7638C29.8554 34.788 29.7308 34.8005 29.6047 34.8005C29.5197 34.8005 29.4384 34.8166 29.3599 34.8496C29.2815 34.8818 29.2119 34.928 29.1518 34.9888C29.0917 35.0489 29.0455 35.1178 29.0133 35.1962C28.9811 35.2753 28.9649 35.3567 28.9649 35.4417C28.9649 35.5267 28.9811 35.6088 29.0133 35.6872C29.0455 35.7656 29.0917 35.8353 29.1518 35.8953C29.2119 35.9554 29.2815 36.0016 29.3599 36.0339C29.4384 36.0668 29.5197 36.083 29.6047 36.083C29.7095 36.083 29.8143 36.0778 29.9184 36.0676C30.0224 36.0566 30.1258 36.0412 30.2291 36.0207C30.3317 36.0001 30.4328 35.9745 30.5332 35.9444C30.6336 35.9137 30.7318 35.8785 30.8286 35.8382C30.9261 35.7979 31.0206 35.7532 31.1129 35.7033C31.2053 35.6535 31.2947 35.6 31.3819 35.5414C31.4691 35.4835 31.5534 35.4205 31.634 35.3538C31.7153 35.2878 31.793 35.2175 31.867 35.1427C31.9411 35.0687 32.0114 34.991 32.0774 34.9097C32.1441 34.829 32.2063 34.7448 32.265 34.6576C32.3229 34.5703 32.3771 34.4802 32.4262 34.3879C32.476 34.2948 32.5207 34.2003 32.5603 34.1035C32.6006 34.0068 32.6358 33.9078 32.6666 33.8074C32.6974 33.707 32.723 33.6052 32.7435 33.5026C32.764 33.3992 32.7794 33.2959 32.7897 33.1911C32.8 33.087 32.8051 32.9823 32.8051 32.8774V7.52949C32.8051 7.42469 32.8 7.31989 32.7897 7.21582C32.7794 7.11103 32.764 7.00769 32.7435 6.90436C32.723 6.80176 32.6974 6.69989 32.6666 6.59949C32.6358 6.49909 32.6006 6.40016 32.5603 6.30342C32.5207 6.20668 32.476 6.11215 32.4262 6.01907C32.3771 5.92673 32.3229 5.83659 32.265 5.74938C32.2063 5.66217 32.1441 5.57789 32.0774 5.49728C32.0114 5.41593 31.9411 5.33825 31.867 5.26423C31.793 5.18948 31.7153 5.11913 31.634 5.05317C31.5534 4.98648 31.4691 4.92346 31.3819 4.86556C31.2947 4.80693 31.2053 4.75343 31.1129 4.7036C31.0206 4.65377 30.9261 4.60906 30.8286 4.56875C30.7318 4.52845 30.6336 4.49327 30.5332 4.46249C30.4328 4.43244 30.3317 4.40679 30.2291 4.38627C30.1258 4.36575 30.0224 4.35036 29.9184 4.33937C29.8143 4.32911 29.7095 4.32398 29.6047 4.32398ZM21.6672 3.50612C21.6672 3.372 21.6804 3.23862 21.706 3.10671C21.7324 2.9748 21.7712 2.84655 21.8225 2.72269C21.8731 2.59811 21.9361 2.48012 22.0109 2.36873C22.0856 2.2566 22.1699 2.15327 22.2652 2.058C22.3597 1.96272 22.463 1.87771 22.5744 1.80296C22.6866 1.72821 22.8038 1.66519 22.9284 1.61389C23.0523 1.56259 23.1798 1.52375 23.3117 1.49736C23.4436 1.47098 23.5763 1.45779 23.7104 1.45779C23.8445 1.45779 23.9779 1.47098 24.109 1.49736C24.241 1.52375 24.3692 1.56259 24.4931 1.61389C24.6169 1.66519 24.7349 1.72821 24.8463 1.80296C24.9577 1.87771 25.061 1.96272 25.1563 2.058C25.2508 2.15327 25.3358 2.2566 25.4099 2.36873C25.4846 2.48012 25.5476 2.59811 25.5989 2.72269C25.6502 2.84655 25.6891 2.9748 25.7147 3.10671C25.7411 3.23862 25.7536 3.372 25.7536 3.50612V6.42288C25.7536 6.55772 25.7411 6.6911 25.7147 6.82301C25.6891 6.95493 25.6502 7.08244 25.5989 7.20703C25.5476 7.33088 25.4846 7.4496 25.4099 7.561C25.3358 7.67313 25.2508 7.77646 25.1563 7.87173C25.061 7.967 24.9577 8.05201 24.8463 8.12676C24.7349 8.20151 24.6169 8.26454 24.4931 8.31584C24.3692 8.36714 24.241 8.40598 24.109 8.43236C23.9779 8.45875 23.8445 8.47194 23.7104 8.47194C23.5763 8.47194 23.4436 8.45875 23.3117 8.43236C23.1798 8.40598 23.0523 8.36714 22.9284 8.31584C22.8038 8.26454 22.6866 8.20151 22.5744 8.12676C22.463 8.05201 22.3597 7.967 22.2652 7.87173C22.1699 7.77646 22.0856 7.67313 22.0109 7.561C21.9361 7.4496 21.8731 7.33088 21.8225 7.20703C21.7712 7.08244 21.7324 6.95493 21.706 6.82301C21.6804 6.6911 21.6672 6.55772 21.6672 6.42288V3.50612ZM31.5248 11.868H2.37771V7.52949C2.37771 7.40343 2.39017 7.27812 2.41435 7.15426C2.43927 7.03041 2.47591 6.91022 2.52428 6.7937C2.57192 6.67718 2.63128 6.56652 2.70163 6.46098C2.77125 6.35619 2.85113 6.25872 2.94054 6.16931C3.02922 6.08063 3.12669 6.00075 3.23148 5.9304C3.33628 5.86004 3.44694 5.80068 3.56347 5.75305C3.67999 5.70468 3.80018 5.66804 3.9233 5.64312C4.04715 5.61893 4.17174 5.60648 4.29779 5.60648H6.86644V6.42288C6.86644 6.53207 6.87157 6.64127 6.88183 6.74973C6.89282 6.85819 6.90895 6.96592 6.92947 7.07292C6.95072 7.17991 6.9771 7.28545 7.00862 7.39024C7.04013 7.49431 7.07677 7.59691 7.11854 7.69804C7.16032 7.79844 7.20649 7.89738 7.25779 7.99338C7.30909 8.08939 7.36552 8.18319 7.42561 8.27407C7.48644 8.36421 7.55093 8.45215 7.61982 8.53643C7.6887 8.62071 7.76199 8.70132 7.83894 8.77827C7.91589 8.85595 7.9965 8.92924 8.08078 8.99813C8.16506 9.06701 8.25227 9.13224 8.34241 9.19306C8.43328 9.25316 8.52636 9.30959 8.62236 9.36089C8.71836 9.41219 8.81657 9.45909 8.9177 9.50086C9.0181 9.54264 9.1207 9.57928 9.22477 9.61079C9.32883 9.6423 9.43436 9.66942 9.54136 9.69067C9.64762 9.71193 9.75535 9.72732 9.86382 9.73831C9.97228 9.7493 10.0807 9.75443 10.1899 9.75443C10.2984 9.75443 10.4076 9.7493 10.5161 9.73831C10.6238 9.72732 10.7315 9.71193 10.8385 9.69067C10.9455 9.66942 11.051 9.6423 11.1551 9.61079C11.2592 9.57928 11.3618 9.54264 11.4622 9.50086C11.5626 9.45909 11.6608 9.41219 11.7575 9.36089C11.8535 9.30959 11.9466 9.25316 12.0367 9.19306C12.1276 9.13224 12.2148 9.06701 12.2991 8.99813C12.3834 8.92924 12.464 8.85595 12.5409 8.77827C12.6179 8.70132 12.6904 8.62071 12.7601 8.53643C12.8289 8.45215 12.8934 8.36421 12.9543 8.27407C13.0144 8.18319 13.0701 8.08939 13.1214 7.99338C13.1727 7.89738 13.2196 7.79844 13.2613 7.69804C13.3024 7.59691 13.339 7.49431 13.3705 7.39024C13.402 7.28545 13.4284 7.17991 13.4497 7.07292C13.4709 6.96592 13.487 6.85819 13.4973 6.74973C13.5083 6.64127 13.5134 6.53207 13.5134 6.42288V5.60648H20.3898V6.42288C20.3898 6.53207 20.3949 6.64127 20.4052 6.74973C20.4162 6.85819 20.4316 6.96592 20.4528 7.07292C20.4741 7.17991 20.5005 7.28545 20.532 7.39024C20.5635 7.49431 20.6001 7.59691 20.6419 7.69804C20.6837 7.79844 20.7298 7.89738 20.7811 7.99338C20.8324 8.08939 20.8881 8.18319 20.949 8.27407C21.0091 8.36421 21.0743 8.45215 21.1432 8.53643C21.2121 8.62071 21.2854 8.70132 21.3623 8.77827C21.4393 8.85595 21.5199 8.92924 21.6041 8.99813C21.6877 9.06701 21.7756 9.13224 21.8658 9.19306C21.9566 9.25316 22.0497 9.30959 22.1457 9.36089C22.2417 9.41219 22.3399 9.45909 22.4403 9.50086C22.5415 9.54264 22.6433 9.57928 22.7481 9.61079C22.8522 9.6423 22.9577 9.66942 23.0647 9.69067C23.171 9.71193 23.2787 9.72732 23.3872 9.73831C23.4956 9.7493 23.6041 9.75443 23.7133 9.75443C23.8218 9.75443 23.9302 9.7493 24.0387 9.73831C24.1471 9.72732 24.2549 9.71193 24.3619 9.69067C24.4681 9.66942 24.5737 9.6423 24.6785 9.61079C24.7825 9.57928 24.8851 9.54264 24.9855 9.50086C25.0859 9.45909 25.1841 9.41219 25.2801 9.36089C25.3761 9.30959 25.4699 9.25316 25.5601 9.19306C25.651 9.13224 25.7382 9.06701 25.8225 8.99813C25.9067 8.92924 25.9866 8.85595 26.0636 8.77827C26.1412 8.70132 26.2138 8.62071 26.2827 8.53643C26.3523 8.45215 26.4168 8.36421 26.4769 8.27407C26.5377 8.18319 26.5934 8.08939 26.6447 7.99338C26.696 7.89738 26.7429 7.79844 26.784 7.69804C26.8257 7.59691 26.8624 7.49431 26.8939 7.39024C26.9254 7.28545 26.9518 7.17991 26.973 7.07292C26.9943 6.96592 27.0104 6.85819 27.0207 6.74973C27.0317 6.64127 27.0368 6.53207 27.0368 6.42288V5.60648H29.6047C29.7308 5.60648 29.8554 5.61893 29.9792 5.64312C30.1031 5.66804 30.2232 5.70468 30.3398 5.75305C30.4563 5.80068 30.567 5.86004 30.6717 5.9304C30.7765 6.00075 30.8733 6.08063 30.9627 6.16931C31.0521 6.25872 31.1312 6.35619 31.2016 6.46098C31.2712 6.56652 31.3306 6.67718 31.379 6.7937C31.4273 6.91022 31.4632 7.03041 31.4881 7.15426C31.5131 7.27812 31.5248 7.40343 31.5248 7.52949V11.868Z" fill="#A3CB03"/>
                </g>
            </svg>
        </HowItCards>
      </div>
    </div>
  )
}

function HowItCards({id, title, body, children}) {
    return (
        <div className='bg-white border border-black p-[14px] rounded-[20px] space-y-[10px]'>
            <div className='flex items-center justify-between'>
                <div className='h-[50px] w-[50px] rounded-full bg-[#FF9AE9] text-white font-miniature flex justify-center items-center text-[20px]'>{id}</div>
                {children}
            </div>

            <div className='space-y-[5px]'>
                <h3 className='text-black font-miniature text-[24px]'>{title}</h3>
                <p className='text-black text-[15px] leading-[20px]'>{body}</p>
            </div>
        </div>
    )
}

export default HowIt

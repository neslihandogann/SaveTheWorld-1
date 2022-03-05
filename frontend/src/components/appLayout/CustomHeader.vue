<template>
  <nav
    class="
      relative
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
      navbar-expand-lg
      bg-white
      mb-3
    "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="
          w-full
          relative
          flex
          justify-between
          lg:w-auto
          px-4
          lg:static lg:block lg:justify-start
        "
      >
        <a
          class="
            text-sm
            font-bold
            leading-relaxed
            inline-block
            mr-4
            py-2
            whitespace-no-wrap
            uppercase
          "
          id="no1"
          href="#enerjiSA"
        >
          Save The World
        </a>
        <button
          class="
            text-white
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            lg:hidden
            outline-none
            focus:outline-none
          "
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                hover:opacity-75
              "
              href="#enerjiSA"
            >
              <i
                class="fab fa-facebook-square text-lg leading-lg opacity-75"
              /><span class="ml-2">sherhsehrher</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link
              to="/class"
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                hover:opacity-75
              "
              href="#enerjiSA"
            >
              <i
                class="fab fa-twitter text-lg leading-lg text-white opacity-75"
              /><span class="ml-2">DERSLER</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                hover:opacity-75
              "
              href="#enerjiSA"
            >
              <i class="fab fa-pinterest text-lg leading-lg opacity-75" /><span
                class="ml-2"
                >METAVERSE</span
              >
            </a>
          </li>
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                hover:opacity-75
              "
              href="#enerjiSA"
            >
              <i class="fab fa-pinterest text-lg leading-lg opacity-75" /><span
                class="ml-2"
                >BLOG</span
              >
            </a>
          </li>
        </ul>
      </div>
      <div
        class="relative flex w-medium px-4 flex-wrap items-stretch lg:ml-auto"
      >
        <div class="flex">
          <span
            class="
              font-normal
              leading-snug
              flex
              text-center
              white-space-no-wrap
              text-sm
              bg-blueGray-100
              items-center
              rounded-r-none
              pl-2
              py-1
              text-blueGray-800
              border border-solid
              placeholder-blueGray-300
            "
            id="pad"
          >
            <i data-feather="search"></i>
          </span>
        </div>
        <input
          type="text"
          class="
            px-2
            py-1
            h-8
            text-sm
            leading-snug
            text-blueGray-700
            bg-blueGray-100
            shadow-none
            outline-none
            focus:outline-none
            w-full
            font-normal
            rounded-l-none
            flex-1
            border-l-0
            placeholder-blueGray-300
          "
          placeholder="Arama Yap"
          id="place"
        />
      </div>
      <small
        class="font-normal leading-normal mt-0 mb-4 text-emerald-800"
        id="orangeC"
      >
        12.5 🍊
      </small>
      <div id="myIcon">
        <svg
          width="50"
          height="51"
          viewBox="0 0 50 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_77_7860)">
            <g opacity="0.5">
              <path
                opacity="0.5"
                d="M25 50.5C38.8071 50.5 50 39.3071 50 25.5C50 11.6929 38.8071 0.5 25 0.5C11.1929 0.5 0 11.6929 0 25.5C0 39.3071 11.1929 50.5 25 50.5Z"
                fill="url(#paint0_linear_77_7860)"
              />
            </g>
            <path
              d="M25.0489 49.813C38.5649 49.813 49.5217 38.8562 49.5217 25.3402C49.5217 11.8243 38.5649 0.867432 25.0489 0.867432C11.533 0.867432 0.576172 11.8243 0.576172 25.3402C0.576172 38.8562 11.533 49.813 25.0489 49.813Z"
              fill="#F5F5F5"
            />
            <path
              d="M25.072 49.9098C29.8539 49.9175 34.5324 48.5174 38.524 45.884C37.6221 40.9556 34.1901 40.6748 34.1901 40.6748H15.2646C15.2646 40.6748 12.0261 40.9406 11.0146 45.4742C15.1299 48.369 20.0406 49.9184 25.072 49.9098V49.9098Z"
              fill="#6C63FF"
            />
            <path
              d="M24.8113 36.6369C31.3351 36.6369 36.6237 31.3483 36.6237 24.8245C36.6237 18.3008 31.3351 13.0122 24.8113 13.0122C18.2876 13.0122 12.999 18.3008 12.999 24.8245C12.999 31.3483 18.2876 36.6369 24.8113 36.6369Z"
              fill="#333333"
            />
            <path
              opacity="0.1"
              d="M20.999 34.6633H28.5678V40.7185C28.5678 41.7219 28.1693 42.6843 27.4599 43.394C26.7505 44.1036 25.7883 44.5025 24.7848 44.5029V44.5029C23.7812 44.5029 22.8186 44.1042 22.1089 43.3945C21.3992 42.6847 21.0005 41.7222 21.0005 40.7185V34.6633H20.999Z"
              fill="black"
            />
            <path
              d="M21.2395 34.3826H28.3312C28.3948 34.3826 28.4559 34.4079 28.5009 34.4529C28.5459 34.4979 28.5712 34.5589 28.5712 34.6225V40.4377C28.5713 40.9349 28.4734 41.4272 28.2832 41.8865C28.0929 42.3458 27.8141 42.7631 27.4625 43.1147C27.1109 43.4662 26.6935 43.745 26.2342 43.9351C25.7748 44.1252 25.2825 44.223 24.7854 44.2228V44.2228C23.7817 44.2228 22.8191 43.8241 22.1094 43.1144C21.3997 42.4047 21.001 41.4421 21.001 40.4384V34.6225C21.001 34.5591 21.0261 34.4983 21.0708 34.4534C21.1154 34.4084 21.1761 34.3829 21.2395 34.3826V34.3826Z"
              fill="#FDB797"
            />
            <path
              opacity="0.1"
              d="M21.0127 37.5215C23.452 38.4329 26.1372 38.4403 28.5815 37.5423V36.6111H21.0127V37.5215Z"
              fill="black"
            />
            <path
              d="M24.8117 38.028C30.8034 38.028 35.6606 33.1708 35.6606 27.1792C35.6606 21.1875 30.8034 16.3303 24.8117 16.3303C18.8201 16.3303 13.9629 21.1875 13.9629 27.1792C13.9629 33.1708 18.8201 38.028 24.8117 38.028Z"
              fill="#FDB797"
            />
            <path
              opacity="0.1"
              d="M17.084 17.3108C17.084 17.3108 21.6563 26.5916 34.5539 21.2019L31.551 16.4935L26.228 14.583L17.084 17.3108Z"
              fill="black"
            />
            <path
              d="M17.084 17.1748C17.084 17.1748 21.6563 26.4556 34.5539 21.0645L31.551 16.356L26.228 14.4456L17.084 17.1748Z"
              fill="#333333"
            />
            <path
              d="M17.0439 16.546C17.3522 15.5916 17.885 14.7252 18.5976 14.0195C20.7315 11.9099 24.2301 11.465 26.0245 9.05957C26.4543 9.72719 26.1219 10.7537 25.3798 11.0402C27.099 11.0288 29.0911 10.8783 30.0632 9.4643C30.3034 10.0236 30.38 10.6395 30.284 11.2406C30.188 11.8416 29.9234 12.4031 29.5209 12.8597C31.0446 12.9313 32.6728 13.9629 32.7688 15.4851C32.8347 16.4994 32.1957 17.4593 31.3655 18.0409C30.5353 18.6226 29.5238 18.8898 28.5317 19.1083C25.6348 19.748 15.1535 22.4249 17.0439 16.546Z"
              fill="#333333"
            />
            <path
              d="M13.9585 29.0617C14.516 29.0617 14.9678 28.2144 14.9678 27.1692C14.9678 26.1239 14.516 25.2766 13.9585 25.2766C13.4011 25.2766 12.9492 26.1239 12.9492 27.1692C12.9492 28.2144 13.4011 29.0617 13.9585 29.0617Z"
              fill="#FDB797"
            />
            <path
              d="M35.6587 29.0617C36.2162 29.0617 36.668 28.2144 36.668 27.1692C36.668 26.1239 36.2162 25.2766 35.6587 25.2766C35.1013 25.2766 34.6494 26.1239 34.6494 27.1692C34.6494 28.2144 35.1013 29.0617 35.6587 29.0617Z"
              fill="#FDB797"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_77_7860"
              x1="25"
              y1="50.5"
              x2="25"
              y2="0.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#808080" stop-opacity="0.25" />
              <stop offset="0.54" stop-color="#808080" stop-opacity="0.12" />
              <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
            </linearGradient>
            <clipPath id="clip0_77_7860">
              <rect
                width="50"
                height="50"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
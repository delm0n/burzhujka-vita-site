<template>
  <div
    class="header-top"
    :class="{ 'header-top--scroll': scroll || path != 'main' }"
  >
    <div class="header-top__line">
      <div class="container">
        <div class="header-top__wrap">
          <router-link class="header-top__logo" to="/">
            <picture>
              <source
                srcset="build/images/logo.webp"
                width="60px"
                media="(max-width: 576px)"
                type="image/webp"
              />
              <source
                srcset="build/images/logo.png"
                width="60px"
                media="(max-width: 576px)"
                type="image/png"
              />
              <source srcset="build/images/logo.webp" type="image/webp" />
              <img src="build/images/logo.png" alt="Логотип Helicon" />
            </picture>
            <p>
              Официальный сайт <br />
              завода производителя
            </p>
          </router-link>

          <div v-if="!(path != 'main')" class="header-top__nav">
            <ul
              ref="menu"
              class="menu-list"
              v-bind:class="{ 'menu-list--open': burger }"
            >
              <li v-for="(item, index) in navigations" v-bind:key="index">
                <p
                  v-on:click="scrollToSection(item.selector)"
                  v-text="item.name"
                ></p>
              </li>
            </ul>
          </div>

          <div class="header-top__contact">
            <a href="tel:88002505932" class="header-top__contact-phone"
              >8 800 250 59 32</a
            >

            <div
              v-if="!(path != 'main')"
              class="header-top__contact-button"
              @click="openModalCall()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_1908_883"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1908_883)">
                  <path
                    d="M19.95 21C17.8 21 15.7042 20.5208 13.6625 19.5625C11.6208 18.6042 9.8125 17.3375 8.2375 15.7625C6.6625 14.1875 5.39583 12.3792 4.4375 10.3375C3.47917 8.29583 3 6.2 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.075 8.725 3.225C8.90833 3.375 9.01667 3.56667 9.05 3.8L9.7 7.3C9.73333 7.53333 9.72917 7.74583 9.6875 7.9375C9.64583 8.12917 9.55 8.3 9.4 8.45L6.975 10.9C7.675 12.1 8.55417 13.225 9.6125 14.275C10.6708 15.325 11.8333 16.2333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15 20.625 15.1125 20.775 15.2875C20.925 15.4625 21 15.6667 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2875 18.4583 16.9625 18.625C17.6375 18.7917 18.3167 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z"
                    fill="white"
                  />
                </g>
              </svg>
              <span>Заказать звонок</span>
            </div>

            <div
              v-if="!(path != 'main')"
              class="burger-container"
              :class="{ 'burger-container--open': burger }"
              @click="burger = !burger"
            >
              <div class="burger" v-bind:class="{ 'burger--open': burger }">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scroll: false,
      burger: false,
      navigations: [
        {
          name: "Преимущества",
          selector: "#characteristic",
        },

        {
          name: "Гарантии",
          selector: "#made",
        },

        {
          name: "Доставка",
          selector: "#delivery",
        },

        {
          name: "Отзывы",
          selector: "#feedback",
        },

        // {
        //   name: "Инструкция",
        //   selector: "#test",
        // },
      ],
    };
  },
  props: {
    path: {
      type: String,
      default: "main",
    },
  },
  created() {
    window.addEventListener("scroll", () => {
      this.scroll = window.pageYOffset < 30 ? false : true;
    });
  },

  methods: {
    scrollToSection(selector) {
      this.gsap.to(window, {
        duration: 1.5,
        // добавить в +
        scrollTo: { y: selector },

        // scrollTo:
        //   document.querySelector(selector).offsetTop -
        //   document.querySelector(selector).offsetHeight,
      });
      this.burger = false;
    },

    openModalCall() {
      setTimeout(() => {
        //@ts-ignore
        Fancybox.show([
          {
            src: "#modal-call",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.header-top {
  position: fixed;
  background-color: transparentize($gray, 1);
  width: 100%;
  box-shadow: 0 7px 9px 1px rgba(0, 0, 0, 0);
  transition: all 0.4s ease-in-out;
  padding: 0 20px;
  z-index: 20;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 576px) {
    padding: 0 10px;
  }

  .container {
    max-width: calc(1590px + 10px * 2);
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 992px) {
      max-width: calc(1590px + 10px * 2);
    }

    @media (max-width: 576px) {
      padding: 0 10px;
    }
  }

  &--scroll {
    background-color: $gray;
    box-shadow: 0 7px 9px 1px transparentize($gray, 0.7);

    .header-top__line {
      border-bottom: 1px solid transparentize($gray, 1);
    }
  }

  &__line {
    transition: all 0.4s ease-in-out 0.2s;
    max-width: calc(1764px + 20px * 2);
    border-bottom: 1px solid #fff;
    margin: 0 auto;

    .container {
      padding: 0;
    }
  }

  &__wrap {
    @include flex-center-x(16px);
    justify-content: space-between;
    height: 90px;

    @media (max-width: 576px) {
      height: 60px;
    }
  }

  &__logo {
    @include flex-center-x(30px);
    cursor: pointer;

    p {
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #fff;

      @media (max-width: 576px) {
        display: none;
      }
    }
  }

  &__contact {
    @include flex-center-x(30px);

    @media (max-width: 1280px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      gap: 14px;
    }

    &-phone {
      display: block;
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 29px;
      color: #fff;
      white-space: nowrap;
      transition: all 0.4s;

      &:hover {
        color: #e2bc85;
      }

      @media (max-width: 1366px) {
        display: none;
      }
    }

    &-button {
      cursor: pointer;
      @include flex-center-x(18px);
      height: 44px;
      width: 194px;
      justify-content: center;
      border: 1px solid #fff;
      border-radius: 22px;

      @media (max-width: 768px) {
        width: 44px;
      }

      @media (max-width: 576px) {
        width: 36px;
        height: 36px;
      }

      span {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #fff;
        white-space: nowrap;

        @media (max-width: 768px) {
          display: none;
        }
      }

      transition: all 0.3s;
      box-shadow: 0 10px 30px transparentize(#fff, 1);

      svg g path,
      span {
        transition: all 0.3s;
      }

      &:hover,
      &:focus {
        background: $main;
        transform: translateY(-1px) scale(1.03);
        border: 1px solid $main;
        box-shadow: 0 10px 30px transparentize($main, 0.78);

        svg g path,
        span {
          // fill: $gray;
          color: #fff;
        }
      }

      &:active {
        transform: translateY(1px);
      }
    }
  }

  &__nav {
    .menu-list {
      @include flex-center-x(35px);

      @media (max-width: 1280px) {
        flex-direction: column;
        align-items: start;
        gap: 10px;
        position: absolute;
        top: 0;
        z-index: 10;
        background: #fff;
        width: 280px;
        box-sizing: border-box;
        padding: 65px 20px 20px;
        right: 10px;
        transform: translateY(-100%);
        opacity: 0;
        transition: transform 0.45s 0.1s, opacity 0.25s;
      }

      @media (max-width: 576px) {
        top: -5px;
        right: 5px;
      }

      &--open {
        transform: translateY(10px);
        opacity: 1;
        transition: transform 0.4s, opacity 0.3s 0.2s;
      }

      li {
        p {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 18px;
          color: #fff;
          transition: all 0.4s;
          cursor: pointer;

          &:hover {
            color: #e2bc85;
          }

          @media (max-width: 1280px) {
            color: $gray;
            padding: 5px 0;
            font-size: 18px;
          }
        }
      }
    }
  }

  .burger {
    &-container {
      @media (min-width: 1281px) {
        display: none;
      }

      display: block;
      height: 44px;
      width: 44px;
      border-radius: 22px;
      border: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 20;
      transition: all 0.3s;

      @media (max-width: 576px) {
        width: 36px;
        height: 36px;
      }

      &:hover,
      &:focus {
        transform: translateY(-1px) scale(1.03);
      }

      &:active {
        transform: translateY(1px);
      }

      &--open {
        border: 1px solid $gray;
      }
    }

    position: relative;
    width: 40px;
    height: 14px;

    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      border-radius: 0;
      background-color: #fff;
      transition: 0.4s all;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(4) {
        top: 100%;
        transform: translateX(-50%) translateY(-50%);
      }
    }

    &--open {
      span {
        background-color: $gray;
        &:nth-child(1) {
          transition: 0.2s all;
          opacity: 0;
        }

        &:nth-child(2) {
          transform: translateX(-50%) translateY(-50%) rotate(45deg);

          @media (max-width: 479px) {
            width: 24px;
          }
        }

        &:nth-child(3) {
          transform: translateX(-50%) translateY(-50%) rotate(-45deg);

          @media (max-width: 479px) {
            width: 24px;
          }
        }

        &:nth-child(4) {
          transition: 0.2s all;
          opacity: 0;
        }
      }
    }
  }
}
</style>

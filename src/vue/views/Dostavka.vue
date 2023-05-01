<template>
  <div class="page__body page-dostavka">
    <main>
      <section class="section-hero">
        <div class="content-container section-hero__container">
          <div class="text-center-container">
            <h1>
              Печи - буржуйки
              <span class="block">
                <span class="quotes">«</span> &nbsp;<span class="title"
                  >VITA</span
                ><br />
                &nbsp;<span class="quotes">»</span></span
              >
              от&nbsp;производителя
            </h1>
          </div>
        </div>
      </section>
      <DostavkaBlock />
    </main>
    <Delivery />
    <FAQ />
    <Questions />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    DostavkaBlock: defineAsyncComponent(() =>
      import("../components/DostavkaBlock.vue")
    ),
    Delivery: defineAsyncComponent(() => import("../components/Delivery.vue")),
    Questions: defineAsyncComponent(() =>
      import("../components/Questions.vue")
    ),
    FAQ: defineAsyncComponent(() => import("../components/FAQ.vue")),
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_main.scss";
@import "../../scss/_global.scss";

@include robotoFont("../../..");
@include phuduFont("../../..");
@include plexFont("../../..");

.page-dostavka {
  form {
    max-width: 520px;
  }

  h1 {
    .block {
      display: inline-flex;
      align-items: center;
    }
    .quotes {
      font-weight: 500;
      font-family: "Roboto";
      font-size: 40px;
      line-height: 115%;

      @media (max-width: 576px) {
        font-size: 17px;
      }
    }

    .title {
      font-family: "Phudu";
      font-style: normal;
      font-weight: 700;
      font-size: 100px;
      line-height: 67px;
      margin-bottom: 30px;

      @media (max-width: 992px) {
        font-size: 50px;
        margin-bottom: 0;
      }

      @media (max-width: 576px) {
        font-size: 24px;
        margin-bottom: 0;
        line-height: 115%;
      }
    }
    color: #2b2b2b;
    font-weight: 700;
    font-size: 70px;
    line-height: 90% !important;
    text-align: center;
    @media (max-width: 992px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      font-size: 24px;
    }
  }

  background-color: #fff;
  font-family: "GothaProReg", Arial, sans-serif;
  font-size: 14px;
  line-height: normal;
  color: #000000;
  padding: 0;
  margin: 0;

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
  ul,
  ol {
    list-style: none;
  }

  .text-center-container {
    margin: 0 auto;
    max-width: 1150px;
    width: 100%;
  }

  //Стили с основных(style.css)
  .section-send__form {
    @media (max-width: 992px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  .content-container {
    width: 100%;
    max-width: 1170px;
    height: auto;
    margin: 0 auto;

    @media (max-width: 1279px) {
      max-width: 950px;
    }

    @media (max-width: 979px) {
      max-width: 750px;
    }

    @media (max-width: 767px) {
      width: 90%;
    }

    @media (max-width: 479px) {
      min-width: 300px;
    }
  }

  .columns {
    display: inline-block;
    float: none;
    width: 100%;
  }

  .main-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 55px;
    padding: 15px 24px;
    width: auto;
    height: 55px;
    border-radius: 3px;
    box-shadow: 3px 5px 9px 0 rgb(0 0 0 / 30%);
    text-decoration: none;
    text-shadow: none;
    border: none;
    font-family: "CenturyGothic-Bold";
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    background: #ffc600;
    color: #1d2126;
    cursor: pointer;
    transition: 0.4s all;

    &:hover {
      background: #e2bc85;
      color: #ffffff;
    }
  }

  //Header
  .header {
    padding: 45px 0 20px;
    background: #ffffff;

    @media (max-width: 1199px) {
      height: auto;
    }

    @media (max-width: 991px) {
      padding: 18px 0 0;
    }
  }

  .header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      margin-bottom: 10px;
    }
  }

  .logo {
    display: flex;
    align-items: center;

    @media (max-width: 1549px) {
      flex-direction: row;
    }

    @media (max-width: 479px) {
    }
  }
  .logo p {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #323232;
    padding: 4px 0;
    margin-bottom: 0;
    margin-left: 25px;
    margin-top: 0;

    @media (max-width: 767px) {
      margin-left: 18px;
    }

    @media (max-width: 576px) {
      display: none;
    }
  }

  .logo svg {
    @media (max-width: 576px) {
      width: 75px;
    }
  }

  .phone-block .phone {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 39px;
    /* identical to box height */

    color: #323232;
    transition: 0.3s all;

    @media (max-width: 576px) {
      font-size: 20px;
      line-height: 26px;
    }

    &:hover {
      color: #e2bc85;
    }
  }

  .breadcrumbs {
    margin-bottom: 10px;
    display: flex;
    font-family: inherit;
    font-size: 14px;
    line-height: 14px;
    color: #cecece;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    padding-left: 0;
  }
  .breadcrumbs li {
    &:not(:first-child) {
      padding-left: 8px;
    }

    a {
      color: #cecece;
      padding-right: 5px;
      transition: 0.3s all;

      &:hover {
        color: #e2bc85;
      }
    }
  }

  /*Section-hero*/
  .section-hero {
    font-family: "Roboto";
    padding-top: 70px;
    padding-bottom: 50px;

    @media (max-width: 767px) {
      padding-top: 50px;
      padding-bottom: 30px;
    }
  }
  .section-hero__heading {
    font-size: 65px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 70px 0;

    @media (max-width: 767px) {
      font-size: 26px;
      margin-bottom: 30px;
    }
  }
  .section-hero__description:not(:last-child) {
    line-height: 22px;
    margin-bottom: 20px;
  }
  .section-hero__list {
    margin-bottom: 20px;
    margin-top: 0;
  }
  .section-hero__item:not(:last-child) {
    margin-bottom: 7px;
  }
  .section-hero__item {
    position: relative;
    padding-left: 28px;
  }
  .section-hero__item::before {
    content: "✓";
    color: #e2bc85;
    width: 16px;
    height: 16px;
    display: block;
    position: absolute;
    left: 0;
    top: 0px;
  }

  #header {
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 10;
  }

  #header .header-block .content-container {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    #header .header-block {
      margin-bottom: 10px;
    }

    .header__content {
      gap: 5px !important;
    }
  }

  main {
    padding-top: 110px;
  }

  @media (max-width: 992px) {
    main {
      padding-top: 90px;
    }
  }

  @media (max-width: 576px) {
    main {
      padding-top: 50px;
    }
  }
}
</style>

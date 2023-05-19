<template>
  <main>
    <section class="section-hero">
      <div class="content-container section-hero__container">
        <div class="text-center-container">
          <h1>
            Купить печь - буржуйку <br />
            <span class="block">
              <span class="quotes">«</span> &nbsp;<span class="title"
                >VITA</span
              >
              &nbsp;<span class="quotes">»</span></span
            >
            оптом
          </h1>
          <p class="section-hero__description">
            Печи Буржуйка популярны в розничных точках продаж и
            интернет-магазинах.
          </p>
          <ul class="section-hero__list">
            <li class="section-hero__item">
              Их стоимость привлекательна для конечного покупателя.
            </li>
            <li class="section-hero__item">
              Бренд известен целевой аудитории по рекламе.
            </li>
            <li class="section-hero__item">
              Качество документально подтверждается гарантией производителя.
            </li>
          </ul>
          <p class="section-hero__description">
            Всё это гарантирует стабильные продажи продукции. А скидки и гибкие
            условия отгрузок придутся по душе оптовикам и бизнесменам.
          </p>
          <p class="section-hero__description">
            Оставьте заявку, и мы перезвоним вам, чтобы договориться об условиях
            сотрудничества.
          </p>
        </div>
      </div>
    </section>
    <section class="opt-form">
      <div class="container">
        <div class="opt-form__wrapper">
          <div class="opt-form__img">
            <picture>
              <source
                type="image/webp"
                srcset="static/opt/x05/opt-img.webp"
                media="(max-width:768px)"
              />
              <source
                type="image/webp"
                srcset="static/opt/x05/opt-img.png"
                media="(max-width:768px)"
              />
              <source type="image/webp" srcset="static/opt/opt-img.webp" />
              <img src="static/opt/opt-img.png" alt="opt" />
            </picture>
          </div>

          <div class="opt-form__line">
            <div class="line"></div>
          </div>

          <div class="opt-form__form" id="opt-form">
            <form class="section-send__form">
              <div class="user-info">
                <input
                  autocomplete="off"
                  class="vita-input"
                  name="name"
                  placeholder="Ваше имя"
                  type="text"
                  required
                />
                <input
                  autocomplete="off"
                  class="vita-input"
                  name="phone"
                  placeholder="Ваш телефон"
                  type="text"
                  required
                />
                <input
                  autocomplete="off"
                  class="vita-input"
                  name="email"
                  placeholder="Ваш e-mail"
                  type="email"
                  required
                />
                <input
                  autocomplete="off"
                  class="vita-input"
                  name="city"
                  placeholder="Ваш город"
                  type="text"
                />
                <textarea
                  class="vita-input"
                  placeholder="Дополнительные сведения"
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" class="button">
                <span class="button-background"></span>
                <span class="button-text">Отправить запрос</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "../../scss/_global.scss";

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
  }
  margin-bottom: 80px;
  color: #2b2b2b;
  font-weight: 700;
  font-size: 70px;
  line-height: 115%;
  text-align: center;
  @media (max-width: 992px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
}

.opt-body {
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
    padding-bottom: 120px;

    @media (max-width: 767px) {
      padding-bottom: 55px;
      padding-top: 32px;
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
}

@media (max-width: 767px) {
  .opt-body .header__content {
    gap: 5px !important;
  }
}

main {
  padding-top: 200px;
}

@media (max-width: 992px) {
  main {
    padding-top: 150px;
  }
}

@media (max-width: 576px) {
  main {
    padding-top: 100px;
  }
}
form {
  max-width: 520px;
}
.opt-form {
  @extend %indent-p;

  .button {
    @extend %button;
    margin: 30px auto 0;

    @media (max-width: 992px) {
      margin: 24px auto 0;
    }

    @media (max-width: 576px) {
      .button-text {
        font-size: 10px;
      }
    }
  }

  .user-info {
    display: flex;
    max-width: 520px;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 992px) {
      margin: 5px auto 0;
    }
  }

  &__line {
    grid-row: 1/3;
    grid-column: 2/3;

    @media (max-width: 992px) {
      grid-row: 2/3;
      grid-column: 1/2;
      margin: 5px auto;
    }

    .line {
      height: 100%;
      background: #cecece;
      @media (max-width: 992px) {
        height: 2px;
      }
    }

    height: 100%;
    width: 100%;
  }

  &__img {
    grid-row: 1/3;
    grid-column: 1/2;

    @media (max-width: 992px) {
      grid-row: 1/2;
      grid-column: 1/2;
      height: 100%;
    }

    img {
      width: 100%;

      @media (max-width: 992px) {
        max-height: 100%;
        max-width: 100%;
        width: auto;
        display: block;
        margin: 0 auto;
      }
    }
  }
}

.opt-form__wrapper {
  @extend %shadow-block;

  padding: 70px;

  @media (max-width: 1366px) {
    padding: 40px;
  }

  @media (max-width: 1280px) {
    padding: 30px;
  }

  @media (max-width: 992px) {
    padding: 34px 34px;
  }

  @media (max-width: 576px) {
    padding: 24px 14px;
  }

  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 50px;

  @media (max-width: 1366px) {
    column-gap: 40px;
  }

  @media (max-width: 1280px) {
    align-items: center;
    column-gap: 30px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1px auto;
    gap: 32px;
    @include mobileContent();
    max-width: none;
  }

  @media (max-width: 576px) {
    grid-template-rows: auto 1px auto;
    gap: 16px;
  }
}
</style>

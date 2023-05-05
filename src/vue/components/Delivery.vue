<template>
  <section id="delivery">
    <div class="container">
      <div class="title">
        <h2>Доставка в любую точку&nbsp;России</h2>
        <p>
          Заберите заказ в ближайшем пункте выдачи,
          или&nbsp;мы&nbsp;доставим&nbsp;до&nbsp;двери
        </p>
      </div>

      <div class="delivery-wrapper">
        <div class="delivery-wrapper__form">
          <delivery-form />
        </div>

        <div class="delivery-wrapper__features">
          <div
            v-for="(feat, index) in features"
            :key="index"
            class="features-item"
          >
            <div class="features-item__svg" v-html="feat.svg"></div>
            <div class="features-item__line">
              <div class="gorizontal-line"></div>
            </div>
            <div class="features-item__content">
              <h4 v-html="feat.title"></h4>
              <p v-html="feat.text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DeliveryForm from "./DeliveryForm.vue";

export default defineComponent({
  data() {
    return {
      features: [
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <mask id="mask0_1908_414" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                        <rect width="100" height="100" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_1908_414)">
                        <path d="M23.3332 83.229C19.9304 83.229 17.0311 82.0311 14.6353 79.6353C12.2394 77.2394 11.0415 74.3401 11.0415 70.9373H4.1665V22.9165C4.1665 21.2498 4.7915 19.7915 6.0415 18.5415C7.2915 17.2915 8.74984 16.6665 10.4165 16.6665H70.729V34.0623H81.6665L95.8332 52.9165V70.9373H88.4373C88.4373 74.3401 87.2394 77.2394 84.8436 79.6353C82.4477 82.0311 79.5484 83.229 76.1457 83.229C72.7429 83.229 69.8436 82.0311 67.4478 79.6353C65.0519 77.2394 63.854 74.3401 63.854 70.9373H35.6248C35.6248 74.3401 34.4269 77.2394 32.0311 79.6353C29.6353 82.0311 26.7359 83.229 23.3332 83.229ZM23.3332 76.979C24.9998 76.979 26.4234 76.3887 27.604 75.2082C28.7846 74.0276 29.3748 72.604 29.3748 70.9373C29.3748 69.2707 28.7846 67.8471 27.604 66.6665C26.4234 65.4859 24.9998 64.8957 23.3332 64.8957C21.6665 64.8957 20.2429 65.4859 19.0623 66.6665C17.8818 67.8471 17.2915 69.2707 17.2915 70.9373C17.2915 72.604 17.8818 74.0276 19.0623 75.2082C20.2429 76.3887 21.6665 76.979 23.3332 76.979ZM10.4165 64.6873H12.7082C13.8887 62.8123 15.3818 61.3193 17.1873 60.2082C18.9929 59.0971 21.0068 58.5415 23.229 58.5415C25.4512 58.5415 27.4825 59.1144 29.3228 60.2603C31.163 61.4061 32.6734 62.8818 33.854 64.6873H64.479V22.9165H10.4165V64.6873ZM76.1457 76.979C77.8123 76.979 79.2359 76.3887 80.4165 75.2082C81.5971 74.0276 82.1873 72.604 82.1873 70.9373C82.1873 69.2707 81.5971 67.8471 80.4165 66.6665C79.2359 65.4859 77.8123 64.8957 76.1457 64.8957C74.479 64.8957 73.0554 65.4859 71.8748 66.6665C70.6943 67.8471 70.104 69.2707 70.104 70.9373C70.104 72.604 70.6943 74.0276 71.8748 75.2082C73.0554 76.3887 74.479 76.979 76.1457 76.979ZM70.729 55.729H90.104L78.5415 40.3123H70.729V55.729Z" fill="#1C1B1F"/>
                    </g>
                </svg>`,
          title: "От 2 до 7 дней",
          text: "Быстрая доставка <br> курьером по РФ.",
        },

        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <mask id="mask0_1908_425" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                        <rect width="100" height="100" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_1908_425)">
                        <path d="M67.9167 56.6667C69.6528 56.6667 71.1979 55.9896 72.5521 54.6354C73.9063 53.2812 74.5833 51.7014 74.5833 49.8958C74.5833 48.1597 73.9063 46.6319 72.5521 45.3125C71.1979 43.9931 69.6528 43.3333 67.9167 43.3333C66.1806 43.3333 64.6354 43.9931 63.2813 45.3125C61.9271 46.6319 61.25 48.1597 61.25 49.8958C61.25 51.7014 61.9271 53.2812 63.2813 54.6354C64.6354 55.9896 66.1806 56.6667 67.9167 56.6667ZM18.75 87.5C17.1528 87.5 15.7118 86.875 14.4271 85.625C13.1424 84.375 12.5 82.9167 12.5 81.25V18.75C12.5 17.1528 13.1424 15.7118 14.4271 14.4271C15.7118 13.1424 17.1528 12.5 18.75 12.5H81.25C82.9167 12.5 84.375 13.1424 85.625 14.4271C86.875 15.7118 87.5 17.1528 87.5 18.75V32.7083H81.25V18.75H18.75V81.25H81.25V67.3958H87.5V81.25C87.5 82.9167 86.875 84.375 85.625 85.625C84.375 86.875 82.9167 87.5 81.25 87.5H18.75ZM56.0417 69.4792C53.6806 69.4792 51.8056 68.7847 50.4167 67.3958C49.0278 66.0069 48.3333 64.1667 48.3333 61.875V38.2292C48.3333 35.8681 49.0278 34.0104 50.4167 32.6562C51.8056 31.3021 53.6806 30.625 56.0417 30.625H84.1667C86.5278 30.625 88.4028 31.3021 89.7917 32.6562C91.1806 34.0104 91.875 35.8681 91.875 38.2292V61.875C91.875 64.1667 91.1806 66.0069 89.7917 67.3958C88.4028 68.7847 86.5278 69.4792 84.1667 69.4792H56.0417ZM85.625 63.2292V36.875H54.5833V63.2292H85.625Z" fill="#1C1B1F"/>
                    </g>
                </svg>`,
          title: "Оплата при <br> получении",
          text: "Убедитесь в качестве <br> товара на месте.",
        },

        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <mask id="mask0_1908_436" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                        <rect width="100" height="100" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_1908_436)">
                        <path d="M28.8542 70.9375H57.5V64.6875H28.8542V70.9375ZM28.8542 53.125H71.1458V46.875H28.8542V53.125ZM28.8542 35.3125H71.1458V29.0625H28.8542V35.3125ZM18.75 87.5C17.0833 87.5 15.625 86.875 14.375 85.625C13.125 84.375 12.5 82.9167 12.5 81.25V18.75C12.5 17.0833 13.125 15.625 14.375 14.375C15.625 13.125 17.0833 12.5 18.75 12.5H81.25C82.9167 12.5 84.375 13.125 85.625 14.375C86.875 15.625 87.5 17.0833 87.5 18.75V81.25C87.5 82.9167 86.875 84.375 85.625 85.625C84.375 86.875 82.9167 87.5 81.25 87.5H18.75ZM18.75 81.25H81.25V18.75H18.75V81.25Z" fill="#1C1B1F"/>
                    </g>
                </svg>`,
          title: "Гарантия 1 год",
          text: "Сервисные центры <br> по всей России.",
        },
      ],
    };
  },
  components: {
    DeliveryForm,
  },
});
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#delivery {
  @extend %indent-p;

  .delivery-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;

    @media (max-width: 1440px) {
      gap: 20px;
    }

    @media (max-width: 1280px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    @media (max-width: 425px) {
      gap: 18px;
    }

    &__form {
      max-width: 520px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: 768px) {
        max-width: 425px;
      }
    }

    &__features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      column-gap: 30px;

      @media (max-width: 1440px) {
        gap: 20px;
      }

      @media (max-width: 1280px) {
        max-width: max-content;
        margin: 0 auto;
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        width: 100%;
        max-width: 330px;
      }

      @media (max-width: 576px) {
        gap: 10px;
      }

      .features-item {
        @extend %shadow-block;
        display: flex;
        flex: 1 1 0;
        max-width: 330px;
        flex-direction: column;
        gap: 30px;
        padding: 30px 20px 45px;

        @media (max-width: 1280px) {
          max-width: 260px;
          gap: 25px;
        }

        @media (max-width: 992px) {
          padding: 24px 10px 45px;
        }

        @media (max-width: 768px) {
          flex-direction: row;
          align-items: center;
          padding: 24px;
          width: 100%;
          max-width: 100%;
        }

        @media (max-width: 576px) {
          padding: 24px 14px;
          padding-left: 7%;
          gap: 18px;
        }

        &__svg {
          @media (max-width: 768px) {
            flex-shrink: 0;
          }
          svg {
            display: block;
            margin: 0 auto;

            @media (max-width: 1440px) {
              width: 80px;
            }

            @media (max-width: 1280px) {
              width: 70px;
            }

            @media (max-width: 768px) {
              width: 50px;
            }
          }
        }

        &__line {
          @media (max-width: 768px) {
            height: 100%;
          }
          .gorizontal-line {
            @media (max-width: 992px) {
              width: 90%;
              margin: 0 auto;
            }

            @media (max-width: 768px) {
              height: 100%;
              width: 2px;
            }
          }
        }

        &__content {
          h4 {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 27px;
            text-align: center;
            color: $gray;
            margin-bottom: 14px;
            white-space: nowrap;

            br {
              display: none;
            }

            @include fluidFontSize(18, 22, 993, 1920);

            @media (max-width: 768px) {
              font-size: 18px;
              line-height: 20px;
              margin-bottom: 8px;
              text-align: left;

              br {
                display: block;
              }
            }
          }

          p {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: $gray;
            white-space: nowrap;

            @include fluidFontSize(16, 20, 993, 1920);

            @media (max-width: 768px) {
              font-size: 14px;
              text-align: left;

              line-height: 17px;
            }
          }
        }
      }
    }
  }
}
</style>

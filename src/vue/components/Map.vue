<template>
  <section id="map">
    <div class="container">
      <div class="title">
        <h2>
          Магазины «Градус Хаус» — теперь и сервисные центры. В&nbsp;наших
          магазинах вы&nbsp;сможете:
        </h2>
      </div>
      <div class="list-box">
        <ul class="list-box__list list-box__list_1">
          <li v-for="(li, idx) in list1" :key="idx" v-html="li"></li>
        </ul>
        <ul class="list-box__list list-box__list_2">
          <li v-for="(li, idx) in list2" :key="idx" v-html="li"></li>
        </ul>
      </div>
    </div>
    <div class="content-container_map">
      <div id="shop-map" class="map-item"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      list1: [
        "Сдать товар по гарантии, оформить возврат или обмен без бюрократии",
        "Оформить заявку на самовывоз и забрать товар, который купили в нашем интернет-магазине",
      ],
      list2: [
        "Купить товары для самогоноварения, консервирования и копчения",
        "Оформить скидочную карту",
        "Получить консультацию продавца",
      ],
    };
  },
  mounted() {
    this.gsap.timeline({
      delay: 4,
      scrollTrigger: {
        once: true,
        trigger: "#map",
        start: "-60% bottom",
        onEnter: this.getShops,
        onEnterBack: this.getShops,
      },
    });
  },

  methods: {
    async getShops() {
      let citiesJSON = JSON.parse(
        '[\n    {\n        "city": "\u041c\u043e\u0441\u043a\u0432\u0430",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u042d\u043a\u0441\u0442\u0440\u0438\u043c\u00bb",\n                "address": "\u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u0421\u043c\u043e\u043b\u044c\u043d\u0430\u044f 63\u0411, 2 \u044d\u0442\u0430\u0436 (\u0443 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u00ab\u042d\u043a\u0441\u0442\u0440\u0438\u043c\u00bb-\u00ab\u0412\u043e\u0434\u043d\u044b\u0439 \u041c\u0438\u0440\u00bb)",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-20:00"],\n                "phones": ["8 (499) 390-43-45", "8 (929) 517-10-77"],\n                "coords": [55.870112, 37.469808],\n                "zoom": 16\n            },\n            {\n                "name": "\u0422\u0426 \u00ab\u041c\u043e\u0441\u0442\u00bb",\n                "address": "\u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u041b\u044e\u0431\u043b\u0438\u043d\u0441\u043a\u0430\u044f 4\u043a1\u0410",\n                "hours": ["\u043f\u043d-\u0432\u0441: 09:00-20:00"],\n                "phones": ["8 (926) 372-19-90"],\n                "coords": [55.708242, 37.730670],\n                "zoom": 16\n            },\n            {\n                "name": "\u0422\u0426 \u00ab\u041c\u0430\u043a\u0441\u0421\u0438\u0442\u0438\u00bb",\n                "address": "\u0433. \u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430, \u0448. \u042d\u043d\u0442\u0443\u0437\u0438\u0430\u0441\u0442\u043e\u0432 80, \u043f\u043e\u043c. 1",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-21:00"],\n                "phones": ["8 (926) 375-48-55"],\n                "coords": [55.798100, 37.986474],\n                "zoom": 16\n            }\n        ],\n        "coords": [55.791537, 37.613853],\n        "zoom": 10\n    },\n    {\n        "city": "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u0421\u0442\u0440\u043e\u0439\u0433\u0440\u0430\u0434\u00bb",\n                "address": "\u0433. \u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a, \u0443\u043b. \u041c\u0430\u0440\u0430\u0442\u0430, \u0434. 8, \u043a\u043e\u0440\u043f\u0443\u0441 2, \u0446\u043e\u043a\u043e\u043b\u044c (\u043d\u0430\u043f\u0440\u043e\u0442\u0438\u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 \u043a\u0440\u0435\u043f\u0435\u0436\u0435\u0439 \u00ab\u0410\u0412\u0412\u0410\u00bb)",\n                "hours": ["\u043f\u043d-\u043f\u0442: 8:30-19:00", "\u0441\u0431: 8:30-18:00", "\u0432\u0441: 8:30-17:00"],\n                "phones": ["8 (8422) 70-11-35", "8 (927) 270-11-35"],\n                "coords": [54.322841, 48.391513],\n                "zoom": 16\n            }\n        ],\n        "coords": [54.322841, 48.391513],\n        "zoom": 17\n    },\n    {\n        "city": "\u041a\u0438\u0440\u043e\u0432",\n        "shops": [\n            {\n                "name": "\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u00abGradusHaus\u00bb",\n                "address": "\u0433. \u041a\u0438\u0440\u043e\u0432, \u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439 \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442 90 (\u0443\u0433\u043e\u043b \u0443\u043b\u0438\u0446\u044b \u0412\u043e\u0440\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0438 \u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442\u0430)",\n                "hours": ["\u043f\u043d-\u0432\u0441: 09:00-20:00"],\n                "phones": ["8 (922) 914-54-34"],\n                "coords": [58.593105, 49.658626],\n                "zoom": 16\n            }\n        ],\n        "coords": [58.584786,49.677777],\n        "zoom": 13\n    },\n    {\n        "city": "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u041f\u0438\u0442\u0435\u0440\u00bb",\n                "address": "\u0433. \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0443\u043b. \u0422\u0438\u043f\u0430\u043d\u043e\u0432\u0430, \u0434. 21, \u043b\u0438\u0442\u0435\u0440 \u0410, 1 \u044d\u0442\u0430\u0436, \u043f\u0430\u0432. 228 (\u043f\u0430\u0432\u0438\u043b\u044c\u043e\u043d \u0440\u044f\u0434\u043e\u043c \u0441 \u00ab\u041f\u0435\u0440\u0435\u043a\u0440\u0451\u0441\u0442\u043a\u043e\u043c\u00bb \u0438 \u00ab\u0412\u0441\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b\u00bb)",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-21:00"],\n                "phones": ["8 (921) 807-95-93"],\n                "coords": [59.853288, 30.340707],\n                "zoom": 16\n            }\n        ],\n        "coords": [59.853288, 30.340707],\n        "zoom": 10\n    },\n    {\n        "city": "\u0412\u043e\u0440\u043e\u043d\u0435\u0436",\n        "shops": [\n            {\n                "name": "\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u00abGradusHaus\u00bb",\n                "address": "\u0433. \u0412\u043e\u0440\u043e\u043d\u0435\u0436, \u0443\u043b. \u0413\u0435\u0440\u043e\u0435\u0432 \u0421\u0438\u0431\u0438\u0440\u044f\u043a\u043e\u0432, \u0434. 65/\u0437",\n                "hours": ["\u043f\u043d-\u0432\u0441: 09:00-19:30"],\n                "phones": ["8 (920) 434-61-99"],\n                "coords": [51.645157, 39.140810],\n                "zoom": 16\n            }\n        ],\n        "coords": [51.645157, 39.140810],\n        "zoom": 16\n    },\n    {\n        "city": "\u0421\u0430\u0440\u0430\u0442\u043e\u0432",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u0411\u0430\u0437\u0430\u0440\u00bb",\n                "address": "\u0433. \u0421\u0430\u0440\u0430\u0442\u043e\u0432, \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u041e\u0440\u0434\u0436\u043e\u043d\u0438\u043a\u0438\u0434\u0437\u0435, \u0434. 1 (\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0430\u043b\u0435\u0440\u0435\u044f, 1 \u044d\u0442\u0430\u0436)",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-21:00"],\n                "phones": ["8 (927) 059-53-03"],\n                "coords": [51.501339, 45.944207],\n                "zoom": 16\n            }\n        ],\n        "coords": [51.501339, 45.944207],\n        "zoom": 16\n    },\n    {\n        "city": "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u0421\u0442\u043e\u043b\u043f\u043b\u0438\u0442 \u0425\u043e\u0443\u043c\u00bb",\n                "address": "\u0433. \u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434, \u0443\u043b. \u0418\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0430\u044f, \u0434. 154, 1 \u044d\u0442\u0430\u0436",\n                "hours": ["\u043f\u043d-\u0432\u0441: 09:00-20:00"],\n                "phones": ["8 (927) 534-70-72"],\n                "coords": [48.768618, 44.474547],\n                "zoom": 16\n            },\n            {\n                "name": "\u0422\u0426 \u00ab\u041b\u0435\u043d\u0442\u0430\u00bb",\n                "address": "\u0433. \u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434, \u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0441\u043a\u0438\u0439 \u043f\u0440-\u0442, \u0434. 2",\n                "hours": ["\u043f\u043d-\u0432\u0441: 09:00-20:00"],\n                "phones": ["8 (927) 542-10-42"],\n                "coords": [48.685575, 44.449744],\n                "zoom": 16\n            }\n        ],\n        "coords": [48.713457, 44.508581],\n        "zoom": 11\n    },\n    {\n        "city": "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a",\n        "shops": [\n            {\n                "name": "\u0422\u041a \u00ab\u041a\u043e\u043b\u044c\u0446\u043e\u00bb",\n                "address": "\u0433. \u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a, \u0443\u043b. \u0414\u0430\u0440\u0432\u0438\u043d\u0430, \u0434. 18",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-21:00"],\n                "phones": ["8 (922) 631-75-00"],\n                "coords": [55.126843, 61.370124],\n                "zoom": 16\n            }\n        ],\n        "coords": [55.126843, 61.370124],\n        "zoom": 16\n    },\n    {\n        "city": "\u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u041c\u0430\u043a\u0441\u0421\u0438\u0442\u0438\u00bb",\n                "address": "\u0433. \u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430, \u0448. \u042d\u043d\u0442\u0443\u0437\u0438\u0430\u0441\u0442\u043e\u0432 80, \u043f\u043e\u043c. 1",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-21:00"],\n                "phones": ["8 (926) 375-48-55"],\n                "coords": [55.798100, 37.986474],\n                "zoom": 16\n            }\n        ],\n        "coords": [55.798100, 37.986474],\n        "zoom": 16\n    }\n]\n\n'
      );

      // создание карты с метками
      let script = document.createElement("script");
      script.setAttribute("async", "");
      script.type = "text/javascript";
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      document.querySelector("body").appendChild(script);

      script.onload = function () {
        ymaps.ready(function () {
          let myMap = new ymaps.Map("shop-map", {
            center: [55.75222, 37.61556],
            zoom: 10,
            controls: ["zoomControl"],
          });

          myMap.behaviors.disable("scrollZoom");

          citiesJSON.forEach(function (inx) {
            let city = inx.city;
            inx.shops.forEach(function (shop) {
              let mark = new ymaps.Placemark(
                shop.coords,
                {
                  hasHint: true,
                  hintContent: "Градус Хаус в г. " + city + ", " + shop.name,
                },
                {
                  iconLayout: "default#image",
                  iconImageHref: "build/images/placemark.svg",
                  iconImageSize: [56, 42],
                  iconImageOffset: [-33, -38],
                }
              );

              mark.events.add("click", function (e) {
                myMap.hint.open(
                  shop.coords,
                  " Градус Хаус в г. " + city + ", " + shop.name
                );
              });

              myMap.geoObjects.add(mark);
            });
          });
        });
      };
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#map {
  .list-box {
    display: flex;
    justify-content: space-between;
    column-gap: 16px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 992px) {
      flex-direction: column;
      row-gap: 20px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 9px;
      width: 100%;

      @media (max-width: 992px) {
        row-gap: 20px;
      }

      li {
        position: relative;
        padding-left: 30px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: $gray;

        @media (max-width: 768px) {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
        }

        &:before {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-100%);
          width: 15px;
          height: 11px;
          content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxOSAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNy42MTExMUw2LjYxNTM4IDEyLjVMMTcgMS41IiBzdHJva2U9IiNFMkJDODUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=);
        }
      }
    }
  }

  .content-container_map {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0;
    margin-top: 77px;
    height: 745px;
    max-height: 66vh;
    overflow: hidden;
    margin-top: 50px;

    .map-item {
      height: 745px;
      max-height: 67vh;
    }

    .ymaps-2-1-79-ground-pane {
      filter: grayscale(100%);
    }
  }

  .page-loader-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $gray;
    transform: scale(1.5);
    opacity: 0.8;
    z-index: 10000;
  }
}
</style>

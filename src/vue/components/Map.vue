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
      <div v-if="pageLoad" class="page-loader-wrap"></div>
      <div id="shop-map" class="map-item"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      pageLoad: true,
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
    setTimeout(() => {
      // получение списка адресов магазинов
      const requestURL = "https://apispn.ru/json/shops/";
      const request = new XMLHttpRequest();
      request.open("GET", requestURL);
      request.responseType = "json";
      request.send();

      request.onload = function () {
        const citiesJSON = JSON.parse(request.response);

        // создание карты с метками
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
        document.querySelector("body").appendChild(script);

        script.onload = function () {
          ymaps.ready(function () {
            const myMap = new ymaps.Map("shop-map", {
              center: [55.75222, 37.61556],
              zoom: 11,
              controls: ["zoomControl"],
            });

            myMap.behaviors.disable("scrollZoom");

            // создание меток на общей карте
            Object.keys(citiesJSON).forEach(function (inx) {
              let city = this[inx]["city"];
              this[inx]["shops"].forEach(function (shop) {
                let mark = new ymaps.Placemark(
                  shop["coords"],
                  {
                    hintContent:
                      "Градус Хаус в г. " + city + ", " + shop["name"],
                  },
                  {
                    iconLayout: "default#image",
                    iconImageHref: "build/images/placemark.svg",
                    iconImageSize: [56, 42],
                    iconImageOffset: [-33, -38],
                  }
                );
                mark.events.add("click", function (e) {
                  city_input.value = city;
                  cities_list.innerHTML = "";
                  city_btn.click();
                });
                myMap.geoObjects.add(mark);
              });
            }, citiesJSON);

            // устанавливает событие клика на доступные города
            const setEvent = function () {
              cities_list.childNodes.forEach(function (e) {
                e.addEventListener("click", function (inx) {
                  city_input.value = e.innerText;
                  cities_list.innerHTML = "";
                  city_btn.click();
                });
              });
            };
          });
        };
      };
      this.pageLoad = false;
    }, 100);
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

<template>
  <section id="faq">
    <div class="container">
      <div class="title">
        <h2>
          Узнайте ответы на самые <br />
          популярные вопросы
        </h2>
      </div>

      <div class="accordions">
        <div
          v-for="(acc, index) in accordions"
          v-bind:key="index"
          class="accordion-item"
        >
          <div class="accordion-menu">
            <h3 v-text="acc.title"></h3>
            <IconPlus :color="acc.color" />
          </div>
          <div class="accordion-content">
            <div class="accordion-content__wrap">
              <p v-html="acc.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconPlus from "../helpers/IconPlus.vue";
import Colors from "../types/ColorsEnum";

export default defineComponent({
  components: {
    IconPlus,
  },
  data() {
    return {
      accordions: [
        {
          title: "1. Чем отличаются стальная и чугунная печи?",
          content:
            "Вес чугуна значительно выше, чем у стали, а цена — больше. Соответственно, установка и транспортировка такой печи будут значительно труднее.",
          color: Colors.Green,
        },
        {
          title: "2. Где ещё можно купить печку?",
          content:
            "Вы можете заказать нашу буржуйку не только в интернет-магазине, но и на других популярных платформах (wildberries, ozon, yandex и т. д) или купить её в сети наших розничных магазинов (в Москве или других городах&nbsp;России).",
          color: Colors.Green,
        },
        {
          title:
            "3. У печки снимаются ножки — детали не приварены друг к другу. Устойчива ли такая конструкция?",
          content:
            "Печка устойчива и долговечна. Её устройство подразумевает, что ножки идеально стыкуются с корпусом и&nbsp;не&nbsp;соскальзывают.",
          color: Colors.Green,
        },
        {
          title: "4. Как ухаживать за буржуйкой?",
          content:
            "Перед чисткой нужно удалить из печи оставшуюся после растопки золу с помощью совка. Поверхность буржуйки металлическая, поэтому её можно мыть мягкой влажной тряпкой или губкой. Не рекомендуется чистка изделия абразивными материалами, острыми и твёрдыми предметами.",
          color: Colors.Green,
        },
        {
          title: "5. Идут ли в комплект конвекторные пластины?",
          content: "Нет, не идут.",
          color: Colors.Green,
        },
      ],
    };
  },

  methods: {
    createAnimation(element) {
      let menu = element.querySelector(".accordion-menu");
      let box = element.querySelector(".accordion-content");

      //@ts-ignore
      this.gsap.set(box, { height: "auto" });

      //@ts-ignore
      let animation = this.gsap
        .from(box, {
          height: 0,
          duration: 0.5,
          ease: "power1.inOut",
        })
        .reverse();

      return function (clickedMenu) {
        if (clickedMenu === menu) {
          animation.reversed(!animation.reversed());
        } else {
          animation.reverse();
        }
      };
    },

    changeColor(i) {
      this.accordions.forEach((element, index) => {
        index == i
          ? (element.color =
              element.color == Colors.Red ? Colors.Green : Colors.Red)
          : (element.color = Colors.Green);
      });
    },
  },

  mounted() {
    this.$nextTick(function () {
      //@ts-ignore
      let groups = this.gsap.utils.toArray(".accordion-item");
      //@ts-ignore
      let menus = this.gsap.utils.toArray(".accordion-menu");
      let menuToggles = groups.map(this.createAnimation);
      menus.forEach((menu, i) => {
        menu.addEventListener("click", () => {
          toggleMenu(menu);
          this.changeColor(i);
        });
      });
      function toggleMenu(clickedMenu) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
      }
    });
  },
});
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#faq {
  @extend %indent-p;

  .title {
    h2 {
      @media (max-width: 425px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
  }

  .accordions {
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 768px) {
      gap: 30px;
    }

    @media (max-width: 576px) {
      gap: 18px;
    }
  }

  .accordion-menu {
    @extend %shadow-block;
    border-radius: 10px;
    padding: 24px 60px;
    cursor: pointer;
    user-select: none;
    min-height: 100px;
    display: flex;
    align-items: center;

    gap: 15px;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 14px;
      min-height: 70px;
    }

    h3 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 31px;
      color: $gray;

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }

  .accordion-content {
    height: 0;
    overflow: hidden;

    &__wrap {
      padding: 60px 60px calc(60px - 40px);

      @media (max-width: 768px) {
        padding: 30px 10px 0;
      }

      @media (max-width: 576px) {
        padding: 18px 10px 0;
      }
    }

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 31px;
      color: $gray;

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
}
</style>

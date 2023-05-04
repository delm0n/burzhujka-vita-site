<template>
  <section class="characteristic-dostavka">
    <CharacteristicItem :char="dostavka" />
  </section>
</template>

<script lang="ts">
import CharacteristicItem from "../helpers/VitaBlock.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    CharacteristicItem,
  },

  data() {
    return {
      dostavka: {
        title: "Гарантия честной цены",
        subtitle: "",
        text: [
          `Мы сотрудничаем с самыми оперативными транспортными компаниями России: ПЭК, DPD, КИТ, Деловые линии. Если Вы больше доверяете другой транспортной фирме, то Мы можем воспользоваться ее услугами.
           <br> По умолчанию Мы отправляем Ваш заказ Почтой России. Стоимость доставки и полную стоимость заказа менеджер сообщит Вам на этапе согласования.`,
        ],
        img: {
          src: "dostavka",
          alt: "Доставка и оплата",
        },
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.characteristic-wraper {
  @media (max-width: 567px) {
    gap: 24px;
  }
}
</style>
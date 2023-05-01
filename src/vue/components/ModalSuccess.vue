<template>
  <div id="modal-success">
    <h3>
      Благодарим за <br />
      доверие!
    </h3>

    <p class="decr" v-html="getModalSuccess"></p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getModalSuccess"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#modal-success {
  @extend %modal;

  max-width: 810px;
  width: 100%;
  padding: 50px 40px 50px;
  @media (max-width: 576px) {
    padding: 35px 10px 25px;
  }

  .decr {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #707070;
    margin-top: 38px;

    @media (max-width: 576px) {
      margin-top: 13px;
      font-size: 12px;
      line-height: 14px;
    }

    span {
      font-weight: 700;
    }
  }
}
</style>

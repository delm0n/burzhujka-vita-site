<template>
  <section id="photo">
    <div class="container">
      <div class="title">
        <h2>Реальные фото буржуйки «VITA»</h2>
      </div>
      <div class="photos-wrapper">
        <a
          v-for="(photo, index) in photos"
          :href="
            'build/images/' + photo.src + (getWebp == 'webp' ? '.webp' : '.png')
          "
          data-fancybox="photo"
          :class="'photo-container' + ' photo-container-' + (index + 1)"
          :key="index"
        >
          <image-lazy
            :src="photo.src"
            :alt="'Буржуйка VITA фотография ' + (index + 1)"
            :srcMedia="425"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageLazy from "../helpers/ImageLazy.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  components: {
    ImageLazy,
  },
  data() {
    return {
      photos: [
        {
          src: "photo-vita-1",
        },
        {
          src: "photo-vita-2",
        },
        {
          src: "photo-vita-3",
        },
        {
          src: "photo-vita-4",
        },
        {
          src: "photo-vita-5",
        },
        {
          src: "photo-vita-6",
        },
      ],
    };
  },
  computed: mapGetters(["getWebp"]),
});
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#photo {
  @extend %indent-p;

  .photos-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(20, 1fr);

    @include gapWrapper();

    @media (max-width: 992px) {
      gap: 12px;
    }

    @media (max-width: 576px) {
      gap: 7px;
    }

    .photo-container {
      display: block;
      width: 100%;
      border: 3px solid #cecece;
      border-radius: 40px;
      overflow: hidden;
      cursor: zoom-in;
      position: relative;

      @media (max-width: 992px) {
        border-radius: 16px;
        border: 2px solid #cecece;
      }

      @media (max-width: 475px) {
        border: 1px solid #cecece;
        border-radius: 9px;
      }

      img {
        position: absolute;
        height: 100%;
        width: auto;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.6s;

        &:not([data-ll-status="loaded"]) {
          aspect-ratio: 497/393;
        }
      }

      &:hover {
        img {
          transform: translateX(-50%) scale(1.05);
        }
      }

      &-1 {
        grid-row: 1/11;

        img {
          position: static;
          left: 0;
          transform: translateX(0);
          width: 100%;
          height: auto;
        }

        &:hover {
          img {
            transform: translateX(0) scale(1.05);
          }
        }
      }

      &-2 {
        grid-row: 1/10;

        img {
          left: 0;
          transform: translateX(0);
        }

        &:hover {
          img {
            transform: translateX(0) scale(1.05);
          }
        }

        @media (max-width: 768px) {
          grid-row: 1/9;

          img {
            width: 99%;
            height: auto;
            transform: translateX(0) translateY(-15%);
          }

          &:hover {
            img {
              transform: translateX(0) translateY(-15%) scale(1.05);
            }
          }
        }
      }

      &-3 {
        grid-row: 1/12;
      }

      &-4 {
        grid-row: 11/21;
      }

      &-5 {
        grid-row: 10/21;

        @media (max-width: 768px) {
          grid-row: 9/21;
        }
      }

      &-6 {
        grid-row: 12/21;
      }
    }
  }
}
</style>

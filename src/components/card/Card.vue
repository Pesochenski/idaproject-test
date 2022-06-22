<template>
  <div
    class="Card"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div
      class="Card__delete"
      :class="{ 'Card__delete--active': isHovered }"
      @click="deleteHandler"
    >
      <img
        class="Card__delete-icon"
        src="@/static/icons/icon-delete.svg"
        alt="delete"
      >
    </div>

    <div class="Card__img-container">
      <img
        class="Card__img"
        :src="product.image"
        alt="img"
      >
    </div>

    <div class="Card__content">
      <p class="Card__content-title">
        {{ product.title }}
      </p>

      <p class="Card__content-description">
        {{ product.description }}
      </p>

      <p class="Card__content-price">
        {{ new Intl.NumberFormat('ru-RU').format(product.price) }} руб.
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import { store } from '@/store'

export default {
  name: 'Card',

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  setup (props) {
    const isHovered = ref(false)

    const deleteHandler = () => store.commit('products/deleteProduct', props.product)

    return {
      isHovered,
      deleteHandler,
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/styles/mixins";

.Card {
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: relative;
  min-height: 423px;
  background: var(--color-white-1);
  display: flex;
  flex-direction: column;
  min-width: 28%;
  width: calc(33% - 8px);
  opacity: 1;

  &__delete {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    position: absolute;
    top: -8px;
    right: -8px;
    background: var(--color-red);
    pointer-events: none;
    opacity: 0;
    transition: var(--transition-short);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    &--active {
      opacity: 1;
      pointer-events: all;
    }
  }

  &__img {
    width: 100%;
    height: fit-content;

    &-container {
      width: 100%;
      max-height: 200px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 4px 4px 0 0;
    }
  }

  &__content {
    padding: 16px 16px 24px 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &-title {
      @include font-subtitle-1;
      color: var(--color-black-2);
      text-transform: capitalize;
    }

    &-description {
      @include font-subtitle-2;
      color: var(--color-black-2);
      text-transform: capitalize;
      margin: 16px 0;
    }

    &-price {
      @include font-title-2;
      color: var(--color-black-2);
      margin-top: auto;
    }
  }

  @media screen and (max-width: 1250px) {
    min-width: 40%;
    width: calc(50% - 8px);
  }

  @media screen and (max-width: 900px) {
    min-height: 350px;
    min-width: 100%;
    width: 100%;

    &__img {
      &-container {
        max-height: 150px;
      }
    }
  }
}
</style>

<template>
  <section class="CardList__wrapper">
    <div class="CardList__container">
      <CardFilter class="CardList__filter" />

      <transition
        name="CardList__transition"
        mode="out-in"
      >
        <div
          v-if="isLoading"
          :key="1"
          class="CardList"
        >
          <p class="CardList__loading">
            loading...
          </p>
        </div>

        <div
          v-else
          :key="2"
          class="CardList"
        >
          <Card
            v-for="(item, index) in filteredProducts"
            :key="index"
            class="CardList__card"
            :product="item"
          />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { computed, ref, onMounted } from '@nuxtjs/composition-api'
import { store } from '@/store'
import { cardFilterEnum } from '@/enums/cardFilterEnum'
import CardFilter from '@/components/card/CardFilter'
import Card from '@/components/card/Card'

export default {
  name: 'CardList',

  components: {
    CardFilter,
    Card,
  },

  setup () {
    const isLoading = ref(false)

    const products = computed(() => store.getters['products/products'])

    const activeFilter = computed(() => store.getters['products/activeFilter'])

    const filteredProducts = computed(() => activeFilterAction(activeFilter.value))

    const titleFilter = () => products.value.sort((a, b) => a.title.localeCompare(b.title))

    // eslint-disable-next-line arrow-body-style
    const priceFilter = (type) => {
      return products.value.sort((a, b) => type === cardFilterEnum.MIN_PRICE ? a.price - b.price : b.price - a.price)
    }

    const activeFilterAction = (filter) => {
      switch (filter) {
        case cardFilterEnum.DEFAULT:
          return products.value
        case cardFilterEnum.NAME:
          return titleFilter()
        case cardFilterEnum.MIN_PRICE:
          return priceFilter(cardFilterEnum.MIN_PRICE)
        case cardFilterEnum.MAX_PRICE:
          return priceFilter(cardFilterEnum.MAX_PRICE)
      }
    }

    onMounted(() => {
      isLoading.value = true

      setTimeout(() => {
        isLoading.value = false
      }, 1500)
    })

    return {
      isLoading,
      products,
      filteredProducts,
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/styles/mixins";

@keyframes loading {
  from {
    color: var(--color-gray-2);
  }
  to {
    color: var(--color-black-2);
  }
}

.CardList {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;

  &__wrapper {
    flex-grow: 1;
    height: 100%;

    overflow-y: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__container {
    margin-left: 16px;
    margin-top: 32px;
    padding-bottom: 16px;
    padding-right: 8px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__loading {
    @include font-subtitle-1;
    animation-name: loading;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    text-transform: capitalize;
    margin: auto;
  }

  &__transition {
    &-enter-active, &-leave-active {
      transition: opacity var(--transition-long) ease;
    }

    &-enter-to {
      opacity: 1;
    }

    &-enter, &-leave-to {
      opacity: 0;
    }
  }

  @media screen and (max-width: 660px) {
    &__wrapper {
      overflow-y: initial;
    }

    &__container {
      margin-top: 40px;
      margin-left: 0;
      padding-right: 0;
    }
  }
}
</style>

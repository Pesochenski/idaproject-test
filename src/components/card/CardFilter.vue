<template>
  <div class="CardFilter">
    <div
      class="CardFilter__head"
      @click="isOpen = !isOpen"
    >
      <p class="CardFilter__head-title">
        {{ filterTitle[activeFilter] }}
      </p>

      <img
        class="CardFilter__head-icon"
        :class="{ 'CardFilter__head-icon--open': isOpen }"
        src="@/static/icons/icon-arrow.svg"
        alt="arrow"
      >
    </div>

    <transition name="CardFilter__transition">
      <div
        v-if="isOpen"
        class="CardFilter__content"
      >
        <p
          v-for="(item, index) in Object.values(cardFilterEnum)"
          :key="index"
          class="CardFilter__content-title"
          @click="chooseHandler(item)"
        >
          {{ filterTitle[item] }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, ref } from '@nuxtjs/composition-api'
import { store } from '@/store'
import { cardFilterEnum } from '@/enums/cardFilterEnum'

export default {
  name: 'CardFilter',

  setup () {
    const isOpen = ref(false)

    const activeFilter = computed({
      get: () => store.getters['products/activeFilter'],
      set: (val) => store.commit('products/setActiveFilter', val),
    })

    const filterTitle = {
      [cardFilterEnum.DEFAULT]: 'По умолчанию',
      [cardFilterEnum.NAME]: 'По наименованию',
      [cardFilterEnum.MIN_PRICE]: 'По цене (от меньш.)',
      [cardFilterEnum.MAX_PRICE]: 'По цене (от больш.)',
    }

    const chooseHandler = (item) => {
      activeFilter.value = item
      isOpen.value = !isOpen.value
    }

    return {
      activeFilter,
      isOpen,
      cardFilterEnum,
      filterTitle,
      chooseHandler,
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/styles/mixins";

.CardFilter {
  position: relative;
  margin-left: auto;

  &__head {
    padding: 10px 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: var(--color-white-1);
    display: flex;
    align-items: center;
    cursor: pointer;

    &-icon {
      margin-left: 5px;
      transition: var(--transition-long);

      &--open {
        transform: rotate(180deg);
      }
    }

    &-title {
      @include font-text-1;
      color: var(--color-gray-2);
      user-select: none;
    }
  }

  &__content {
    position: absolute;
    transform: translateY(100%);
    bottom: -4px;
    right: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: var(--color-white-1);
    opacity: 1;

    &-title {
      @include font-text-1;
      cursor: pointer;
      color: var(--color-gray-2);
      transition: var(--transition-short);
      white-space: nowrap;

      &:hover {
        color: var(--color-black-1);
      }
    }
  }

  &__transition {
    &-enter-active, &-leave-active {
      transition: opacity var(--transition-long) ease;
    }

    &-enter, &-leave-to {
      opacity: 0;
    }
  }
}
</style>

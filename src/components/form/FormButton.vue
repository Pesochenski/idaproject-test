<template>
  <button
    class="FormButton"
    type="submit"
    :class="buttonColor"
  >
    Добавить товар
  </button>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'
import { buttonStateEnum } from '@/enums/buttonStateEnum'

export default {
  name: 'FormButton',

  props: {
    state: {
      type: String,
      required: true,
      validator: (val) => Object.values(buttonStateEnum).includes(val),
    },
  },

  setup (props) {
    const buttonColor = computed(() => ({
      [buttonStateEnum.DISABLED]: 'FormButton--disabled',
      [buttonStateEnum.ACTIVE]: 'FormButton--active',
    }[props.state]))

    return {
      buttonColor,
    }
  },
}
</script>

<style scoped lang="scss">
.FormButton {
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  transition: var(--transition-short);
  opacity: 1;

  font: {
    family: var(--font-family-secondary);
    size: var(--font-size-text-1);
    weight: var(--font-weight-regular);
  }
  line-height: var(--line-height-1);
  letter-spacing: -0.02em;

  &:hover {
    opacity: 0.8;
  }

  &--disabled {
    background: var(--color-gray-1);
    color: var(--color-gray-2);
  }

  &--active {
    background: var(--color-green);
    color: var(--color-white-1);
  }
}
</style>

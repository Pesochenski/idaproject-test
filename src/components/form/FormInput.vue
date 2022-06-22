<template>
  <div
    class="FormInput"
    :class="{ 'FormInput--failed': !valid }"
  >
    <label
      class="FormInput__label"
      :class="{ 'FormInput__label--required': required }"
      :for="related"
    >
      {{ label }}
    </label>

    <input
      v-if="!textarea"
      :value="input"
      :id="related"
      class="FormInput__input"
      :class="{ 'FormInput__input--failed': !valid }"
      :placeholder="placeholder"
      :type="type"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('validate', related)"
    >

    <textarea
      v-if="textarea"
      :value="input"
      :placeholder="placeholder"
      :id="related"
      class="FormInput__input FormInput__textarea"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'FormInput',

  props: {
    input: {
      type: String,
      required: true,
      default: '',
    },
    related: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    textarea: {
      type: Boolean,
      default: false,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
  },

  emits: ['input', 'validate'],
}
</script>

<style scoped lang="scss">
@import "@/styles/mixins";

.FormInput {
  width: 100%;
  position: relative;

  &--failed {
    &::after {
      @include font-text-2;
      content: "Поле является обязательным";
      color: var(--color-red);
      position: absolute;
      transform: translateY(100%);
      left: 0;
      bottom: -4px;
    }
  }

  &__label {
    @include font-text-2;
    color: var(--color-black-1);
    position: relative;

    &--required {
      &::before {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--color-red);
        transform: translateX(100%);
      }
    }
  }

  &__input {
    @include font-text-1;
    color: var(--color-black-2);
    width: 100%;
    margin-top: 4px;
    background: var(--color-white-1);
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 10px 0 10px 16px;
    transition: var(--transition-short);
    position: relative;

    &::placeholder {
      color: var(--color-gray-2);
    }

    &--failed {
      border: 1px solid var(--color-red);
    }
  }

  &__textarea {
    max-width: 100%;
    min-width: 100%;
    max-height: 108px;
    min-height: 108px;
    height: 108px;
  }
}
</style>

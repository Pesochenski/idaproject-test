<template>
  <form
    class="Form"
    @submit.prevent="submitHandler"
  >
    <FormInput
      :input="form.title"
      related="title"
      label="Наименование товара"
      placeholder="Введите аименование товара"
      class="Form__input"
      :valid="rules.title.valid"
      required
      @input="(val) => form.title = val"
      @validate="validateHandler"
    />

    <FormInput
      :input="form.description"
      related="description"
      label="Описание товара"
      placeholder="Введите описание товара"
      class="Form__input"
      textarea
      valid
      @input="(val) => form.description = val"
    />

    <FormInput
      :input="form.image"
      related="image"
      label="Ссылка на изображение товара"
      placeholder="Введите ссылку"
      class="Form__input"
      :valid="rules.image.valid"
      required
      @input="(val) => form.image = val"
      @validate="validateHandler"
    />

    <FormInput
      :input="form.price"
      related="price"
      label="Цена товара"
      placeholder="Введите цену"
      class="Form__input"
      type="number"
      :valid="rules.price.valid"
      required
      @input="(val) => form.price = val"
      @validate="validateHandler"
    />

    <FormButton
      class="Form__button"
      :state="isValid ? buttonStateEnum.ACTIVE : buttonStateEnum.DISABLED"
      :disabled="!isValid"
    />
  </form>
</template>

<script>
import { computed, reactive } from '@nuxtjs/composition-api'
import { store } from '@/store'
import { buttonStateEnum } from '@/enums/buttonStateEnum'
import FormButton from '@/components/form/FormButton'
import FormInput from '@/components/form/FormInput'

export default {
  name: 'Form',

  components: {
    FormInput,
    FormButton,
  },

  setup () {
    const rules = reactive({
      title: {
        valid: true,
      },
      image: {
        valid: true,
      },
      price: {
        valid: true,
      },
    })

    const form = reactive({
      title: '',
      image: '',
      description: '',
      price: '',
    })

    const isValid = computed(() => !Object.values(rules).map((item) => item.valid).includes(false) &&
      !store.getters['products/products'].some((item) => item.title === form.title),
    )

    const submitHandler = () => {
      Object.keys(rules).forEach((item) => validateHandler(item))

      if (isValid.value) {
        store.commit('products/addProduct', form)
      } else {
        return
      }
    }

    const validateHandler = (val) => {
      rules[val].valid = form[val].length > 0
    }

    return {
      isValid,
      buttonStateEnum,
      form,
      rules,
      submitHandler,
      validateHandler,
    }
  },
}
</script>

<style scoped lang="scss">
.Form {
  margin-top: 16px;
  width: 332px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  background: var(--color-white-1);

  &__input {
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }

  &__button {
    margin-top: 24px;
  }

  @media screen and (max-width: 660px) {
    width: 100%;
  }
}
</style>

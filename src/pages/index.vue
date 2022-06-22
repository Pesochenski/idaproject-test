<template>
  <section class="Page">
    <section class="Page__form-container">
      <p class="Page__form-title">
        Добавление товара
      </p>

      <Form class="Page__form" />
    </section>

    <CardList class="Page__cards" />
  </section>
</template>

<script>
import Form from '@/components/form/Form.vue'
import CardList from '@/components/card/CardList'

export default {
  name: 'IndexPage',

  components: {
    CardList,
    Form,
  },

  layout: 'PageLayout',
}
</script>

<style scoped lang="scss">
@import "@/styles/mixins";

.Page {
  display: flex;
  justify-content: space-between;
  height: 100vh;

  &__form {
    &-container {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
    }

    &-title {
      @include font-title-1;
      color: var(--color-black-2);
    }
  }

  @media screen and (max-width: 660px) {
    justify-content: flex-start;
    flex-direction: column;

    &__form {
      &-container {
        margin-top: 0;
      }

      &-title {
        display: none;
      }
    }
  }
}
</style>

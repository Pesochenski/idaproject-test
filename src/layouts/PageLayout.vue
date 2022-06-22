<template>
  <main class="PageLayout">
    <nuxt />
  </main>
</template>

<script>
export default {
  name: 'PageLayout',
}
</script>

<style scoped lang="scss">
.PageLayout {
  padding: 0 24px 0 32px;

  @media screen and (max-width: 660px) {
    padding: 16px;
  }
}
</style>

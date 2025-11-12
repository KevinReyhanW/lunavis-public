<template functional>
  <footer class="the-footer flex-wrap justify-between" :class="classes">
    <p class="text-center md:text-left">
      <span>COPYRIGHT &copy;</span>
      <span>{{ new Date().getFullYear() }} </span>
      <a href="/" target="_blank" rel="nofollow">Lunavis</a>
      <span class="hidden sm:inline-block">, All rights Reserved</span>
    </p>
    <!-- <span class="md:flex hidden items-center">
            <span>Hand-crafted & Made with</span>
            <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />
        </span> -->
  </footer>
</template>

<script>
export default {
  name: "the-footer",
  props: {
    classes: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@use '../styles/footer.scss';
</style>
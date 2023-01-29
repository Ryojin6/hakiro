<template>
  <li
    v-scroll-to="anchor"
    class="nav-item w-96 whitespace-nowrap py-4 font-mono text-3xl font-bold uppercase leading-none text-a-dyellow transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-a-lime md:text-4xl xl:text-5xl 2xl:text-6xl"
    :data-text="title"
    @click="closeMenu"
  >
    {{ title }}
  </li>
</template>

<script>
export default {
  props: {
    anchor: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    toggled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeMenu() {
      this.$emit('toggled');
    },
  },
};
</script>

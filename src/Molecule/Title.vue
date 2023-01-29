<template>
  <div class="mx-auto max-w-6xl text-center text-a-charcoal">
    <div class="md:text-xl 2xl:text-2xl">{{ subtitle }}</div>
    <h2 class="textXLarge font-title">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
};
</script>

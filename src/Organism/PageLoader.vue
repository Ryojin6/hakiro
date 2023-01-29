<template>
  <transition name="fade">
    <div
      v-show="elementVisible"
      class="fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-a-beige"
    >
      <div class="relative mx-auto w-full max-w-4xl p-4">
        <object type="image/svg+xml" data="/animation.svg">
          <img src="/animation.svg" alt="" />
        </object>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      elementVisible: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.elementVisible = false;
    }, 2000);
  },
};
</script>

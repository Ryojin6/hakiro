<template>
  <TemplateDefault class="gradient font-sans text-xl">
    <section>
      <div class="relative flex h-screen items-end justify-end">
        <g-link
          to="/"
          class="pin-x-center absolute top-24 mx-auto max-w-4xl transition-all duration-300 ease-in-out"
        >
          <img src="/logo.png" alt="" />
        </g-link>
        <OrganismMap />
      </div>
    </section>
  </TemplateDefault>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,

      opened: false,
      selectedMochi: '/74.png',
    };
  },

  mounted() {
    setTimeout(() => {
      this.waitLittleBit = false;
    }, 3000);
    this.popupItem = this.$el;
  },
  methods: {
    toggle() {
      this.opened = true;
    },

    hide() {
      this.opened = false;
    },
  },
};
</script>

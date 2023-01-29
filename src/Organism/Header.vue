<template>
  <header
    class="custom-transition pin-x-center fixed bottom-0 z-20 flex w-full flex-shrink-0 items-center justify-center justify-between border-black px-3 py-4 scrolled:bg-a-beige lg:px-10"
    :class="[{ open: toggled }]"
  >
    <div class="relative z-40 flex flex-1 justify-end space-x-2 md:space-x-6">
      <div
        class="custom-transition flex w-full items-center justify-end space-x-4 md:w-auto"
      >
        <AtomIconTwitter
          link="https://twitter.com/Hakiro_NFT"
          class="hidden w-8 text-white md:block"
        />
        <AtomIconDiscord
          link="https://discord.gg/hakiro"
          class="hidden w-8 text-white md:block"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: 'Mechanics',
          link: '#about',
        },
        {
          label: 'How To Play',
          link: '#how-to-play',
        },
        {
          label: 'FAQ',
          link: '#FAQ',
        },
      ],
      toggled: false,
      open: false,
    };
  },
};
</script>

<style media="screen">
nav {
  @apply fixed left-0 z-10 h-full w-full overflow-hidden;

  top: -100%;

  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

nav:before {
  content: '';
  @apply absolute inset-0 m-auto h-0 w-full overflow-hidden rounded-full bg-a-charcoal;

  padding-bottom: 100%;

  transform: scale(0.04), translateY(9999px);
}

.open nav {
  @apply top-0;
}

.open nav:before {
  animation: menu-animation 0.8s ease-out forwards;
}

ul.menu {
  @apply fixed top-1/2 left-1/2 text-a-orange;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  perspective: 1000;
}

ul.menu li {
  @apply text-center opacity-0;
  transform: translate3d(0, 36px, 0);
}

ul.menu li:before {
  content: '';
  @apply absolute inset-0 left-auto m-auto h-full w-0 overflow-hidden bg-a-yellow;

  transition: width 0.14s ease-out;
}

ul.menu li:after {
  @apply absolute right-0 left-0 bottom-0 m-auto overflow-hidden text-a-charcoal opacity-0;

  content: attr(data-text);

  transform: translate(-24px, 6px);
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
}

.open ul.menu li {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}

.open ul.menu li:nth-child(1) {
  transition-delay: 0.75s;
}

.open ul.menu li:nth-child(2) {
  transition-delay: 0.85s;
}

.open ul.menu li:nth-child(3) {
  transition-delay: 0.95s;
}

.open ul.menu li:nth-child(4) {
  transition-delay: 1.05s;
}

.open ul.menu li:nth-child(5) {
  transition-delay: 1.15s;
}

.open ul.menu li:nth-child(6) {
  transition-delay: 1.25s;
}

.open ul.menu li:nth-child(7) {
  transition-delay: 1.35s;
}

.open ul.menu li:nth-child(8) {
  transition-delay: 1.45s;
}

.open ul.menu li:nth-child(9) {
  transition-delay: 1.55s;
}
.open ul.menu li:nth-child(10) {
  transition-delay: 1.65s;
}
.open ul.menu li:nth-child(11) {
  transition-delay: 1.75s;
}
.open ul.menu li:nth-child(12) {
  transition-delay: 1.85s;
}

.open article {
  transform: scale(0.92);
  transition: transform 0.2s 0.41s ease-out;
}

@keyframes menu-animation {
  0% {
    opacity: 0;
    transform: scale(0.04) translateY(300%);
  }

  40% {
    transform: scale(0.04) translateY(0);
    transition: ease-out;
  }

  40% {
    transform: scale(0.04) translateY(0);
  }

  60% {
    opacity: 1;
    transform: scale(0.02) translateY(0px);
  }

  61% {
    transform: scale(0.04);
  }

  99.9% {
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
  }

  100% {
    transform: scale(2);
    height: 100%;
    padding-bottom: 0;
    border-radius: 0;
  }
}
</style>

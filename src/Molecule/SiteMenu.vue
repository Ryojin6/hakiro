<template>
  <nav class="text-white xl:w-full">
    <div class="z-40 flex h-full w-full items-center">
      <div
        class="custom-transition textSmall z-30 hidden w-full items-center justify-end space-x-6 font-bold xl:flex xl:space-x-10"
      >
        <AtomSiteMenuItem
          v-for="item in links"
          :key="item.label"
          :item="item"
          class="py-10 font-bold transition-all duration-300 ease-in-out scrolled:py-8"
        />
      </div>

      <!-- <transition name="slide-fade">
        <div
          v-if="toggled"
          class="absolute inset-0 top-32 z-50 flex h-screen w-full flex-col space-y-4 xl:shadow-xl"
          @click="toggled = !toggled"
        >
          <AtomSiteMenuItem
            v-for="item in links"
            :key="item.label"
            :item="item"
            class="text-white"
          />
        </div>
      </transition> -->
      <button
        class="focus:outline-none relative z-50 block"
        @click="toggled = !toggled"
      >
        <AtomIconHamburger :class="{ 'open text-white': toggled }" />
      </button>
    </div>

    <div
      class="fixed inset-0 h-full w-full transition-all duration-500 ease-in-out"
    />
  </nav>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },

    homepage: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      links: [
        {
          label: 'About Super Kawaii',
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
      toggleSearch: false,
    };
  },
  methods: {
    closeMenu() {
      this.toggled = false;
    },
  },
};
</script>

<style scoped>
.outer-menu {
  position: fixed;
  top: 10vh;
  left: 0;
  z-index: 1;
}
.outer-menu .checkbox-toggle {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 60px;
  height: 60px;
  opacity: 0;
}
.outer-menu .checkbox-toggle:checked + .hamburger > div {
  transform: rotate(135deg);
}
.outer-menu .checkbox-toggle:checked + .hamburger > div:before,
.outer-menu .checkbox-toggle:checked + .hamburger > div:after {
  top: 0;
  transform: rotate(90deg);
}
.outer-menu .checkbox-toggle:checked + .hamburger > div:after {
  opacity: 0;
}
.outer-menu .checkbox-toggle:checked ~ .menu {
  pointer-events: auto;
  visibility: visible;
}
.outer-menu .checkbox-toggle:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: 0.75s;
}
.outer-menu .checkbox-toggle:checked ~ .menu > div > div {
  opacity: 1;
  transition: opacity 0.4s ease 0.4s;
}
.outer-menu .checkbox-toggle:hover + .hamburger {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
}
.outer-menu .checkbox-toggle:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}
.outer-menu .hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 0.5em 1em;
  background: rgba(33, 150, 243, 0.75);
  border-radius: 0 0.12em 0.12em 0;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.outer-menu .hamburger > div {
  position: relative;
  flex: none;
  width: 100%;
  height: 2px;
  background: #fefefe;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.outer-menu .hamburger > div:before,
.outer-menu .hamburger > div:after {
  content: '';
  position: absolute;
  z-index: 1;
  top: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: inherit;
  transition: all 0.4s ease;
}
.outer-menu .hamburger > div:after {
  top: 10px;
}
.outer-menu .menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  visibility: hidden;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  outline: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}
.outer-menu .menu > div {
  width: 200vw;
  height: 200vw;
  color: #fefefe;
  background: rgba(41, 98, 255, 0.97);
  border-radius: 50%;
  transition: all 0.4s ease;
  flex: none;
  transform: scale(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.outer-menu .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
  overflow-y: auto;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.outer-menu .menu > div > div > ul {
  list-style: none;
  padding: 0 1em;
  margin: 0;
  display: block;
  max-height: 100vh;
}
.outer-menu .menu > div > div > ul > li {
  padding: 0;
  margin: 1em;
  font-size: 24px;
  display: block;
}
.outer-menu .menu > div > div > ul > li > a {
  position: relative;
  display: inline;
  cursor: pointer;
  transition: color 0.4s ease;
}
.outer-menu .menu > div > div > ul > li > a:hover {
  color: #e5e5e5;
}
.outer-menu .menu > div > div > ul > li > a:hover:after {
  width: 100%;
}
.outer-menu .menu > div > div > ul > li > a:after {
  content: '';
  position: absolute;
  z-index: 1;
  bottom: -0.15em;
  left: 0;
  width: 0;
  height: 2px;
  background: #e5e5e5;
  transition: width 0.4s ease;
}
</style>

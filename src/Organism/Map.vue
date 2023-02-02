<template>
  <div class="">
    <div class="relative">
      <g-image src="/bg.svg" class="z-10 w-full" />
      <div class="absolute inset-0 grid h-full w-full grid-cols-3">
        <button
          type=" button"
          @click="showLore = true"
          class="group"
          @mouseover="hovered = true"
          @mouseleave="hovered = false"
        >
          <span
            class="pin-center custom-transition absolute z-10 hidden w-full group-hover:block"
          >
            <img src="/lore.svg" alt="" class="w-full" />
          </span>
        </button>
        <button
          type=" button"
          class="group"
          @click="showGallery = true"
          @mouseover="hovered = true"
          @mouseleave="hovered = false"
        >
          <span
            class="pin-center custom-transition absolute z-10 hidden w-full group-hover:block"
          >
            <img src="/gallery.svg" alt="" class="w-full" />
          </span>
        </button>
        <button
          type=" button"
          class="group"
          @click="showFAQ = true"
          @mouseover="hovered = true"
          @mouseleave="hovered = false"
        >
          <span
            class="pin-center custom-transition absolute z-10 hidden w-full group-hover:block"
          >
            <img src="/faq.svg" alt="" class="w-full" />
          </span>
        </button>
      </div>
    </div>
    <transition name="fade">
      <div v-if="hovered" class="fixed inset-0 h-full w-full bg-black/80" />
    </transition>
    <transition name="fade">
      <div
        v-show="showLore"
        class="pin-center absolute z-20 flex h-full w-full items-center justify-center px-4 py-1"
      >
        <div class="absolute inset-0 h-full w-full">
          <img src="/eclipse.png" alt="" class="h-full w-full object-cover" />
        </div>
        <div
          class="prose-xl relative mx-auto max-w-7xl bg-black/50 p-10 text-white"
        >
          <button
            class="absolute -top-10 right-1 z-50 text-4xl"
            @click="showLore = false"
          >
            X
          </button>
          <p>
            Under Mt. Hakiro lies the sleeping malicious god, Akujin. During the
            celebration of a new technology which would allow the freedom of
            all, Akujin was awoken from his century long slumber which has
            resulted in the destruction of the town which laid to the East of
            the sacred mountain. In the wake of this destruction the sacred
            Hakiro dragons which have been living in tranquility have now chosen
            to leave their haven and aid the citizens and defend the towns
            people with their own secret weapon...
          </p>
          <strong>
            Will is stand a match against Akujin?<br />
            Will you stand up and fight the righteous battle?
          </strong>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="showGallery"
        class="pin-center absolute z-20 flex h-full w-full items-center justify-center px-4 py-1"
      >
        <div class="absolute inset-0 h-full w-full">
          <img src="/clouds.png" alt="" class="h-full w-full object-cover" />
        </div>
        <div class="relative z-20 grid grid-cols-4">
          <button
            class="absolute -top-10 right-1 z-50 text-4xl"
            @click="showGallery = false"
          >
            X
          </button>
          <img src="/1.png" alt="" />
          <img src="/2.png" alt="" />
          <img src="/3.png" alt="" />
          <img src="/1.png" alt="" />
          <img src="/2.png" alt="" />
          <img src="/3.png" alt="" />
          <img src="/2.png" alt="" />
          <img src="/3.png" alt="" />
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div
        v-show="showFAQ"
        class="pin-center absolute z-20 flex h-full w-full items-center justify-center px-4 py-1"
      >
        <div class="absolute inset-0 h-full w-full">
          <img
            src="/underwater.png"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
        <div class="relative w-full max-w-5xl">
          <button
            class="absolute -top-10 right-1 z-50 text-4xl"
            @click="showFAQ = false"
          >
            X
          </button>
          <OrganismFAQ />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },

    hideMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showLore: false,
      hovered: false,
      showGallery: false,
      showFAQ: false,
    };
  },
};
</script>

<style>
.gradient {
  background: linear-gradient(-45deg, #ffc11f, #a10100, #ea990d, #cb3c03);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

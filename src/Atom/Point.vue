<template>
  <div>
    <div
      class="group absolute text-xs md:text-base"
      :style="{ left: `${left}%`, bottom: `${bottom}px` }"
    >
      <div class="flex items-center">
        <div class="w-32 bg-black py-4 text-white md:px-3" @click="show = true">
          {{ number }}
        </div>
      </div>
    </div>
    <transition name="slide-x-fade">
      <div
        v-show="show"
        class="pin-center absolute z-20 h-full w-full whitespace-nowrap bg-black px-4 py-1"
      >
        <div class="">
          {{ text }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true,
    },
    left: {
      type: Number,
      default: 0,
    },
    bottom: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

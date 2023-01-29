<template>
  <AtomSection
    id="faq"
    v-aos
    class="relative bg-a-charcoal/80 p-4 font-mono font-bold text-white"
  >
    <AtomInner>
      <AtomAnimate>
        <MoleculeAccordionCard
          class=""
          v-for="item in faq"
          :key="item.id"
          :title="item.title"
          :description="item.description"
        />
      </AtomAnimate>
    </AtomInner>
  </AtomSection>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          title: 'Lorem Ipsum',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex,
      facilis exercitationem sapiente saepe id dolor facere commodi dolores
      provident aspernatur aliquam sint maxime ea? Perferendis corrupti delectus
      blanditiis consequuntur!
        `,
        },
        {
          title: 'Lorem Ipsum',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex,
      facilis exercitationem sapiente saepe id dolor facere commodi dolores
      provident aspernatur aliquam sint maxime ea? Perferendis corrupti delectus
      blanditiis consequuntur!
        `,
        },
        {
          title: 'Lorem Ipsum',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex,
      facilis exercitationem sapiente saepe id dolor facere commodi dolores
      provident aspernatur aliquam sint maxime ea? Perferendis corrupti delectus
      blanditiis consequuntur!
        `,
        },
        {
          title: 'Lorem Ipsum',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex,
      facilis exercitationem sapiente saepe id dolor facere commodi dolores
      provident aspernatur aliquam sint maxime ea? Perferendis corrupti delectus
      blanditiis consequuntur!
        `,
        },
      ],
    };
  },
};
</script>

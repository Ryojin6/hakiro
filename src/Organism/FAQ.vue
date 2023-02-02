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
          title: 'Hakiro`s Vision',
          description: `We're looking to create an environment where people can meet other 
          like minded individuals may come together and form new bond and experience with
           one another while also providing light hearted art style.`,
        },
        {
          title: 'What is Supply of Hakiro?',
          description: `There will be 2222 Hakiro's

        `,
        },
        {
          title: 'When Will Hakiro Mint?',
          description: `TBA
        `,
        },
        {
          title: 'What is Mint Price?',
          description: `TBA

        `,
        },
        {
          title: 'What Contract will Hakiro Implement?',
          description: `The Hakiro smart contract will be using a gas optimized version of ERC-721

        `,
        },
      ],
    };
  },
};
</script>

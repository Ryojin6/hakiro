<template>
  <div id="form" class="font-mont">
    <form
      name="wallets"
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="wallets" />
      <div class="flex flex-col items-center justify-center pb-10">
        <div class="w-full space-y-8">
          <FormInput
            id="text"
            name="text"
            type="text"
            required
            label-class=" pl-2 uppercase"
            >Wallet address*</FormInput
          >
        </div>
      </div>
      <div data-netlify-recaptcha="true" />
      <div class="mt-4 flex justify-end">
        <button
          type="submit"
          class="custom-transition text-a-brown border border-a-charcoal bg-a-charcoal px-6 py-2 font-sans text-sm font-bold uppercase text-a-beige hover:bg-transparent hover:text-a-charcoal"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

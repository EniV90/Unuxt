import { errorMessages } from "vue/compiler-sfc"

export default defineNuxtPlugin(() => {
  return{
    provide: {
      successMessage: (message: String) => 'Error :' + message
    }
  }
})
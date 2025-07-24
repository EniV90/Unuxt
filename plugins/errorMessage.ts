import { errorMessages } from "vue/compiler-sfc"

export default defineNuxtPlugin(() => {
  return{
    provide: {
      errorMessage: (message: String) => 'Error :' + message
    }
  }
})
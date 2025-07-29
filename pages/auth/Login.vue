<script setup>
definePageMeta({
  layout: "auth",
});

const loginInput = ref({
  email: "",
  password: "",
});

const loading = ref(false); // disable laoding after sending request
const config = useRuntimeConfig();

async function loginUser() {
  try {
    loading.value = true;
    const res = await $fetch(config.public?.API_BASE_URL + "/login", {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },

      method: "POST",
      body: JSON.stringify(loginInput.value),
    });
    loading.value = false;

    console.log(res);
    
    //store token in local storage
    localStorage.setItem(
      "userData",
      JSON.stringify({
        user: res?.user,
        token: res?.token,
      })
    );
  } catch (error) {
    loading.value = false;
    const status = error?.response?.status;
    const data = error?.response?._data;
    if (status === 422 || status === 401) {
      // Laravel-style validation error
      if (data?.errors) {
        for (const field in data.errors) {
          const messages = data.errors[field];
          messages.forEach((msg) => showErrorMessage(msg));
        }
      } else if (typeof data === "object") {
        for (const key in data) {
          showErrorMessage(
            typeof data[key] === "string"
              ? data[key]
              : JSON.stringify(data[key])
          );
        }
      } else {
        showErrorMessage("Validation failed.");
      }
    } else {
      showErrorMessage("Something went wrong.");
    }
  }
}
</script>

<template>
  <div class="bg-slate-100 h-screen">
    <div class="flex justify-between">
      <div></div>
      <div class="w-[300px] mt-20">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl">Login</h1>
          <input
            v-model="loginInput.email"
            type="text"
            name=""
            placeholder="E-mail"
            id=""
            class="py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />
          <input
            v-model="loginInput.password"
            type="password"
            name=""
            placeholder="Password"
            id=""
            class="py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />

          <NuxtLink
            to="/auth/register"
            class="rounded-md text-indigo-500 text-sm font-semibold"
          >
            create an account
          </NuxtLink>
          <button
            @click="loginUser"
            :disabled="loading"
            class="rounded-md text-white px-4 py-2 bg-indigo-500 text-sm font-semibold"
          >
            {{ loading ? "login in..." : "Login" }}
          </button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

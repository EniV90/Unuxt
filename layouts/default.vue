<template>
  <div>
    <div>
      <ul>
        <li>
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/About"> About </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/Contact"> Contact </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/auth/login"> Login </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/auth/register"> Register </NuxtLink>
        </li>
      </ul>
    </div>

    <div>
      <slot>Something should be here</slot>
    </div>

    <div style="background: gray">
      <h1>This is a footer</h1>
    </div>
  </div>
</template>

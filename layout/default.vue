<template>
  <div>
    <div>
      <ul>
        <li>
          <NuxtLink to=" "> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to=" "> Articles </NuxtLink>
        </li>
        <li>
          <NuxtLink to=" "> Register </NuxtLink>
        </li>
      </ul>
    </div>

    <div>
      <slot>Something should be here</slot>
    </div>

    <div>
      <h1>This is a footer</h1>
    </div>
  </div>
</template>

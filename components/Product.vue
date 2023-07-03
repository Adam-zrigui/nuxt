<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card card-compact w-96 bg-base-100 shadow-xl gap-1">
      <div class="card-body">
        <figure><img :src="product.image" alt=""></figure>
        <h2 class="card-title">{{ product.title }}</h2>
        <NuxtLink :to="`/products/${product.id}`">view details</NuxtLink>
      </div>
  </div>
</template>

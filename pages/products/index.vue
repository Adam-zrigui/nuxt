<script setup>
const { data}= await useFetch("https://fakestoreapi.com/products")
</script>
<template>
    <div class="flex flex-wrap">
<div  v-for="p in data" :key="p.id">
<Product :product="p" />
</div>
    </div>
</template>

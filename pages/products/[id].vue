<script setup>
const {id } = useRoute().params
const url = "https://fakestoreapi.com/products/" + id
const { data : p} = await useFetch(url , {key : id})
if (!p.value) throw createError({ statusCode:404 , statusMessage:"product not found" , fatal:true})
</script>
<template>
<Setter :product="p"/>
</template>
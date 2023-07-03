<template>
    <section class="card">
<div class="card-body">
    <h4 class="card-title">{{ error.statusCode }} | {{ error.message }}</h4>
    <button class="btn btn-error" @click="handler">return to the home page</button>
</div>
    </section>
</template>

<script setup>
defineProps(['error'])
const handler = () => clearError({ redirect: '/' })
</script>

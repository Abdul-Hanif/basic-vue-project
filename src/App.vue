<script setup>
import { RouterView } from 'vue-router'
import TheNavigation from './views/TheNavigation.vue';
</script>

<template>
	<the-navigation></the-navigation>
	<RouterView />
</template>

<style>
	body {
		background-color: linen;
	}
</style>

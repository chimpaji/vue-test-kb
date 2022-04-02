<template>
  <button @click="submit" class="bg-black text-white py-2 px-6 rounded-md">
    {{ loading ? "Loading" : "Submit" }}
  </button>
</template>

<script>
export default {
  props: ["submit", "loading"],
};
</script>

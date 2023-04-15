<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="x in cart" :key="x._id">{{ x.name }} - {{ x.price }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>

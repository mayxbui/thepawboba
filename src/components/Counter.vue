<template>
  <div class="container">
    <button @click="minus">-</button>
    <p>{{ quantity }}</p>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  name: "OrderQuantity",

  props: {
    quantity: {
      type: Number,
      default: 1
    }
  },

  emits: ["update:quantity"],

  methods: {
    add() {
      this.$emit("update:quantity", this.quantity + 1);
    },
    minus() {
      if (this.quantity > 1) {
        this.$emit("update:quantity", this.quantity - 1);
      }
    }
  }
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: 15px;
    width: fit-content;
}

p{
    font-weight: 650;
    width: 32px;
    text-align: center;
    font-size: 1.2rem;

}

button{
    background: var(--color-primary);
    width: 32px;
    height: 32px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    margin-bottom: 0px !important;
    padding: 0px !important;
}

button:hover{
  background: var(--color-primary-accent-1);
}
</style>
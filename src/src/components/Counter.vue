<template>
    <div class="container">
        <button @click="minus">-</button>
        <p>{{ quantity }}</p>
        <button @click="add">+</button>
    </div>
</template>

<script>
export default{
    name: "OrderQuantity",
    props: {
        quantity: {
        type: Number,
        default: 1
        }
    },
    methods:{
        add(){
            this.$emit("update", this.quantity+1);
        },
        minus(){
           if(this.quantity>1){
            this.$emit("update", this.quantity-1);
           }
        }
    }
};
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 15px;
    width: content;
}

p{
    font-weight: 800;
}
button{
    background: var(--color-primary);
    width: 32px;
    height: 32px;
    font-size: 1rem;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
}
</style>

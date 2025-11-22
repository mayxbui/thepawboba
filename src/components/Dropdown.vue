<template>
    <div class="container">
        <button
            @click="openDropdown = !openDropdown"
            class="dropdown-box"
        >
            {{ modelValue || placeholder }}
            <span
                class="pi pi-chevron-down"
                :class="openDropdown ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
                style="color: var(--color-primary)"
            ></span>
        </button>
    </div>

    <div v-show="openDropdown" class="option-box">
        <input
            type="text"
            v-model="searchOption"
            placeholder="Search"
            class="dropdown-search"
        />

        <div
            v-for="item in filterOption"
            :key="item"
            @click="selectOption(item)"
            class="dropdown-option"
        >
            {{ item }}
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
    options: Array,
    modelValue: String,
    placeholder: String
});

const emit = defineEmits(["update:modelValue"]);

const openDropdown = ref(false);
const searchOption = ref("");

function selectOption(item) {
    emit("update:modelValue", item);
    searchOption.value = "";
    openDropdown.value = false;
}

const filterOption = computed(() =>
    props.options.filter(item =>
        item.toLowerCase().includes(searchOption.value.toLowerCase())
    )
);
</script>

<style scoped>
.container{
    position: relative;
}
.dropdown-box{
    all: unset;
    box-sizing: border-box;
    border: 1.5px solid var(--color-primary);
    border-radius: 3px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    padding: 10px 10px;
    cursor: pointer;
    position: relative;
    font-size: 16px;
}

.dropdown-box span{
    display: flex;
    align-content: start;
    align-items: start;
    padding-right: 5px;
    scale: 0.9;
}

.option-box{
    border: 1.5px solid var(--color-primary);
    border-radius: 3px;
    background: var(--color-background);
    padding: 10px 0px 10px 10px;
    font-size: 16px;
    position:absolute;
    z-index: 999;
    width: 29.3%;
}

.dropdown-search{
    background: none;
    width: 95%;
    padding: 3px 0px 6px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1.5px solid grey;
    text-align: start;
    font-family: var(--font-paragraph);
    font-size: 14px;
}

.dropdown-option{
    align-content: center;
    align-items: start;
    gap: 10px;
    cursor: pointer;
    position: relative;
    padding: 5px 0px;
}

.pi-chevron-down{
    min-width: 50px;
    justify-content: end !important;
}

</style>
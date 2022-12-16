<script setup>
import { ref } from 'vue'

defineProps({
    img: String,
    title: String,
})

const count = ref(0)
</script>

<template>
    <!--Card -->
    <div class="w-full overflow-hidden">
        <div class="thumb-container w-full rounded-lg overflow-hidden">
            <img class="w-full aspect-video bg-slate-500 bg-opacity-10" :src="img" />
        </div>
        <div class="px-1 py-3">
            <div class="font-semibold text-lg md:text-base mb-2">{{ title }}</div>
        </div>
    </div>

</template>


<script type="text/javascript">
export default {
    name: "CardCourse",
};
</script>
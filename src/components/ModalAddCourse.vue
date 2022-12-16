<template>


    <Dialog as="div" @close="closeModal" class="relative z-50">
        <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25"></div>
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
            <div
                class="flex min-h-full items-center justify-center p-4 text-center">
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95">

                    <DialogPanel
                        class="w-full max-w-xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <DialogTitle
                            as="h3"
                            class="text-lg font-medium leading-6 text-gray-900">
                            Adicionar curso
                        </DialogTitle>
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">
                                Tem certeza que deseja excluir esta categoria e os produtos vinculados a ela?
                                Esta ação é irreversível.
                            </p>
                        </div>

                        <div class="mt-4 flex items-center justify-end">
                            <button
                                type="button"
                                class="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300"
                                @click="closeModal">
                                Cancelar
                            </button>

                            <button
                                type="button"
                                class="ml-1 inline-flex justify-center rounded-md border border-transparent bg-pepper-primary px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                @click="closeModal">
                                Confirmar exclusão
                            </button>
                        </div>
                    </DialogPanel>

                </TransitionChild>
            </div>
        </div>
    </Dialog>




</template>


<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
</script>




<script type="text/javascript">


export default {
    name: "ModalAddCourse",

    props: {
        open: ref(false)
    }
};
</script>

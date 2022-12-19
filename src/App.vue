<template>

  <div class="h-screen w-screen">

    <div class="relative min-h-screen md:flex bg-gray-900" data-dev-hint="container">
      <input type="checkbox" id="menu-open" class="hidden" />

      <label for="menu-open" class="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>


      <Sidebar />

      <main id="content" class="flex-1 py-6 md:pr-8 md:pl-80 md:pt-20 bg-gray-900">

        <div class="px-4 py-6 sm:px-0 lg:py-10 max-w-7xl mx-auto">

          <div class="lg:flex lg:justify-between pb-4">

            <!-- Header -->
            <Header title="Meus conteúdos"></Header>

            <!-- Action buttons -->
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
              <span class="block">
                <button type="button" class="inline-flex items-center rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                  <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                  Adicionar categoria
                </button>
              </span>

              <span class="ml-1">
                <button
                  type="button"
                  @click="openModal"
                  class="inline-flex items-center rounded-md border border-pepper-primary bg-pepper-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-danger-700 focus:outline-none focus:ring-1 focus:ring-danger-500 focus:ring-offset-1">
                  <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                  Adicionar curso
                </button>
              </span>
            </div>
          </div>


          <!-- Empty state -->
          <div class="bg-gray-800 rounded-md p-5 w-full border border-gray-700 mt-6">
            <div class="flex space-x-3 justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-gray-500 h-4 w-4">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
              </svg>
              <div class="leading-tight text-sm md:text-base text-gray-200 font-medium">Adicione uma categoria para começar a incluir seus conteúdos.</div>
            </div>
          </div>

          <div class="py-10">
            <div class="md:flex md:items-center mb-8 lg:mb-10">

              <!-- Category name -->
              <h3 class="font-bold text-white text-xl md:w-auto mb-3 md:mb-0">Nome da categoria</h3>

              <!-- Action Buttons -->
              <div class="inline-flex md:mt-1">
                <!-- Button -->
                <button type="button"
                  class="md:ml-6 lg:ml-8 inline-flex items-center rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1" style="width: .8rem;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                  <span>Editar categoria</span>
                </button>
                <!-- Button -->
                <button type="button"
                  class="ml-1 inline-flex items-center rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1" style="width: .9rem;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  <span>Excluir categoria</span>
                </button>
              </div>

            </div>

            <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
              <CardCourse img="https://nerdreactor.com/wp-content/uploads/2017/09/The-Walking-Dead-_S8_14x48BB_REF1-thumb.jpg" title="Teste" />
              <CardCourse img="https://wallpaperset.com/w/full/3/f/d/22523.jpg" title="House M.D" />
              <CardCourse img="https://ostatniatawerna.pl/wp-content/uploads/2022/07/twd.jpg" title="Walking dead season 7" />

            </div>

          </div>


        </div>

      </main>
    </div>


    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-30"></div>
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
                class="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all overflow-visible">

                <DialogTitle
                  as="h3"
                  class="text-lg font-bold leading-6 text-gray-800">
                  Adicionar curso
                </DialogTitle>
                <div class="mt-6">

                  <!-- Título -->
                  <div class="mb-4">
                    <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                      Título do curso/produto:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Digite o nome"
                      class="border-primary text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                  </div>

                  <!-- Categoria -->
                  <div class="mb-4">
                    <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                      Selecione a categoria:
                    </label>
                    <Combobox v-model="selected">
                      <div class="relative">
                        <div
                          class="relative w-full cursor-default border overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                          <ComboboxInput
                            class="w-full border-none rounded-lg bg-white py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                            :displayValue="(cat) => cat.name"
                            @change="query = $event.target.value" />
                          <ComboboxButton
                            class="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              class="h-5 w-5 text-gray-400"
                              aria-hidden="true" />
                          </ComboboxButton>
                        </div>
                        <TransitionRoot
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          @after-leave="query = ''">
                          <ComboboxOptions
                            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <div
                              v-if="filteredCategories.length === 0 && query !== ''"
                              class="relative cursor-default select-none py-2 px-4 text-gray-700">
                              Nenhum resultado encontrado
                            </div>

                            <ComboboxOption
                              v-for="cat in filteredCategories"
                              as="template"
                              :key="cat.id"
                              :value="cat"
                              v-slot="{ selected, active }">
                              <li
                                class="relative cursor-default select-none py-2 pl-10 pr-4"
                                :class="{
                                  'bg-teal-600 text-white': active,
                                  'text-gray-900': !active,
                                }">
                                <span
                                  class="block truncate"
                                  :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                  {{ cat.name }}
                                </span>
                                <span
                                  v-if="selected"
                                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                                  :class="{ 'text-white': active, 'text-teal-600': !active }">
                                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                              </li>
                            </ComboboxOption>
                          </ComboboxOptions>
                        </TransitionRoot>
                      </div>
                    </Combobox>
                  </div>

                  <!-- Descrição -->
                  <div class="mb-4">
                    <label for="about" class="block mb-2 text-sm font-medium text-gray-700">Descrição:</label>
                    <div class="mt-1">
                      <textarea id="about" name="about" rows="3" class="border-primary bg-white text-gray-700 text-sm placeholder-gray-400 focus:border-indigo-500 active:border-primary w-full rounded-md border-[1.5px] py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" placeholder="Como você descreve este curso para os seus alunos?"></textarea>
                    </div>
                    <p class="mt-1 mb-2 text-xs text-gray-500">Máximo 500 caracteres.</p>
                  </div>

                  <!-- Imagem de capa -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Imagem de capa: <span class="text-gray-500 text-xs ml-1">(Opcional)</span></label>
                    <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-xs md:text-sm text-gray-600">
                          <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Clique para fazer upload</span>
                          </label>
                          <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                          <p class="pl-1">ou arraste para cá</p>
                        </div>
                        <p class="text-xs text-gray-500">PNG, JPG, GIF, WEBP (até 5mb)</p>
                      </div>
                    </div>
                  </div>

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
                    Adicionar
                  </button>
                </div>
              </DialogPanel>

            </TransitionChild>
          </div>
        </div>
      </Dialog>

    </TransitionRoot>

  </div>


</template>






<script setup>
import { ref, computed } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,

  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,

} from '@headlessui/vue'

import { CheckIcon, ChevronUpDownIcon, PlusIcon } from '@heroicons/vue/20/solid'



// Course list
/* const courses = [

  { id: 1, name: 'Categoria Empreendedorismo', img: 'https://images.indianexpress.com/2022/06/Jailer-concept-poster-1200by667.jpg' },

] */



// Modal 'Add Course'
const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true;
}



// Input combobox
const category = [
  { id: 1, name: 'Categoria Empreendedorismo' },
  { id: 2, name: 'Receitas top para emagrecer' },
  { id: 3, name: 'Curso de programação XGH' },
]

let selected = ref(category[0])


let query = ref('')

let filteredCategories = computed(() =>
  query.value === ''
    ? category
    : category.filter((cat) =>
      cat.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.value.toLowerCase().replace(/\s+/g, ''))
    )
)
</script>


<script type="text/javascript">

import { ref } from 'vue'
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import CardCourse from "./components/CardCourse.vue";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'


export default {
  components: {
    Header,
    Sidebar,
    CardCourse

  },

  methods: {
    show: function (args) {
      args.preventFocus = true;
    },
    openModal: function (args) {
      args.preventFocus = true;
    }
  }



};
</script>

<script setup>
import { ref } from 'vue'

defineProps({



})

const count = ref(0)
</script>


<template>

    <div id="navbar-container" class="flex flex-col w-screen md:w-auto md:flex-row md:h-screen md:fixed">

        <!-- Header On MOBILE -->
        <header class="bg-gray-800 flex justify-between w-full md:hidden" data-dev-hint="mobile menu bar">
            <!-- Logo -->
            <div class="block p-4">
                <img src="https://peppermembers.com/img/logotipo-white-pepper.52ff1608.png" style="height: 24px;" />
            </div>

            <label for="menu-open" id="mobile-menu-button" class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 text-gray-500 rounded-md">
                <svg id="menu-open-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg id="menu-close-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </label>
        </header>

        <aside id="sidebar" class="bg-gray-900 border border-transparent border-r-gray-700 md:h-full h-full md:w-72 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out flex flex-col justify-between overflow-y-auto z-50">
            <div class="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
                <!-- Logo -->
                <div class="flex items-center justify-center space-x-2 px-4">
                    <img src="https://peppermembers.com/img/logotipo-white-pepper.52ff1608.png" style="height: 24px;" />
                </div>

                <nav id="sidebarMenu" class="pt-2">

                    <a href="#" class="flex items-center space-x-3 py-3 px-6 transition duration-200 hover:bg-gray-800 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                            <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <span>Meus conteúdos</span>
                    </a>

                    <a href="#" class="flex items-center space-x-3 py-3 px-6 transition duration-200 hover:bg-gray-800 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                        <span>Certificados</span>
                    </a>

                    <a href="#" class="flex items-center space-x-3 py-3 px-6 transition duration-200 hover:bg-gray-800 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span>Meu perfil</span>
                    </a>

                    <span class="text-xs font-bold tracking-wide mt-8 mb-4 block px-6 uppercase text-gray-300">Administrador</span>

                    <a href="#" class="flex items-center space-x-3 py-3 px-6 transition duration-200 hover:bg-gray-800 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Adicionar</span>
                    </a>

                    <a href="#" class="flex items-center space-x-3 py-3 px-6 transition duration-200 hover:bg-gray-800 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        <span>Gerenciar alunos</span>
                    </a>

                    <a href="#" class="flex items-center space-x-3 py-3 px-6 transition duration-200 hover:bg-gray-800 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <span>Integrações</span>
                    </a>

                    <a href="#" class="flex items-center space-x-3 py-3 px-6 transition duration-200 hover:bg-gray-800 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Configurações</span>
                    </a>

                </nav>
            </div>

            <nav class="p-6 pt-4">
                <button type="button" class="w-full inline-flex justify-center items-center rounded-md border border-pepper-primary bg-pepper-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-danger-700 focus:outline-none focus:ring-1 focus:ring-danger-500 focus:ring-offset-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <span>Desconectar</span>
                </button>
            </nav>
        </aside>

        <!-- Header on DESKTOP -->
        <header class="bg-gray-800 justify-end w-full h-auto hidden md:flex md:w-screen md:pl-72 w-3/4 absolute left-0">
            <!-- Logo -->
            <div class="block p-4">
                <h6 class="font-bold text-sm">Olá, Gilney</h6>
            </div>

            <div class="relative pr-4 mt-2">
                <!-- Dropdown toggle button -->
                <button type="button" class="flex items-center p-0 rounded-full bg-gray-800 text-sm" aria-expanded="false" aria-haspopup="true" @click="show = !show">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    <svg class="w-5 h-5 mt-1 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill="currentColor" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div v-show="show" class="absolute py-2 mt-2 right-1/3 origin-top-left rounded-md bg-white shadow-xl w-44">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>
            </div>
        </header>

    </div>
</template>


<style scoped>
#sidebarMenu a {
    font-weight: 500;
    color: #dfdfdf;
}

#sidebar {
    --tw-translate-x: -100%;
}

#menu-close-icon {
    display: none;
}

#menu-open:checked~#navbar-container #sidebar {
    --tw-translate-x: 0;
}

#menu-open:checked~* #mobile-menu-button {
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}

#menu-open:checked~* #menu-open-icon {
    display: none;
}

#menu-open:checked~* #menu-close-icon {
    display: block;
}

@media (min-width: 768px) {
    #sidebar {
        --tw-translate-x: 0;
    }
}
</style>


<script>

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

export default {
    name: "Sidebar",
    data() {
        return {
            show: false,
        };
    },
};
</script>
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/Login.vue';
import ForgotPasswordView from '../views/ForgotPassword.vue';
import MemberAreasView from '../views/MemberAreas/Index.vue';
import MemberAreaView from '../views/MemberAreas/Area/Index.vue';
import ProfileView from '../views/MemberAreas/Area/pages/Profile.vue';
import ProductsView from '../views/MemberAreas/Area/pages/Products.vue';
import ContentsView from '../views/MemberAreas/Area/pages/Contents.vue';
import SettingsView from '../views/MemberAreas/Area/pages/Settings.vue';
import ContactView from '../views/MemberAreas/Area/pages/Contact.vue';
import ClassroomView from '../views/MemberAreas/Area/pages/Classroom.vue';
import CertificatesView from '../views/MemberAreas/Area/pages/Certificates.vue';
import CreateCertificateView from '../views/MemberAreas/Area/pages/CreateCertificate.vue';
import ManageStudentsView from '../views/MemberAreas/Area/pages/ManageStudents.vue';
import IntegrationsView from '../views/MemberAreas/Area/pages/Integrations.vue';
import IntegrationPepperView from '../views/MemberAreas/Area/pages/integrations/Pepper.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/forgot-password',
    name: 'Forgot Password',
    component: ForgotPasswordView
  },
  {
    path: '/:catchAll(.*)', redirect:'Login'
  },
  {
    path: '/memberareas',
    name: 'MemberAreas',
    component: MemberAreasView
  },
  {
    path: '/:area',
    component: MemberAreaView,
    children: [
      {
        path: '/:area',
        component: ProductsView
      },
      {
        path: '/:area/:produto',
        component: ContentsView
      },
      {
        path: '/:area/:produto/:modulo/:conteudo',
        component: ClassroomView
      },
      {
        path: '/:area/certificados',
        component: CertificatesView
      },
      {
        path: '/:area/criar-certificado',
        component: CreateCertificateView
      },
      {
        path: '/:area/perfil',
        component: ProfileView
      },
      {
        path: '/:area/contato',
        component: ContactView
      },
      {
        path: '/:area/alunos',
        component: ManageStudentsView
      },
      {
        path: '/:area/integracoes',
        component: IntegrationsView
      },
      {
        path: '/:area/integracoes/pepper',
        component: IntegrationPepperView
      },
      {
        path: '/:area/configuracoes',
        component: SettingsView
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  if (to.name == 'Login') {
    if (localStorage.getItem('token')) {
      return { name: 'MemberAreas' }
    }
  }
});

export default router

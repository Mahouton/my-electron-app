import HomeView from '../pages/HomePage.vue'
import DashBoardPage from '../pages/DashBoardPage.vue'
import MainLayout from '../components/layouts/MainLayout.vue'
import SimpleLayout from '../components/layouts/SimpleLayout.vue'
import PartnersPage from '../pages/PartnersPage.vue'
import AnnexesPage from '../pages/AnnexesPage.vue'

const routes = [
  {
    path: '',
    component: SimpleLayout,
    redirect: { name: 'home' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView,
        meta: {
          title: 'Home'
        }
      }
    ]
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'tableau-de-bord', // Suppression du '/'
        name: 'dashboard',
        component: DashBoardPage,
        meta: {
          title: 'Tableau de bord'
        }
      },
      {
        path: 'partenaires', // Suppression du '/'
        name: 'partners',
        component: PartnersPage,
        meta: {
          title: 'Gestion des entrepises (partenaires)'
        }
      },
      {
        path: 'partenaire/:id/annexes',
        name: 'partnerAnnexes',
        component: AnnexesPage,
        meta: {
          title: 'Gestion des annexes'
        }
      }
    ]
  }
]

export default routes

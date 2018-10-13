import App from './App';
import Home from './containers/Home';
import Translation from './containers/Translation';
import NotFound from './containers/NotFound';

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home'
      }, {
        path: '/translation',
        component: Translation,
        loadData: Translation.loadData,
        key: 'translation'
      }, {
        component: NotFound
      }
    ]
  }
]

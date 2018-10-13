import App from './App';
import Home from './containers/Home';
import Translation from './containers/Translation';

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
      }
    ]
  }
]

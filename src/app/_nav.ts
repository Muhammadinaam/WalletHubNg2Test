import { INavData } from '../../dist/@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },

  {
    name: '1. On Changes Demo',
    url: '/on-changes-demo',
    icon: 'icon-notebook',
  },

  {
    name: '2. Lazy Load',
    url: '/lazy-load-component',
    icon: 'icon-notebook',
  },

  {
    name: '3. Guarded Route',
    url: '/guarded-route',
    icon: 'icon-notebook',
  },

  {
    name: '4. Data Transfer',
    url: '/data-transfer',
    icon: 'icon-notebook',
  },

  {
    name: '5.1. NG Animation',
    url: '/ng-animation',
    icon: 'icon-notebook',
  },

  {
    name: '5.2. CSS Animation',
    url: '/css-animation',
    icon: 'icon-notebook',
  },
];

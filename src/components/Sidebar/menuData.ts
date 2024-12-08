import { MenuStructure } from './types';

export const menuStructure: MenuStructure = {
  main: [
    {
      text: 'LOBBY, DINING & PATIO',
      url: '#lobby',
      hasSubmenu: true,
      submenuItems: [
        { text: 'FRONT DESK', url: '/tour/front-desk' },
        { text: 'HALLWAY', url: '/tour/hallway' },
        { text: 'DINING ROOM', url: '/tour/dining-room' },
        { text: 'PATIO', url: '/tour/patio' }
      ]
    },
    {
      text: 'BISTRO & THEATER',
      url: '#bistro',
      hasSubmenu: true,
      submenuItems: [
        { text: 'BISTRO', url: '/tour/bistro' },
        { text: 'THEATER', url: '/tour/theater' },
        { text: 'ACTIVITIES ROOM', url: '/tour/activities' },
        { text: 'FLOOR PLAN', url: '/tour/floor-plan' }
      ]
    },
    {
      text: 'RESIDENTIAL UNITS',
      url: '#units',
      hasSubmenu: true,
      submenuItems: [
        { text: 'SNOWBIRD - ENTRY', url: '/tour/snowbird/entry' },
        { text: 'SNOWBIRD - BATHROOM', url: '/tour/snowbird/bathroom' },
        { text: 'SNOWBIRD - KITCHEN', url: '/tour/snowbird/kitchen' },
        { text: 'SNOWBIRD - BEDROOM', url: '/tour/snowbird/bedroom' },
        { text: 'STORM WATCHER - ENTRY', url: '/tour/storm-watcher/entry' },
        { text: 'STORM WATCHER - KITCHEN', url: '/tour/storm-watcher/kitchen' },
        { text: 'STORM WATCHER - BATHROOM', url: '/tour/storm-watcher/bathroom' },
        { text: 'STORM WATCHER - BEDROOM', url: '/tour/storm-watcher/bedroom' }
      ]
    }
  ]
};
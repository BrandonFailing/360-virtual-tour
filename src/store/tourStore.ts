import { create } from 'zustand';

interface TourScene {
  id: string;
  name: string;
  imageUrl: string;
  hotspots: {
    id: string;
    position: [number, number, number];
    targetSceneId: string;
  }[];
}

interface TourStore {
  currentSceneId: string;
  scenes: TourScene[];
  setCurrentScene: (sceneId: string) => void;
}

export const useTourStore = create<TourStore>((set) => ({
  currentSceneId: 'dining-room',
  scenes: [
    {
      id: 'dining-room',
      name: 'Dining Room',
      imageUrl: 'https://i.imgur.com/0S20PQZ.png',
      hotspots: [
        {
          id: 'to-hallway',
          position: [10, 0, -10],
          targetSceneId: 'hallway'
        },
        {
          id: 'to-bistro',
          position: [10, 0, 10],
          targetSceneId: 'bistro'
        }
      ]
    },
    {
      id: 'hallway',
      name: 'Hallway',
      imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000',
      hotspots: [
        {
          id: 'to-dining-room',
          position: [-10, 0, 10],
          targetSceneId: 'dining-room'
        },
        {
          id: 'to-front-desk',
          position: [10, 0, -10],
          targetSceneId: 'front-desk'
        }
      ]
    },
    {
      id: 'bistro',
      name: 'Bistro',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000',
      hotspots: [
        {
          id: 'to-dining-room',
          position: [-10, 0, -10],
          targetSceneId: 'dining-room'
        }
      ]
    },
    {
      id: 'front-desk',
      name: 'Front Desk',
      imageUrl: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&q=80&w=2000',
      hotspots: [
        {
          id: 'to-hallway',
          position: [-10, 0, 10],
          targetSceneId: 'hallway'
        }
      ]
    }
  ],
  setCurrentScene: (sceneId: string) => set({ currentSceneId: sceneId })
}));
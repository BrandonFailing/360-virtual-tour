export interface MenuItem {
  text: string;
  url: string;
  hasSubmenu?: boolean;
  submenuItems?: MenuItem[];
}

export interface MenuStructure {
  main: MenuItem[];
}
export interface Menu {
  items: MenuItem[]
}

export interface MenuItem {
  id: string;
  icon?: string;
  label: string;
  url?: string;
}
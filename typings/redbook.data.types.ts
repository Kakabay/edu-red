export interface IRedbookItem {
  id: number;
  name: string;
  img: string;
}

export interface IRedbookFamily {
  id: number;
  name: string;
  img: string;
  items: IRedbookItem[];
}

export interface IRedbookData {
  id: number;
  families: IRedbookFamily[];
}

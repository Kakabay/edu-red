export interface IRedbookItem {
  id: number;
  familyId: number;
  name: string;
  img: string;
  text: string;
}

export interface IRedbookFamily {
  id: number;
  name: string;
  img: string;
  items: IRedbookItem[];
}

export interface IRedbookData {
  id: number;
  name: string;
  img: string;
  families: IRedbookFamily[];
}

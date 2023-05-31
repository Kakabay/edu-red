export interface IRedbookItem {
  id: number;
  familyId?: number;
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

export interface IReservesItem {
  id: number;
  name: string;
  img: string;
  text: string;
}

export interface IVolunteeringItem {
  id: number;
  name: string;
  img: string;
  org: string;
  text: string;
}

export interface IReservesData {
  items: IReservesItem[];
}

export interface IVolunteeriingData {
  items: IVolunteeringItem[];
}

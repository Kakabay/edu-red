import { IRedbookFamily, IRedbookItem } from "@/typings/redbook.data.types";

export const getFamilyById = (id: string, objectArray: IRedbookFamily[]) => {
  return objectArray.find(
    (object: any) => object.id === parseInt(id)
  ) as IRedbookFamily;
};

export const getItemById = (id: string, objectArray: IRedbookItem[]) => {
  return objectArray.find(
    (object: any) => object.id === parseInt(id)
  ) as IRedbookItem;
};

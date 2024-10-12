import { ProductModel } from './product.model';

export interface FridgeModel {
  id: number;
  name: string;
  owner: FridgeUserModel,
  admins: FridgeUserModel[],
  members: FridgeUserModel[],
  status: string;
  products?: ProductModel[],
}

export interface FridgeUserModel {
  id: number;
  username: string;
}

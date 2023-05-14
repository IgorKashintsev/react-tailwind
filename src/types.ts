export interface NameObj {
  first: string;
  last: string;
}
export interface DataObj {
  _id: string;
  amount: number;
  type: string;
  name: NameObj;
  company: string;
  email: string;
  phone: string;
  address: string;
}
export interface DataJson {
  total: number;
  data: DataObj[];
}
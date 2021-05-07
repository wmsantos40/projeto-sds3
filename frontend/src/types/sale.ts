import { Seller } from "./seller"

export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}

export type SalePage = {
  content?: Sale[];
  last: boolean;  
  totalElements: number;
  number: number;
  first: boolean;
  totalPages: number;
  numberOfElements?: number;
  size?: number;
  empty?: boolean;
} 

export type SaleSum = {
  sellerName: string;
  sum: number;
}

export type SaleSuccess = {
  sellerName: string;
  visited: number;
  deals: number;
}


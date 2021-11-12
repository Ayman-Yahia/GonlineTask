import { createContext } from "react";

// export type CartItemType = {
//     id: number;
//     category: string;
//     description: string;
//     image: string;
//     price: number;
//     title: string;
//     amount: number;
// };
export const CookieContext = createContext<any| undefined>(
  undefined
);
import { create } from "zustand";
import { persist } from "zustand/middleware";
import Product from '@/app/types';

export interface BasketItem {
  product: Product;
  quantity: number;
}

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  phoneNumber: string;
  paymentMethod: string;
  orderId: string;
  clerkId: string;
};

export type Order = {
  orderId: string;
  userInfo: UserInfo;
  basket: BasketItem[];
  timestamp: number;
};

type CheckoutState = {
  setBasketFromStore: (items: BasketItem[]) => void;
  orders: Record<string, Order[]>;
  currentOrder: {
    userInfo: UserInfo;
    basket: BasketItem[];
  };
  setUserInfo: (info: Partial<UserInfo>) => void;
  addToBasket: (item: BasketItem) => void;
  removeFromBasket: (productId: string) => void;
  clearBasket: () => void;
  finalizeOrder: (clerkId: string) => void;
  clearAllOrders: () => void; // ✅ New function added
};

export const useCheckoutStore = create<CheckoutState>()(
  persist(
    (set) => ({
      orders: {},
      currentOrder: {
        userInfo: {
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          city: "",
          country: "",
          phoneNumber: "",
          paymentMethod: "",
          orderId: "",
          clerkId: "",
        },
        basket: [],
      },

      setUserInfo: (info) =>
        set((state) => ({
          currentOrder: {
            ...state.currentOrder,
            userInfo: {
              ...state.currentOrder.userInfo,
              ...info,
            },
          },
        })),

      setBasketFromStore: (items: BasketItem[]) =>
        set((state) => ({
          currentOrder: {
            ...state.currentOrder,
            basket: items,
          },
        })),

      addToBasket: (item) =>
        set((state) => {
          const existingItem = state.currentOrder.basket.find(
            (i) => i.product._id === item.product._id
          );

          if (existingItem) {
            return {
              currentOrder: {
                ...state.currentOrder,
                basket: state.currentOrder.basket.map((i) =>
                  i.product._id === item.product._id
                    ? { ...i, quantity: i.quantity + item.quantity }
                    : i
                ),
              },
            };
          }

          return {
            currentOrder: {
              ...state.currentOrder,
              basket: [...state.currentOrder.basket, item],
            },
          };
        }),

      removeFromBasket: (productId) =>
        set((state) => ({
          currentOrder: {
            ...state.currentOrder,
            basket: state.currentOrder.basket.filter(
              (i) => i.product._id !== productId
            ),
          },
        })),

      clearBasket: () =>
        set((state) => ({
          currentOrder: {
            ...state.currentOrder,
            basket: [],
          },
        })),

      finalizeOrder: (clerkId) =>
        set((state) => {
          const orderId = state.currentOrder.userInfo.orderId;
          if (!orderId) return state;

          const order: Order = {
            orderId,
            userInfo: {
              ...state.currentOrder.userInfo,
              clerkId,
            },
            basket: [...state.currentOrder.basket], // Save full product details
            timestamp: Date.now(),
          };

          const userOrders = state.orders[clerkId] || [];

          return {
            orders: {
              ...state.orders,
              [clerkId]: [...userOrders, order],
            },
            currentOrder: {
              ...state.currentOrder,
              basket: [],
            },
          };
        }),

      // ✅ New function: Delete all orders
      clearAllOrders: () =>
        set(() => ({
          orders: {},
          currentOrder: {
            userInfo: {
              firstName: "",
              lastName: "",
              email: "",
              address: "",
              city: "",
              country: "",
              phoneNumber: "",
              paymentMethod: "",
              orderId: "",
              clerkId: "",
            },
            basket: [],
          },
        })),
    }),
    { name: "checkout-store" }
  )
);

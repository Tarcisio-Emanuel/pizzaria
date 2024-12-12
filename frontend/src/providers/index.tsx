"use client"

import { createContext, ReactNode, useState } from "react";
import { api } from "@/services/api";
import { getCookieClient } from "@/lib/cookieClient";

interface OrderItemProps {
    id: string;
    amount: number;
    created: string;
    order_id: string;
    product_id: string;
    product: {
        id: string;
        name: string;
        price: string;
        description: string;
        banner: string;
        category_id: string;
    };
    order: {
        id: string;
        table: number;
        name: string;
        draft: boolean;
        status: boolean;

    }
}

type OrderContextData = {
    isOpen: boolean;
    onRequestOpen: (order_id: string) => void;
    onRequestClosr: () => void;
}

type OrderProvaiderProps = { children: ReactNode }

export const OrderContext = createContext({} as OrderContextData);



export function OrderProvider({ children }: OrderProvaiderProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [order, setOrder] = useState<OrderItemProps[]>([]);

    async function onRequestOpen(order_id: string) {

        const token = getCookieClient();
        const response = await api.get("/orders/detail", {

            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                order_id: order_id
            }
        })

        console.log(response.data)
        setIsOpen(true)

    }


    function onRequestClosr() {
        setIsOpen(false)

    }





    return (
        <OrderContext.Provider
            value={{
                isOpen,
                onRequestOpen,
                onRequestClosr
            }}
        >

            {children}

        </OrderContext.Provider>
    )

}
"use client"

import { use } from "react";
import { OrderContext } from "@/providers";

import styles from "./styles.module.scss";
import { RefreshCcw } from "lucide-react";

import { OrderProps } from "@/lib/order.type";
import { Modalorder } from "@/app/dashboard/components/modal";

interface Props { orders: OrderProps[] }


export function Orders({ orders }: Props) {

    const {isOpen, onRequestOpen} = use(OrderContext);



    function handleDetailOrders(order_id: string) {
        onRequestOpen(order_id)
    }



    return (
        <>

            <main className={styles.container}>

                <section className={styles.containerHeader}>
                    <h1>Ùltimos Oedidoa</h1>

                    <button>
                        <RefreshCcw size={24} color="#3fffa3" />
                    </button>

                </section>

                <section className={styles.listOrders}>

                    {
                        orders.map((order) => (

                            <button className={styles.orderItem} key={order.id} onClick={() => handleDetailOrders(order.id)}>
                                <div className={styles.tag}></div>
                                <span>Mesa {order.table}</span>
                            </button>

                        ))
                    }

                </section>

            </main>
{ isOpen && <Modalorder/> }


        </>
    )
}
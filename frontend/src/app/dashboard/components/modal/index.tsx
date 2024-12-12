import styles from "./styles.module.scss";
import { X } from "lucide-react";

import { use } from "react";
import { OrderContext } from "@/providers";


 export function Modalorder() {


  // const {isOpen, setIsOpen} = use(OrderContext);xxxxxxxxxxxxxx

    return(
        <dialog className={styles.dialogContainer}>
          
          <section className={styles.dialogContent}>
            <button className={styles.dialogBack}>
               < X size={40} color="#ff3f4b"/>
            </button>

            <article className={styles.container}>

                <h2> Detalhes do pedido </h2>
                <span className={styles.table}> Mesa <b>36</b> </span>


                <section className={styles.item}>
                    <span> 1 - <b>Pizza Catupiri</b></span>
                    <span className={styles.description}>Pizza de frango com catupiri, borda recheada</span>
                </section>

                 <button className={styles.buttonOrder}>
                    Concluir Pedido
                 </button>
 
            </article>

          </section>

        </dialog>
    )
    
}
import React from "react";
import usePortal from "../../../../core/store/portal/usePortal";
import styles from "./Cart.module.scss";
import { useDispatch } from 'react-redux';
import PortalActions from "../../../../core/store/portal/actions";

// import { DATA } from "../../../../../mock/data";
// import useStateCrud from "../../hooks/useStateCrud";

const CartPage = () => {
  // const { items, addItem, removeItem } = useStateCrud(DATA);
  const {cart} = usePortal();
  const dispatch = useDispatch();

  const increase = (id) => {
    dispatch(PortalActions.cartUpdateQuantity({id, quantity: 1}))
  }
  const decrease = (id) => {
    dispatch(PortalActions.cartUpdateQuantity({id, quantity: -1}))
  }

  const remove = (id) => {
    dispatch(PortalActions.cartRemove(id));
  }

  return (
    <div className={styles.Cart}>
      <div className={styles.List}>
        {cart?.map((item, index) => (
          <div>
            <div className={styles.Item}>
              <img src={item.image} alt="" />
              <div className={styles.Data}>
                <div className={styles.DataInfo}>
                  <h3>{item.name}</h3>
                  <p>S/ {item.price}</p>
                </div>
                <div className={styles.DataAction}>
                  <div className={styles.InputAction}>
                    <button className={styles.ButtonQuantity} onClick={() => decrease(item.id)} disabled={item.quantity == 1}>-</button>
                    <input type="text" value={item.quantity}/>
                    <button className={styles.ButtonQuantity} onClick={() => increase(item.id)}>+</button>
                  </div>
                  <p className={styles.SubTotal}>
                    <strong>Subtotal:</strong> <span className={styles.SubTotalPrice}>S/ {item.quantity * item.price}</span>
                  </p>
                  <button onClick={() => remove(item.id)}>Remover</button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className={styles.Resume}>
        <h2>Total</h2>
        <p>S/ 72.00</p>
        <button>Efectuar pago</button>
      </div>
      <pre style={{ fontSize: 10 }}>
          {JSON.stringify(cart, null, 4)}
        </pre>
    </div>

  );
};

export default CartPage;

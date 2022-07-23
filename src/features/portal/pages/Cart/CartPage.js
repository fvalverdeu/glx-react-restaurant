import React from "react";
// import { DATA } from "../../../../../mock/data";
// import useStateCrud from "../../hooks/useStateCrud";

const CartPage = () => {
  // const { items, addItem, removeItem } = useStateCrud(DATA);
  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>
          <div>
            <h3>Nombre Producto</h3>
            <p>S/ 12.00</p>
          </div>
          <div>
            <button>-</button>
            <input type="text" />
            <button>+</button>
            <button>Remover</button>
            <p>
              Subtotal: <span>S/ 36.00</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Total</h2>
        <p>S/ 72.00</p>
        <button>Efectuar pago</button>
      </div>
    </div>
  );
};

export default CartPage;

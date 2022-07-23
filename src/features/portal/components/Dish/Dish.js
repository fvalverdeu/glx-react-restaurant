import styles from './Dish.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Dish = ({
  dish,
  status,
  // isAdded,
  addItem
}) => {
  // const [items, setItems] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const { image, name, description, price } = dish;
  const add = () => {
    // const newItem = {...dish}
    // setItems(() => [...items, newItem]);
    // isAdded = true;
    setIsAdded(true);
    addItem(dish);
  }

  return (
    <div className={styles.card}>
      <img src={image} alt={name}  className={styles.image}/>
      <div className={styles['card-body']}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>{price}</div>
        {
          isAdded ? <span className={styles.status}>Agregado al carrito</span> : <button onClick={add}>Agregar</button>
        }
      </div>
    </div>
  );
};

Dish.propTypes = {
  //img: PropTypes.string.isRequired,
  //name: PropTypes.string.isRequired,
  dish: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  status: PropTypes.string,
  // isAdded: PropTypes.bool
}

Dish.defaultProps = {
  status: 'Agotado',
  // isAdded: false
}


export default Dish;

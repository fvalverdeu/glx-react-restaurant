import React, { useState } from 'react'
import { DATA } from '../../../../../mock/data'
import Dish from '../../components/Dish/Dish';
import useStateCrud from '../../../checkout/hooks/useStateCrud';
import styles from './Home.module.scss';

const HomePage = () => {
  const [ dishes ] = useState(DATA);
  const { items, addItem, removeItem } = useStateCrud(DATA);


  return (
    <div className={styles.Home}>
      {dishes.map((dish, index) => (
        <Dish key={dish.id} dish={dish} addItem={addItem}/>
      ))}
    </div>
  )
}

export default HomePage
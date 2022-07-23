import React, { useEffect  } from 'react'
// import { DATA } from '../../../../../mock/data'
import Dish from '../../components/Dish/Dish';
import styles from './Home.module.scss';
import usePortal from '../../../../core/store/portal/usePortal';
import PortalActions from '../../../../core/store/portal/actions';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  // const [ dishes ] = useState(DATA);
  // const { items, addItem, removeItem } = useStateCrud(DATA);

  const { products, cart, isLoading } = usePortal()
  const dispatch = useDispatch()

  console.log('products', products);

  useEffect(() => {
    dispatch(PortalActions.loadProducts())
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(PortalActions.cartAdd(values))
  // }, [values, dispatch])

  return (
    <div className={styles.Home}>
      {isLoading && <p>Cargando Parametros</p>}
      {products?.map((dish, index) => (
        <Dish key={dish.id} dish={dish} />
        /* <Dish key={dish.id} dish={dish} addItem={addItem}/> */
      ))}
      <pre style={{ fontSize: 10 }}>
          {JSON.stringify(cart, null, 4)}
        </pre>
    </div>
  )
}

export default HomePage
import Http from '../../../common/http';

const endpoint = 'http://localhost:4000/data'

const getDishes = () => {
  return Http.get(endpoint)
}

const OrderHttp = {
    getDishes
}

export default OrderHttp;
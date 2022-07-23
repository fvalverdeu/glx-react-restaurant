import Axios from 'axios'

const instance = Axios.create({
})

// instance.interceptors.request.use((response) => /* open alert */ response.data)
instance.interceptors.response.use((response) => /* cierre alert */ {
    console.log('data', response.data.items);
    return response.data.items
})

export default instance;
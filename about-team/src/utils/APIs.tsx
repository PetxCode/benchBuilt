import axios from "axios"

const url = "https://api.escuelajs.co/api/v1/products"

export const getStore = async () => {
    return await axios.get(url)
}
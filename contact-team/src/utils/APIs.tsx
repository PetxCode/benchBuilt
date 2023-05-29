import axios from "axios";

const url = "http://localhost:2233"

export const getUser = async () => {
    return await axios.get(url)
}

export const postUser = async (data: any) => {
    return await axios.post(url, data)
}
import { useEffect, useState } from "react"
import { getStore } from "../utils/APIs"


export const useStore = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        getStore().then((res) => {
            setState(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return state
} 
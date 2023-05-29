import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getData, postData } from "../utils/APIs"
import { useState } from "react"

const HomeScreen = () => {

    const queryClient = useQueryClient()
    const [stateData, setStateData] = useState<string>("")

    const readData = useQuery({
        queryKey: ['data'],
        queryFn: () => {
            return getData()
        },
        refetchOnWindowFocus: false,

    })
    const { data } = readData


    const mutation = useMutation({
        mutationKey: ['data'],
        mutationFn: () => postData({ name: stateData }),


        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["data"] })
            setStateData("")
        }

    })

    console.log("reading: ", data?.data?.data)

    return (
        <div>
            {
                data?.data?.data?.map((props: any) => (
                    <div key={props._id} >
                        <div>{props.name}</div>
                    </div>
                ))
            }
            <div>
                <input
                    placeholder="enter title"
                    value={stateData}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setStateData(e.target.value)
                    }}
                />
                <button onClick={() => {
                    mutation.mutate()
                }}>click and add</button>
            </div>
        </div>
    )
}

export default HomeScreen
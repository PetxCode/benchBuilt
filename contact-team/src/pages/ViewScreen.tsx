import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import styled from "styled-components"
import { getUser, postUser } from "../utils/APIs"

const ViewScreen = () => {
    const queryClient = useQueryClient()
    const [state, setState] = useState<string>("")

    const { data } = useQuery({
        queryKey: ["userData"],
        queryFn: () => {
            return getUser()
        }
    })
    console.log(data?.data?.data)

    const mutation = useMutation({
        mutationFn: () => {
            return postUser({ name: state })
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["userData"] })
            setState("")
        }
    })

    return (
        <div>
            <Container>

                <Main>
                    {
                        data?.data?.data.map((props: any) => (
                            <Card>
                                <Title>{props.name}</Title>
                            </Card>
                        ))
                    }

                </Main>
                <br />
                <Input
                    placeholder="Enter a Name"
                    value={state}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setState(e.target.value)
                    }}
                />
                <Button
                    onClick={() => {
                        mutation.mutate()
                    }}
                >Add </Button>
            </Container>
        </div>
    )
}

export default ViewScreen

const Button = styled.div`
width: 190px;
height: 40px;
background-color: purple;
border-radius: 5px;
margin-top: 10px;
color: white;
display: flex;
justify-content: center;
align-items: center;
transition: all 350ms;
font-weight: 900;
font-size: 12px;
:hover{
    cursor: pointer;
    transform: translate(0px, 5px);
}

`

const Input = styled.input`
width: 250px;
height: 30px;
border: 1px solid solid;
/* border: 1px solid solid; */
border-radius: 3px;
outline: none;
padding-left: 10px;
`

const Title = styled.div``

const Card = styled.div`
width: 200px;
height: 250px;
border-radius: 5px;
border: 1px solid silver;
display: flex;
justify-content: center;
align-items: center;
margin: 5px;
`

const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;

`
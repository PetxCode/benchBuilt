import styled from "styled-components"
import { useStore } from "../hooks/useStore"


const AboutScreen = () => {

    const state = useStore()
    // console.log(state!.map(el => el.title))
    return (
        <div>
            <br />
            <br />
            <br />

            <Container>
                <div>
                    This is the about Screen
                </div>
                <Main>
                    {
                        state?.map((props: any) => (
                            <Card key={props._id} >
                                <Image src={props.images[0]} loading="lazy" />
                            </Card>
                        ))

                    }
                </Main>
            </Container>
        </div>
    )
}

export default AboutScreen

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Card = styled.div`
overflow: hidden;
border-radius: 5px;
border: 1px solid silver;
width: 150px;
height: 230px;
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ViewScreen from "./ViewScreen"

const queryClient = new QueryClient()
const ContactScreen = () => {
    return (
        <div>
            <QueryClientProvider client={queryClient} >
                <ViewScreen />
            </QueryClientProvider>
        </div>
    )
}

export default ContactScreen
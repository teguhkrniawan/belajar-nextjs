import { useRouter } from "next/router"

const Index = () => {

    const router = useRouter()
    const { blogId } = router.query

    return (
        <div>
            <h2>This is dynamic blog get router : { blogId }</h2>
        </div>
    )
}

export default Index
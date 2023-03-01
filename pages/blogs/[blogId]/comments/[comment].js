import { useRouter } from "next/router"

const comment = () => {

    const router = useRouter()
    const { blogId, comment } = router.query

    return (
        <div>
            <h2>This is dynamic blog get router : { blogId } dan comment { comment }</h2>
        </div>
    )
}

export default comment
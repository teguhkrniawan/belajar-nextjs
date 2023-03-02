import { useRouter } from "next/router"

const Comment = () => {

    const router = useRouter()
    const { blogId, comment } = router.query

    return (
        <div>
            <h2>This is dynamic blog get router : { blogId } dan comment { comment }</h2>
        </div>
    )
}

export default Comment
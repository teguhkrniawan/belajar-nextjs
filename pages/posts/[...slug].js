import { useRouter } from "next/router"

const Slug = () => {

  const router = useRouter()
  const { slug = [] } = router.query // return array

  return (
    <div>slug saya adalah : {slug[0]}-{slug[1]}-{slug[2]}</div>
  )
}

export default Slug
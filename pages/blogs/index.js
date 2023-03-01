import { useRouter } from "next/router";

const index = () => {

  const router = useRouter();
  const { page, limit } = router.query();

  return (
    <div>this is index from blogs</div>
  )
}

export default index
import { useRouter } from "next/router";

const Index = () => {

  const router = useRouter();
  const { page, limit } = router.query;

  if(!router.query.limit || !router.query.page){
    return (
      <div>
        This is Index from blogs
      </div>
    )
  }

  return (
    <div>
      {
        page && limit && (
          <p>this is Index from blogs, blog page : {page} and limit {limit}</p>
        )
      }
    </div>
  )
}

export default Index
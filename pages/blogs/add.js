import { useRouter } from "next/router"

const Add = () => {

  const router = useRouter()  

  const publish = () => {
    console.log('send to backend ...')
    // router.push('/blogs?page=2&limit=100')
    router.push('/blogs')
  }

  return (
    <div>
        <h3>Add blog</h3>
        <button onClick={publish}>Tambah Postingan</button>
    </div>
  )
}

export default Add
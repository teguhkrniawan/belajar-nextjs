

// SSG
// export const getStaticProps = async () => {
//     const response = await fetch("http://localhost:5000/products")
//     const data = await response.json()

//     return {
//         props: {
//              products: data
//         }
//     }
// }

// SSR
export const getServerSideProps = async () => {
    const response = await fetch("http://localhost:5000/products")
    const data = await response.json()

    return {
        props: {
             products: data
        }
    }
}

const index = ({products}) => {
  return (
    <div>
        <h4>Products List</h4>
        <ul>
            {
                products.map((item) => (
                    <li key={item.id}>{ item.name } - { item.price }</li>
                ))
            }
        </ul>
    </div>
  )
}

export default index
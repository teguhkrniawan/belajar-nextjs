
export const getStaticPaths = async () => {
    const response = await fetch(
        "http://localhost:5000/products"
    )
    const data = await response.json();

    const paths =  data.map((item) => ({
        params: {
            productId : `${item.id}`
        }
    }))

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const response = await fetch(`http://localhost:5000/products/${params.productId}`)
    const data = await response.json()
    return {
        props: {
            product: data 
        }
    }
}

const ProductId = ({product}) => {
  return (
    <div>
        {product.name} - {product.price}
    </div>
  )
}

export default ProductId
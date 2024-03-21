import React from "react"
import { useEffect } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../store/cartSlice"
import { getProducts } from "../store/productSlice"
import statusCode from "../utils/StatusCode"

export const Product = () => {
  const dispatch = useDispatch()
  // const [products,setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.products)

  useEffect(() => {
    //dispatch a action for fetchproducts
    dispatch(getProducts())
  }, [])
  if (status === statusCode.LOADING) {
    return <p>Loading....</p>
  }
  if (status === statusCode.ERROR) {
    return <p>Something went wrong ! try again Later!!</p>
  }
  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product))
  }
  const cards = products.map((product) => (
    <div
      key={product.id}
      className="col-sm-3"
      style={{ display: "flex", marginBottom: "10px" }}
    >
      <Card style={{ width: "28rem", margin: "2px", heigth: "h-100" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>USD: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center" style={{ background: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ))
  return (
    <div className="row">
      <div className="text-center">
        <h1>Product DashBoard</h1>
      </div>
      {cards}
    </div>
  )
}

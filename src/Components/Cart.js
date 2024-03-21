import React from "react"
import { useSelector } from "react-redux"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useDispatch } from "react-redux"
import { remove } from "../store/cartSlice"

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const removeProduct = (id) => {
    dispatch(remove(id))
  }
  const cards = cartProducts.map((product) => (
    <div
      key={product.id}
      className="col-md-12"
      style={{
        marginBottom: "10px",
        display: "flex",
        justifyContent: "center",
      }}
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
          <Button variant="danger" onClick={() => removeProduct(product.id)}>
            Remove
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ))
  return (
    <div className="row">
      <div className="text-center">
        <h1>Shopping Cart</h1>
      </div>
      {cards}
    </div>
  )
}

export default Cart

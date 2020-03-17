import React, { useState, useEffect } from 'react'
import { withRouter, NavLink, Switch, Route } from 'react-router-dom'
import Config from './Config'
// import Comment from './Comment'
import Comment2 from './Comment2'
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from 'react-icons/ai'
import '../../css/shop.scss'

function Product(props) {
  const [myproduct, setMyproduct] = useState([])
  const [configORcomment, setCofigORcomment] = useState(1)
  //購物車,與Productlist.js共用
  const [mycart, setMycart] = useState([])
  console.log(props)
  const productId = props.match.params.type
  console.log(productId)
  const handleDisplay = value => {
    setCofigORcomment(value)
  }
  //  加入購物車,與Productlist.js共用
  async function updateCartToLocalStorage(value) {
    // setDataLoading(true)

    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))
    //設定資料
    setMycart(newCart)
  }
  //fetch database product撈所有資料(不分類)
  async function getDataFromServer() {
    const request = new Request('http://localhost:3300/product/' + productId, {
      method: 'GET',
      credentials: 'include',
    })
    const response = await fetch(request)
    const data = await response.json()

    setMyproduct(data.rows[0])

    // console.log(data.rows)
  }
  useEffect(() => {
    getDataFromServer()
  }, [])

  console.log('myproduct資訊=', myproduct)
  const url = props.match.url
  const path = props.match.path
  console.log('url', props.match)
  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="col col-sm-12 col-md-6">
          <div className="text-center">
            <img src="https://via.placeholder.com/500x300" alt="" />
          </div>
          <ul className="list-unstyled d-flex justify-content-center">
            <li>
              <img
                className=""
                src="https://via.placeholder.com/100x100"
                alt=""
              />
            </li>
            <li>
              <img
                className=""
                src="https://via.placeholder.com/100x100"
                alt=""
              />
            </li>
            <li>
              <img
                className=""
                src="https://via.placeholder.com/100x100"
                alt=""
              />
            </li>
            <li>
              <img
                className=""
                src="https://via.placeholder.com/100x100"
                alt=""
              />
            </li>
            <li>
              <img
                className=""
                src="https://via.placeholder.com/100x100"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="col col-sm-12 col-md-6">
          <div className="d-flex">
            <span className="p">NT$:</span>
            <h2>{myproduct.itemPrice}</h2>
          </div>

          <h3>{myproduct.itemName}</h3>
          <p>{myproduct.itemIntro}</p>
          <div className="row">
            <button
              type="button"
              className="btn btn-outline-info mx-2 s-btn-common"
            >
              <AiOutlineHeart />
              加入收藏清單
            </button>
            <button
              type="button"
              className="btn btn-outline-info mx-2 s-btn-common"
              onClick={() =>
                updateCartToLocalStorage({
                  id: myproduct.itemId,
                  name: myproduct.itemName,
                  amount: 1,
                  price: myproduct.itemPrice,
                })
              }
            >
              <AiOutlineShoppingCart />
              加入購物車
            </button>
          </div>
          <div className="row mt-2 h6">
            <div className="col-3 ">發行商:</div>
            <div className="col-7 ">{myproduct.vName}</div>
          </div>
          <div className="row h6">
            <div className="col-3 ">發行日期: </div>
            <div className="col-4 ">{myproduct.itemDate}</div>
          </div>
          <div className="row h6">
            <div className="col-3 ">遊戲類別:</div>
            <div className="col-4 ">{myproduct.categoryName}</div>
          </div>
        </div>
      </div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink
            className="nav-link h5"
            to="#"
            onClick={() => {
              handleDisplay(1)
            }}
          >
            建議配備
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link h5"
            to="#"
            onClick={() => {
              handleDisplay(2)
            }}
          >
            留言評論
          </NavLink>
        </li>
      </ul>
      <div className="">
        {configORcomment === 1 ? <Config /> : <Comment2 />}
      </div>
      {/* <Switch>
        <Route path={`${path}/:id?/config/12`}>
          <Config />
        </Route>
        <Route path={`${path}/:type?/:id?`}>
          <Comment />
        </Route>
      </Switch> */}
    </>
  )
}

export default withRouter(Product)

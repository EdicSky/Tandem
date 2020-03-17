import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import '../CSS/Cart.scss'
import '../../css/shop.scss'
import $ from 'jquery'

function Cart() {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  //coupon select
  const [selectCoupon, setSelectCoupon] = useState(false)
  const [totalMoney, setTotalMoney] = useState(0) //總金額
  const [productIdInCart, setProductIdInCart] = useState([]) //購物車內商品Id
  const [productImgUrl, setProductImgUrl] = useState([])
  async function getCartFromLocalStorage() {
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || []
    console.log(JSON.parse(newCart))
    //設定資料
    setMycart(JSON.parse(newCart))
  }
  //一開始就會載入資料
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])
  //每次mycart資料有變動就會3秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 500)

    let newMycartDisplay = []
    console.log('mycartDisplay', mycartDisplay)
    console.log('mycart', mycart)

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      const index = newMycartDisplay.findIndex(
        value => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        console.log('findindex', index)
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }
    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])
  //click coupon加上邊框顏色
  useEffect(() => {
    $('.coupon').click(function() {
      console.log($(this))
      $(this).toggleClass('couponActive')
    })
  }, [selectCoupon])
  // 刪除購物車項目
  async function updateCartToLocalStorage(value) {
    // setDataLoading(true)

    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    const newCart = [...currentCart]
    const updateCart = newCart.filter(item => item.id !== value.id)
    // console.log('value', value)
    // console.log('newCart=', newCart)
    // console.log('updateCart=', updateCart)
    localStorage.setItem('cart', JSON.stringify(updateCart))
    //設定資料
    setMycart(updateCart)
    getProductId(mycartDisplay) //重新抓購物車內商品id
    // getImgFromServer(mycartDisplay) //發fetch重抓圖片
  }
  const handleCouponSelect = () => {
    setSelectCoupon(!selectCoupon)
  }
  const sum = items => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }
  //mycart有變動就把總金額set進totalMoney
  useEffect(() => {
    let money = sum(mycartDisplay)

    setTotalMoney(money)
    SaveTotalToLocalStorage(money)
  }, [mycartDisplay])
  console.log('目前總金額= ', totalMoney)
  //總價set進Localstorage裡，key='total'
  async function SaveTotalToLocalStorage(money) {
    localStorage.setItem('total', money)
  }

  // //抓cart中商品的id

  async function getProductId(mycartDisplay) {
    //+async
    let productId = []
    mycartDisplay.forEach((item, index) => {
      productId.push(item.id.toString())
      //  console.log('id=',productId)
    })
    setProductIdInCart(productId) //+await

    getImgFromServer(productId) //抓商品圖片連結
  }
  //  console.log(body)
  console.log(productIdInCart)

  useEffect(() => {
    getProductId(mycartDisplay)
  }, [mycartDisplay])

  //發送fetch給後端抓ImgUrl
  async function getImgFromServer(id) {
    if (id.length == 0) {
      //若購物車id還沒找到就不要發fetch
      return
    }
    let body = { id: id }
    console.log('bodybody', body)
    const request = new Request('http://localhost:3300/product/getCartImg', {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()

    setProductImgUrl(data.result)
  }

  // useEffect(() => {
  //   getImgFromServer(productIdInCart)
  // }, [productIdInCart])

  // console.log(productImgUrl[0])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  const display = (
    <>
      <div className="d-flex justify-content-center">
        <div className="circleActive">
          <h1>1</h1>
        </div>
        <div className="line"></div>
        <div className="circle">
          <h1>2</h1>
        </div>
        <div className="line"></div>
        <div className="circle">
          <h1>3</h1>
        </div>
      </div>
      <h3 className="text-center">購物清單</h3>
      <div className="shoppingList">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="columnWidth1 h5">
                商品名稱
              </th>
              <th scope="col" className="h5">
                單價
              </th>
              <th scope="col" className="columnWidth2 h5">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            {productImgUrl.map((value, index) => {
              return (
                <>
                  <tr key={index}>
                    <td className="">
                      <img
                        src="https://via.placeholder.com/300x150"
                        className=""
                        alt="..."
                      />
                    </td>
                    <td className="h5">NT${value.itemPrice}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-info mx-2 my-2 s-btn-common"
                      >
                        <i className="far fa-heart"></i>加入收藏清單
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-info mx-2 s-btn-common"
                        onClick={() =>
                          updateCartToLocalStorage({
                            id: value.itemId,
                          })
                        }
                      >
                        <i className="far fa-trash-alt"></i>刪除
                      </button>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
      <h3 className="text-center">折價券</h3>
      <div className="shoppingList p-2">
        <h5>總價:NT${sum(mycartDisplay)}</h5>
        <h5>你有1張折價券可使用</h5>
        <div className="my-2">
          <img
            src="https://via.placeholder.com/300x150"
            className="coupon"
            alt="..."
            onClick={() => handleCouponSelect()}
          />
        </div>
        <div className="my-2">
          <img
            src="https://via.placeholder.com/300x150"
            className="coupon"
            alt="..."
            onClick={() => handleCouponSelect()}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <Link
          type="button"
          className="btn btn-outline-info mx-2"
          to="/productlist"
        >
          繼續購物
        </Link>
        <Link type="button" className="btn btn-outline-info mx-2" to="/payment">
          進行結帳
        </Link>
      </div>
    </>
  )
  return (
    <>
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}

export default Cart

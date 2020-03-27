import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import '../CSS/Cart.scss'
import '../../css/shop.scss'
import $ from 'jquery'
import {
  AiOutlineCheckCircle,
  AiOutlineDelete,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import Swal from 'sweetalert2' //sweetalert2
import PayProgressbar from '../../components/shop/PayProgessbar'

function Cart_new(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  //coupon select
  const [selectCoupon, setSelectCoupon] = useState(false)
  const [totalMoney, setTotalMoney] = useState(0) //總金額
  const [productIdInCart, setProductIdInCart] = useState([]) //購物車內商品Id
  const [productImgUrl, setProductImgUrl] = useState([])
  const [coupon, setCoupon] = useState([]) //coupon資訊
  const [couponNo, setCouponNo] = useState('S001')
  const [discount, setDiscount] = useState(0) //折扣多少錢
  const [browsehistory, setBrowseHistory] = useState([]) //瀏覽紀錄相關資訊
  const [couponOrhistory, setCouponOrHistory] = useState(0)
  async function getCartFromLocalStorage() {
    setDataLoading(true)
    if (localStorage.getItem('cart') !== null) {
      const newCart = localStorage.getItem('cart') || []
      console.log(JSON.parse(newCart))
      //設定資料
      setMycart(JSON.parse(newCart))
    }
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
  // useEffect(() => {
  //   $('.coupon').click(function() {
  //     console.log($(this))
  //     $(this).toggleClass('couponActive')
  //     $(this).next().css('max-width','100px')
  //   })

  // }, [selectCoupon])
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
  const handleCouponSelect = element => {
    console.log(element)
    setSelectCoupon(!selectCoupon)

    // element.classList.toggle('couponActive') //click coupon加上邊框顏色
    //=======選擇折價券後出現已使用=========
    document.querySelector('.s-coupon-used').classList.add('s-coupon-used-show')
    // let couponpic = document.querySelector('.s-coupon-pic img')
    // console.log('扣多少錢',element.dataset.discount)
    // let discountmoney = element.dataset.discount
    setDiscount(element.dataset.discount)
  }
  //取消使用折價券
  const handleCouponSelect2 = () => {
    document
      .querySelector('.s-coupon-used')
      .classList.remove('s-coupon-used-show')
    setSelectCoupon(!selectCoupon)
    setDiscount(0)
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
    // console.log('coupon.sMethod',coupon.sMethod)
    let money
    if (selectCoupon) {
      money = sum(mycartDisplay) - discount
    } else {
      money = sum(mycartDisplay)
    }
    // let money = sum(mycartDisplay)-coupon.sMethod

    setTotalMoney(money)
    SaveTotalToLocalStorage(money)
  }, [mycartDisplay, coupon, selectCoupon])
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
    console.log('id長度=', id.length)
    // if (id.length == 0) {
    //   //若購物車id還沒找到就不要發fetch
    //   setProductImgUrl([])
    //   return
    // }
    let body = { id: id }
    console.log('bodybody', body)
    const request = new Request('http://localhost:6001/product/getCartImg', {
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

  //抓coupon圖片和資訊
  async function getCoupon() {
    const request = new Request('http://localhost:6001/product/findmycup', {
      method: 'POST',
      body: JSON.stringify({
        mbId: JSON.parse(localStorage.getItem('LoginUserData')).mbId,
      }),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setCoupon(data)
  }
  useEffect(() => {
    getCoupon()
  }, [])
  //設定目前選到的coupon編號

  function couponselectfunc() {
    let selectcoupon = document.querySelector('.s-coupon')
    let optioncoupon = selectcoupon[selectcoupon.selectedIndex]
    console.log('選擇到的coupon', optioncoupon, optioncoupon.value)
    setCouponNo(optioncoupon.value)
  }

  //商品加入收藏
  async function addToLike(itemID) {
    const request = new Request('http://localhost:6001/product/addtolike', {
      method: 'POST',
      body: JSON.stringify({
        userId: JSON.parse(localStorage.getItem('LoginUserData')).mbId,
        likeproductId: itemID,
      }),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()

    console.log('加入收藏', data)
    if (data.r.affectedRows == 1) {
      Swal.fire('商品成功加入收藏!')
    }
  }
  //抓瀏覽紀錄相關資訊
  function gethistoryfromlocalstorage() {
    let history = JSON.parse(localStorage.getItem('browse-history'))
    console.log('history', history)
    async function getFromServer(id) {
      // console.log('id長度=', id.length)
      // if (id.length == 0) {
      //   //若購物車id還沒找到就不要發fetch
      //   setProductImgUrl([])
      //   return
      // }
      let body = { id: id }
      console.log('bodybody', body)
      const request = new Request('http://localhost:6001/product/getCartImg', {
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
      setBrowseHistory(data.result)
      console.log('瀏覽紀錄 ', data)
    }
    getFromServer(history)
  }
  useEffect(() => {
    gethistoryfromlocalstorage()
  }, [])
  //  加入購物車,與Productlist.js共用
  async function updateCartToLocalStorage(value) {
    // setDataLoading(true)
    Swal.fire({ html: `成功加入購物車` })
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    let arr = []
    currentCart.forEach(element => {
      arr.push(element.id == value.id)
    })
    if (arr.indexOf(true) == -1) {
      const newCart = [...currentCart, value]
      localStorage.setItem('cart', JSON.stringify(newCart))
      setMycart(newCart)
    }
  }
  const historydisplay = (
    <>
      <div className="s-couponList p-4">
        {browsehistory.map((item, index) => {
          return (
            <div
              style={{
                margin: '25px',
                width: '200px',
                // height: '100px',
                // position: 'relative',
              }}
            >
              <img src={`/images/shop/small_img/${item.itemImg}`} alt="..." />
              <div
                style={{
                  width: '200px',
                  // position: 'absolute',
                  // bottom: '5px',
                  backgroundColor: 'lightgray',
                  // opacity: 0.5,
                  // zIndex: 2,
                }}
              >
                <Link className="d-flex justify-content-center">
                  <AiOutlineShoppingCart
                    style={{
                      color: '#F9A451',
                      fontSize: '24px',
                      // position: 'relative',
                      // bottom: '5px',
                      zIndex: 10,
                      opacity: 1,
                    }}
                    onClick={() => {
                      updateCartToLocalStorage({
                        id: item.itemId,
                        name: item.itemName,
                        amount: 1,
                        price: item.itemPrice,
                      })
                    }}
                  />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
  const coupondisplay = (
    <>
      <div className="s-couponList p-4">
        <h5>你有{coupon.length}張折價券可使用</h5>
        <h5>已選 {selectCoupon == true ? '1' : '0'}張</h5>
        <select className="col-12 s-coupon" onChange={() => couponselectfunc()}>
          {coupon.map((item, index) => {
            return <option value={item.sId}>{item.sTitle}</option>
          })}
        </select>

        <div className="my-2 s-coupon-pic">
          {coupon.map((item, index) => {
            if (item.sId == couponNo) {
              return (
                <>
                  <img
                    src={`data:image/png;base64,${item.sCoupon}`}
                    value={item.sId}
                    data-discount={item.sMethod}
                    className="coupon img-fluid"
                    alt="..."
                    onClick={e => handleCouponSelect(e.target)}
                  />
                  <div
                    className="img-fluid s-coupon-used"
                    onClick={() => handleCouponSelect2()}
                  >
                    已使用
                  </div>
                </>
              )
            }
          })}
          {/* <img
            src={coupon.sCoupon}
            className="coupon img-fluid"
            alt="..."
            onClick={(e) => handleCouponSelect(e.target)}
          /> */}
        </div>
      </div>
    </>
  )
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
      <PayProgressbar />
      {/* <h3 className="text-center mt-3 h4 s-cart-title">購物清單</h3> */}
      <div className="d-flex">
        <div className="shoppingList col col-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="columnWidth1 h6">
                  商品名稱
                </th>
                <th scope="col" className="h6">
                  單價
                </th>
                <th scope="col" className="columnWidth2 h6">
                  操作
                </th>
              </tr>
            </thead>
          </table>
          <table className="table">
            <tbody>
              {productImgUrl.length !== 0 ? (
                productImgUrl.map((value, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td className="columnWidth1">
                          <Link to={`/product/${value.itemId}`}>
                            <img
                              src={`/images/shop/small_img/${value.itemImg}`}
                              className="img-fluid"
                              alt="..."
                            />
                          </Link>
                        </td>
                        <td className="h5">NT${value.itemPrice}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-info mx-2 my-2 s-btn-common"
                            onClick={() => addToLike(value.itemId)}
                          >
                            <AiOutlineHeart
                              style={{ color: '#F9A451', fontSize: '24px' }}
                            />
                            加入收藏清單
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
                            <AiOutlineDelete
                              style={{ color: '#F9A451', fontSize: '24px' }}
                            />
                            刪除
                          </button>
                        </td>
                      </tr>
                    </>
                  )
                })
              ) : (
                <div style={{ height: '200px', textAlign: 'center' }}>
                  您還沒有把商品加入購物車
                </div>
              )}
            </tbody>
          </table>
        </div>
        {/* <div className="d-flex justify-content-center">
        <img src="/images/shop/coupon.png" style={{ width: '25px' }} alt="" />
        <h3 className="text-center h4">折價券</h3>
      </div> */}
        <div className="row" style={{ margin: '20px 0px 0px' }}>
          <div
            className="col-12 d-flex justify-content-center"
            style={{ height: '40px' }}
          >
            <button
              className="col-5"
              style={{ border: '0px', height: '35px' }}
              onClick={() => {
                setCouponOrHistory(0)
              }}
            >
              折價券
            </button>
            <button
              className="col-5"
              style={{ border: '0px', height: '35px' }}
              onClick={() => {
                setCouponOrHistory(1)
              }}
            >
              瀏覽紀錄
            </button>
          </div>
          {couponOrhistory == 0 ? coupondisplay : historydisplay}
        </div>
      </div>
      <div className="container">
        <table style={{ width: '100%' }}>
          <tbody>
            <tr className="">
              <td
                className="text-right pr-2"
                style={{ width: '75%', fontSize: '20px' }}
              >
                購買總金額(共{mycartDisplay.length}個商品):
              </td>
              <td>
                <span
                  className=""
                  style={{ color: 'orange', fontSize: '30px' }}
                >
                  ${sum(mycartDisplay)}
                </span>
              </td>
            </tr>
            <tr>
              <td
                className="text-right pr-2"
                style={{ width: '75%', fontSize: '20px' }}
              >
                折扣後:
              </td>
              <td>
                <div className="p">
                  <span
                    className=""
                    style={{ color: 'orange', fontSize: '30px' }}
                  >
                    $
                    {selectCoupon
                      ? sum(mycartDisplay) - discount
                      : sum(mycartDisplay)}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center my-3">
        <Link
          type="button"
          className="btn btn-outline-info mx-2 s-btn-common"
          to="/productlist"
        >
          繼續購物
        </Link>
        <Link
          type="button"
          className="btn btn-outline-info mx-2 s-btn-common"
          to="/payment"
        >
          下一步，填付款資訊
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

export default Cart_new

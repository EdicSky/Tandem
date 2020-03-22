import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import '../CSS/Cart.scss'
import '../../css/shop.scss'
import $ from 'jquery'
import { AiOutlineCheckCircle,AiOutlineDelete,AiOutlineHeart } from 'react-icons/ai'

function Cart_new() {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  //coupon select
  const [selectCoupon, setSelectCoupon] = useState(false)
  const [totalMoney, setTotalMoney] = useState(0) //總金額
  const [productIdInCart, setProductIdInCart] = useState([]) //購物車內商品Id
  const [productImgUrl, setProductImgUrl] = useState([])
  const [coupon,setCoupon] = useState([])//coupon資訊
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
  const handleCouponSelect = (element) => {
    setSelectCoupon(!selectCoupon)
    
    element.classList.toggle('couponActive') //click coupon加上邊框顏色
    
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
    let money = sum(mycartDisplay)-coupon.sMethod

    setTotalMoney(money)
    SaveTotalToLocalStorage(money)
  }, [mycartDisplay,coupon])
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
 
  //抓coupon圖片
  async function getCoupon(){
    const request = new Request('http://localhost:3300/product/getCoupon', {
      method: 'POST',
      body: JSON.stringify({'sId':'S001'}),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setCoupon(data.r[0])
  }
  useEffect(()=>{
    getCoupon()
  },[])
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
      <div className="d-flex justify-content-center" style={{paddingTop:'50px'}}>
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

            {productImgUrl.length !== 0 ? productImgUrl.map((value, index) => {
              return (
                <>
                  <tr key={index}>
                    <td className="columnWidth1">
                      <img
                        src={`/images/shop/small_img/${value.itemImg}`}
                        className="img-fluid"
                        alt="..."
                      />
                    </td>
                    <td className="h5">NT${value.itemPrice}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-info mx-2 my-2 s-btn-common"
                      >
                        <AiOutlineHeart/>加入收藏清單
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
                        <AiOutlineDelete/>刪除
                      </button>
                    </td>
                  </tr>
                </>
              )
            }):''}
          </tbody>
        </table>
      </div>
      {/* <div className="d-flex justify-content-center">
        <img src="/images/shop/coupon.png" style={{ width: '25px' }} alt="" />
        <h3 className="text-center h4">折價券</h3>
      </div> */}
      

      <div className="s-couponList p-4">
        <h5>你有1張折價券可使用，已選{selectCoupon == true? '1':'0'}張</h5>
        <div className="my-3" style={{position:'relative'}}>
          <img
            src="https://via.placeholder.com/300x150"
            className="coupon"
            alt="..."
            onClick={(e) => handleCouponSelect(e.target)}
          />
          <AiOutlineCheckCircle style={{ maxWidth:'0',transition:'0.5s',fontSize:'80px',fontWeight:'bold', color:'purple',position:'absolute', left:'15%',top:'30px'}}/>
        </div>
       
        <div className="my-2">
          <img
            src={coupon.sCoupon}
            className="coupon img-fluid"
            alt="..."
            onClick={() => handleCouponSelect()}
          />
        </div>
        
        
        
        
      </div>
      </div>
      <div className="container">
      <table style={{width:'100%'}}>
            <tbody>
              <tr className="">
                <td className="text-right pr-2" style={{width:'75%', fontSize:'20px'}}>
                  
                    購買總金額(共{mycartDisplay.length}個商品):
                    
                  
                </td>
                <td>
                    <span className = "" style={{ color: 'orange', fontSize: '30px'}}>
                      ${sum(mycartDisplay)}
                    </span>
                </td>
              </tr>
              <tr>
                <td className="text-right pr-2" style={{width:'75%', fontSize:'20px'}}>
                  折扣後:
                </td>
                <td>
                  <div className="p">
              
                    <span className = "" style={{ color: 'orange', fontSize: '30px' }}>
                      ${selectCoupon? sum(mycartDisplay) - coupon.sMethod:sum(mycartDisplay)}
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
          className="btn btn-outline-info mx-2"
          to="/productlist"
        >
          繼續購物
        </Link>
        <Link type="button" className="btn btn-outline-info mx-2" to="/payment">
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

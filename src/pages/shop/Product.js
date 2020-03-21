import React, { useState, useEffect } from 'react'
import { withRouter, NavLink, Switch, Route } from 'react-router-dom'
import Config from './Config'
// import Comment from './Comment'
import Comment2 from './Comment2'
import Recommend from './Recommend'
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from 'react-icons/ai'
import '../../css/shop.scss'
import Swal from 'sweetalert2'//sweetalert2
import $ from 'jquery'

function Product(props) {
  const [myproduct, setMyproduct] = useState([])
  const [configORcomment, setCofigORcomment] = useState(1)
  //購物車,與Productlist.js共用
  const [mycart, setMycart] = useState([])
  console.log(props)
  const productId = props.match.params.type
  console.log(productId)
  const [like,setlike] = useState(false)//登錄的人是否有收藏此商品
  const [defaultPic,setDefaultPic] =useState('')
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
    let picUrl = JSON.stringify(myproduct)
    
    console.log('pic',picUrl)
    // console.log(typeof(myproduct))
    setDefaultPic(data.rows[0].itemImg)
    
    // console.log(data.rows)
  }
  useEffect(() => {
    getDataFromServer()
    
  }, [])

  console.log('myproduct資訊=', myproduct)
  const url = props.match.url
  const path = props.match.path
  console.log('url', props.match)
  //以下，將database儲存的收藏此商品id=[1,2,3,4]轉成length
  let wholike = {...myproduct}
  let wholike2 = "'" + wholike.memberFavoriteId +"'"
  
  wholike2 = wholike2.split(",")
  // console.log(wholike2.length)
  //以上，將database儲存的收藏此商品id=[1,2,3,4]轉成length

  //商品加入收藏
  async function addToLike(){
    const request = new Request('http://localhost:3300/product/addtolike', {
      method: 'POST',
      body:JSON.stringify({"userId":2,"likeproductId":myproduct.itemId}),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    
    console.log('加入收藏',data)
    if (data.r.affectedRows == 1){
      
      Swal.fire('商品成功加入收藏!')
    }
  }
  
  //點商品小圖=>展示大圖
  
  function clickTochangePic(e) {
    // console.log('this is',e)
    let newAttr = e.getAttribute("src");
    console.log(newAttr)
    document.querySelector(".s-bigImg img").setAttribute("src",newAttr)
  }

  //處理小圖檔名，組合成大圖檔名
  let bigImgarray = []
  let oldname = String(myproduct.itemImg)
  // oldname.toString()
  let newname = oldname.split(".")
  // console.log(newname[0])
  for (let i = 0;i<=3;i++){
    
    
    bigImgarray.push(newname[0] + "_" +i)
    
  }
  console.log(bigImgarray)
  
  
  return (
    <>
      <div className="d-flex flex-wrap container">
        <div className="col col-sm-12 col-md-6 my-5">
          <div className="text-center s-bigImg">
            <img className="img-fluid" src={`/images/shop/small_Img/${myproduct.itemImg}`} alt="" />
          </div>
          <ul className="list-unstyled d-flex justify-content-center s-smallImg mt-3">
          {bigImgarray.map((img,index)=>{
            return (
              <li key={index} onClick={(e)=>clickTochangePic(e.target)}>
              <img
                className="img-fluid"
                src={`/images/shop/bigImage/${img}.jpg`}
                alt=""
                
              />
            </li>
            )
          })}
            {/* <li>
              <img
                className=" img-fluid"
                src={`/images/shop/small_img/${myproduct.itemImg}`}
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
            </li> */}
            {/* <li>
              <img
                className=""
                src="https://via.placeholder.com/100x100"
                alt=""
              />
            </li> */}
          </ul>
        </div>
        <div className="col col-sm-12 col-md-6 my-5">
          <div className="d-flex">
            <span className="p">NT$:</span>
            <h2>{myproduct.itemPrice}</h2>
          </div>

          <h3>{myproduct.itemName}</h3>
          <p style={{minHeight:'150px'}}>{myproduct.itemIntro}</p>
          <div className="row">
            <button
              type="button"
              className="btn btn-outline-info mx-2 s-btn-common col-5 col-md-4"
              onClick={()=>addToLike()}
            >
              <AiOutlineHeart />
              加入收藏清單
            </button>
            <button
              type="button"
              className="btn btn-outline-info mx-2 s-btn-common col-5 col-md-4"
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
          <div className="row h5 m-2">共{wholike2.length}人收藏此遊戲</div>
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
        {configORcomment === 1 ? <Config /> : <Comment2 props={myproduct}/>}
      </div>
      <div className="container">{<Recommend />}</div>
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

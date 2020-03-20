import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../../css/shop.scss'
import Swal from 'sweetalert2'//sweetalert2
import $ from 'jquery'


function Payment(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [agreement, setAgreement] = useState(false) //同意條款
  const [itemIds, setItemIds] = useState([])
  const [totalPrice, setTotalPrice] = useState(1000) //如何不抓localstorage內的價錢?
  //付款資訊傳到server
  async function submitPayment() {
    let agree = document.querySelector('#agreement').checked
    if (agree === !true) {
      //沒有勾同意就中斷
      alert('請勾選同意服務條款!')
      return
    }
    //抓localstorage的商品Id
    let productId = []

    JSON.parse(localStorage.getItem('cart')).map((item, index) => {
      productId.push(item.id.toString())
    })
    setItemIds(productId) //設定商品id to state
    const body = {
      username: username,
      itemIds: JSON.stringify(productId),
      totalPrice: totalPrice,
    }
    const request = new Request('http://localhost:3300/product/payment', {
      method: 'POST',
      body: JSON.stringify(body), //
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    //若寫入資料庫成功就alert，跳轉order頁
    if (data.result.affectedRows == 1) {
      // alert('訂單成立!')
      Swal.fire('訂單成立!')
      props.history.push('/order')
    }
  }


//填信用卡號自動換格
  useEffect(()=>{
    $(".card-input").on("keyup",function(){
      // console.log($(this).parent().next().find(".card-input"))
      $(this).focus()
      let contentLength = $(this).val().length;
      let maxLength=$(this).attr("maxlength");
      
     
      //數字超過4個跳下一格
      if(contentLength==maxLength){
  
  
          $(this).parent().next().find(".card-input").focus()
         
      }})
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
        <div className="circle">
          <h1>1</h1>
        </div>
        <div className="line"></div>
        <div className="circleActive">
          <h1>2</h1>
        </div>
        <div className="line"></div>
        <div className="circle">
          <h1>3</h1>
        </div>
      </div>
      <h3 className="text-center h4">付款資訊</h3>
      <div className="s-payment p-2 h5">
        <form>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label text-right">總金額</label>
            <div className="col-sm-5 mt-2">
              {'NT$' + localStorage.getItem('total')}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label text-right">
              訂購人姓名
            </label>
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder=""
                onChange={e => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label text-right">
              付款方式
            </label>
            <div className="col-sm-5 mx-2">
              {/* <input
                type="radio"
                className="form-check-input h5 "
                id="exampleCheck1"
                style={{ marginLeft: '-5px', marginRight: '10px' }}
              /> */}
              <label class="form-check ">
              <input type="radio" name="radio"/>
              <span class="s-radio"></span>
              <img
                src="/images/shop/visaCard.png"
                style={{ marginLeft: '10px' }}
                alt="..."
              />
              </label>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label text-right">
            信用卡號
            </label>
            <div className="col-sm-8 ">
              {/* <input
                type="text"
                className="form-check-input h5 "
                id="exampleCheck1"
                style={{ marginLeft: '-5px', marginRight: '10px' }}
              /> */}
              <div class="form-group form-row">
                <div class="col">
                  <input type="password" className="form-control card-input" id="input1" placeholder="" maxlength="4"/>
                </div>
                <div class="col">
                  <input type="password" className="form-control card-input" id="input2" placeholder="" maxlength="4"/>
                </div>
                <div class="col">
                  <input type="password" className="form-control card-input" id="input3" placeholder="" maxlength="4"/>
                </div>
                <div class="col">
                  <input type="text" className="form-control card-input" id="input4" placeholder="" maxlength="4"/>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label text-right">到期日</label>
            <div className="col-sm-4 p-2">
              <select className="" style={{ width: '70px' }}>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </select>
              /
              <select>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
              </select>
            </div>
            <label className="col-sm-2 col-form-label p px-0">安全碼CVV</label>
            <div className="col-sm-2">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder=""
                pattern="\d{3}"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label text-right">
              電子載具
            </label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder=""
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
          <label className="form-check col-5" >
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
            />
            <span className="s-checkbox"></span>
            <label className="form-check-label p " style={{position:'relative',left:'70px'}}>勾選同意服務條款</label>
          </label>
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-center my-3">
        <Link type="button" className="btn btn-outline-info mx-2" to="/cart">
          上一頁
        </Link>
        <button
          type="submit"
          className="btn btn-outline-info mx-2"
          onClick={() => submitPayment()}
        >
          進行結帳
        </button>
      </div>
    </>
  )
  return (
    <>
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}

export default withRouter(Payment)

import React, { useState, useEffect } from 'react'
import '../../css/shop.scss'
function Order() {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [orderInfo, setOrderInfo] = useState([])

  useEffect(() => {
    async function getOrderInfo() {
      const request = new Request('http://localhost:3300/product/orderInfo', {
        method: 'POST',

        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const response = await fetch(request)
      const data = await response.json()
      setOrderInfo(data)
    }
    getOrderInfo()
  }, [])
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
      <div className="d-flex justify-content-center " style={{paddingTop:'50px'}}>
        <div className="circle">
          <h1>1</h1>
        </div>
        <div className="line"></div>
        <div className="circle">
          <h1>2</h1>
        </div>
        <div className="line"></div>
        <div className="circleActive">
          <h1>3</h1>
        </div>
      </div>
      <h3 className="text-center h4">訂單成立</h3>
      <div className="s-payment p-2 h5">
        <form>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label text-right">
              訂單編號
            </label>
            <div class="col-sm-7 p mt-2">
              {orderInfo.map((item, index) => {
                return item.orderId
              })}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label text-right">總金額</label>
            <div class="col-sm-5 p mt-2">
              {orderInfo.map((item, index) => {
                return 'NT$' + item.checkSubtotal
              })}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label text-right">
              訂單日期
            </label>
            <div class="col-sm-5">
              <input
                type="text"
                className="form-control-plaintext"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
                value={orderInfo.map((item, index) => {
                  return item.created_at
                })}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label text-right">
              訂購人姓名
            </label>
            <div class="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder=""
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label text-right">
              付款方式
            </label>
            <div class="col-sm-5 my-2">信用卡付款</div>
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-center my-3">
        <button type="button" className="btn btn-outline-info mx-2">
          完成訂單
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

export default Order

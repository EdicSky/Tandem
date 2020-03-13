import React, { useState, useEffect } from 'react'
function Order() {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [username, setUsername] = useState('')
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
      <h3 className="text-center">訂單資訊</h3>
      <div className="shoppingList">
        <form>
          <div className="form-group row">
            <label for="exampleInputEmail1" className="col-sm-2 col-form-label">
              訂單編號
            </label>
            <div class="col-sm-5">
              <input
                type="text"
                className="form-control-plaintext"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
                value="order12345"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="exampleInputEmail1" className="col-sm-2 col-form-label">
              總金額
            </label>
            <div class="col-sm-5">
              <input
                type="text"
                className="form-control-plaintext"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
                value={'NT$' + localStorage.getItem('total')}
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="exampleInputEmail1" className="col-sm-2 col-form-label">
              訂單日期
            </label>
            <div class="col-sm-5">
              <input
                type="text"
                className="form-control-plaintext"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
                value="2020/01/01"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              for="exampleInputPassword1"
              className="col-sm-2 col-form-label"
            >
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
            <label
              for="exampleInputPassword1"
              className="col-sm-2 col-form-label"
            >
              付款方式
            </label>
            <div class="col-sm-5">credit card</div>
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

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Payment() {
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
        <div className="circleActive">
          <h1>2</h1>
        </div>
        <div className="line"></div>
        <div className="circle">
          <h1>3</h1>
        </div>
      </div>
      <h3 className="text-center">付款資訊</h3>
      <div className="shoppingList">
        <form>
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
            <div class="col-sm-5">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              credit card
            </div>
          </div>
          <div className="form-group row">
            <label
              for="exampleInputPassword1"
              className="col-sm-2 col-form-label"
            >
              到期日
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder=""
              />
            </div>
            <label
              for="exampleInputPassword1"
              className="col-sm-2 col-form-label"
            >
              安全碼
            </label>
            <div class="col-sm-2">
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
              電子載具
            </label>
            <div class="col-sm-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder=""
              />
            </div>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              同意服務條款
            </label>
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-center my-3">
        <Link type="button" className="btn btn-outline-info mx-2" to="/cart">
          上一頁
        </Link>
        <Link type="button" className="btn btn-outline-info mx-2">
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

export default Payment

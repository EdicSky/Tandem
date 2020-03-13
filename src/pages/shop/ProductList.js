import React, { useState, useEffect } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import Slider from '../../components/shop/Slider'
import Filterbar from '../../components/shop/Filterbar'
import Product from './Product'
// import '../../css/styles.scss'
import { AiOutlineHeart,AiOutlineShoppingCart,AiOutlineArrowLeft,AiOutlineArrowRight,AiOutlineCaretLeft,AiOutlineCaretRight } from 'react-icons/ai'
import '../../css/shop.scss'

function ProductList(props) {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [myproduct, setMyproduct] = useState([])
  const [type, setType] = useState(0)
  const [totalpage, setTotalpage] = useState(0)
  const [currentpage, setCurrentpage] = useState(1)

  //   const [search_query, setSearch_query] = useState('456')
  //  加入購物車
  async function updateCartToLocalStorage(value) {
    setDataLoading(true)

    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))
    //設定資料
    setMycart(newCart)
  }
  console.log('currentpage=', currentpage)
  //fetch database product撈所有資料(不分類)
  async function getDataFromServer(page) {
    const request = new Request('http://localhost:3300/product/list/' + page, {
      method: 'GET',
      credentials: 'include',
    })
    const response = await fetch(request)
    const data = await response.json()

    setMyproduct(data.rows)
    setTotalpage(data.totalPages)

    // console.log(data.rows)
  }
  //fetch database product撈所有資料(有分類)
  async function getClassifiedDataFromServer(page) {
    // 利用內建的API來得到URLSearchParams物件
    const searchParams = new URLSearchParams(props.location.search)
    let request = undefined
    if (searchParams.get('type') && type !== 0) {
      request = new Request(
        'http://localhost:3300/product/list/' + type + '/' + page,
        {
          method: 'GET',
          credentials: 'include',
        }
      )
    } else {
      request = new Request('http://localhost:3300/product/list/' + page, {
        method: 'GET',
        credentials: 'include',
      })
    }

    const response = await fetch(request)
    const data = await response.json()

    setMyproduct(data.rows)
    setTotalpage(data.totalPages)

    // console.log(data.rows)
  }

  console.log(myproduct)
  //一開始就會載入資料,記得設定cors
  //當換頁時setcurrentpage到新的值就會觸發getDataFromServer
  useEffect(() => {
    getClassifiedDataFromServer(currentpage)
  }, [currentpage])

  //每次mycart資料有變動就會3秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [mycart])
  //分類type有變動就會觸發
  useEffect(() => {
    getClassifiedDataFromServer(currentpage)
  }, [type])

  //創造頁數list
  let pageNumbers = []
  for (let i = 1; i <= totalpage; i++) {
    pageNumbers.push(i)
  }
  //換頁function
  const paginate = value => {
    setCurrentpage(value)
  }
  //切換Type
  const handletype = value => {
    setType(value)
    setCurrentpage(1)
  }

  // 利用內建的API來得到URLSearchParams物件
  const searchParams = new URLSearchParams(props.location.search)
  console.log(props)
  let search = props.location.search
  console.log('search= ', search)
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
      <div className="row row-cols-3">
        {myproduct.map((value, index) => {
          return (
            <div className="col" key={index}>
              <div className="card my-2">
                <img
                  src="https://via.placeholder.com/250x150"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <Link to={{ pathname: `/product/${value.itemId}` }}>
                    <h5 className="cart-title">{value.itemName}</h5>
                  </Link>
                  <div className="d-flex">
                    <p className="card-text text-danger col-8">
                      NTD{value.itemPrice}
                    </p>
                    <Link
                      className="col-2"
                      onClick={() =>
                        updateCartToLocalStorage({
                          id: value.itemId,
                          name: value.itemName,
                          amount: 1,
                          price: value.itemPrice,
                        })
                      }
                    >
                      {/* <i class="fas fa-shopping-cart"></i> */}
                      <AiOutlineShoppingCart/>
                    </Link>
                    <Link className="col-2">
                      {/* <i class="far fa-heart"></i> */}
                      <AiOutlineHeart/>
                    </Link>
                  </div>
                </div>
                {/* <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() =>
                      updateCartToLocalStorage({
                        id: value.itemId,
                        name: value.itemName,
                        amount: 1,
                        price: value.itemPrice,
                      })
                    }
                  >
                    加入購物車
                  </button>
                </div> */}
              </div>
            </div>
          )
        })}
      </div>

      {/* {myproduct.length}
      {totalpage} */}
      <div className="row">
        <div className="col">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="s-page-item">
                <Link
                  className="page-link"
                  onClick={() => paginate(currentpage - 1)}
                >
                  {/* <i className="fas fa-arrow-left"></i> */}
                  <AiOutlineArrowLeft/>
                </Link>
              </li>
              {pageNumbers.map((number, index) => {
                return (
                  <li
                    key={index}
                    className={
                      'page-item ' + (number === currentpage ? 'active' : '')
                    }
                  >
                    <Link
                      className="page-link"
                      //   to={{
                      //     search: searchParams.get('page')
                      //       ? `page=${number}`
                      //       : search + `page=${number}`,
                      //   }}
                      to={{ search: `type=${type}` + `&&page=${number}` }}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </Link>
                  </li>
                )
              })}
              <li className="page-item ">
                <Link
                  className="page-link"
                  onClick={() => paginate(currentpage + 1)}
                >
                  {/* <i className="fas fa-arrow-right"></i> */}
                  <AiOutlineArrowRight/>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
  //每次total資料有變動就會500ms後關掉載入提示
  return (
    <>
      {/* <Link
        className="btn btn-primary"
        // to={{ search: search + `&&type=1` }}
        to={{ search: `type=1` }}
        onClick={() => {
          handletype(1)
        }}
      >
        類別1
      </Link>
      <Link
        className="btn btn-primary"
        // to={{ search: search + `&&type=1` }}
        to={{ search: `type=2` }}
        onClick={() => {
          handletype(2)
        }}
      >
        類別2
      </Link>
      <h3>產品類型 = {searchParams.get('type')}</h3> */}
      <Slider />
      <Filterbar setMyproduct={setMyproduct} setTotalpage={setTotalpage} />
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}
export default withRouter(ProductList)

import React, { useState, useEffect } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import Slider from '../../components/shop/Slider'
import Filterbar from '../../components/shop/Filterbar'
import Product from './Product'
// import '../../css/styles.scss'
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineCloseCircle,
} from 'react-icons/ai'
import '../../css/shop.scss'
import Swal from 'sweetalert2'
import addToLike from './addToLike'

function ProductList(props) {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [myproduct, setMyproduct] = useState([])
  const [type, setType] = useState(0)
  const [totalpage, setTotalpage] = useState(0)
  const [currentpage, setCurrentpage] = useState(1)
  const [typeURL, setTypeURL] = useState(0)
  const [vendor, setVendor] = useState('V000')
  const [price, setPrice] = useState(9999)
  const [orderBy, setOrderBy] = useState('itemId')

  const searchParams = new URLSearchParams(props.location.search)
  //如果url有type的話就抓下來
  // if(searchParams.get('type')){
  //   let typeURL = searchParams.get('type')
  //   console.log('typeURL',typeURL)
  //   setType(typeURL)
  // }
  //   const [search_query, setSearch_query] = useState('456')
  //  加入購物車
  async function updateCartToLocalStorage(value) {
    setDataLoading(true)
    Swal.fire({html:`商品名稱:${value.name}加入購物車`})
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
    // if (searchParams.get('type') && type !== 0) {
    //   request = new Request(
    //     'http://localhost:3300/product/search/' + type + '/' + currentpage,
    //     {
    //       method: 'GET',
    //       credentials: 'include',
    //     }
    //   )
    // } else {
    //   request = new Request('http://localhost:3300/product/list/' + page, {
    //     method: 'GET',
    //     credentials: 'include',
    //   })
    // }
    //新分業方法
    if (type !== 0 || vendor !== 'V000' || price !== '') {
      request = new Request(
        'http://localhost:3300/product/search/' +
          type +
          '/' +
          vendor +
          '/' +
          price +
          '/' +
          orderBy +
          '/' +
          currentpage,
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
  }, [currentpage, vendor, price, orderBy])

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
  // const handletype = value => {
  //   setType(value)
  //   setCurrentpage(1)
  // }
  function handletype(value) {
    setType(value)
    setCurrentpage(1)
  }
  console.log('type=', type)
  // 利用內建的API來得到URLSearchParams物件
  // const searchParams = new URLSearchParams(props.location.search)
  console.log(props)
  let search = props.location.search
  console.log('search= ', search)
  //顯示排序方式
  let orderbydisplay;
  switch (orderBy){
    case 'itemName ASC':
      orderbydisplay = '遊戲名稱'
      break;
    case 'itemPrice DESC':
      orderbydisplay = '價錢高至低'
      break;
    case 'itemPrice DESC':
      orderbydisplay = '價錢低至高'
      break;
    case 'itemDate ASC':
      orderbydisplay = '推出時間最早'
      break;
    case 'itemDate DESC':
      orderbydisplay = '推出時間最新'
      break;
    
    default:
    }
  //顯示發行商
  let vendordisplay;
  switch (vendor){
    case 'V001':
      vendordisplay = "美國藝電（ElectronicArts）"
      break;
    case 'V002':
      vendordisplay = '動視暴雪（Activision Blizzard）'
      break;
    case 'V003':
      vendordisplay = '2K Games'
      break;
    case 'V004':
      vendordisplay = '任天堂（NINTENDO）'
      break;
    case 'V005':
      vendordisplay = '索尼（SONY）'
      break;
    case 'V006':
      vendordisplay = '育碧（Ubisoft）'
      break;
    case 'V007':
      vendordisplay = '柯樂美（KONAMI）'
      break;
    case 'V008':
      vendordisplay = '卡普空（CAPCOM）'
      break;
    case 'V009':
      vendordisplay = '史克威爾艾尼克斯（SQUARE ENIX）'
      break;
    case 'V010':
      vendordisplay = '世嘉（SEGA）'
      break;
    default:
    }
  //顯示價格區間
  let pricedisplay;
  switch (price){
    case '<100':
      pricedisplay = "< NT$100"
      break;
    case '<500':
      pricedisplay = '< NT$500'
      break;
    case '<1000':
      pricedisplay = '< NT$1000'
      break;
    
    
    default:
    }
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
          <div className="col-6 col-lg-4 col-sm-6" key={index}>
            <div className="s-cardwrap">
              <div
                className="card my-2 s-productlist-card"
                style={{ borderRadius: '0px' }}
              >
                <img
                  src={`/images/shop/small_img/${value.itemImg}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <Link to={{ pathname: `/product/${value.itemId}` }}>
                    <h5 className="cart-title" style={{ color: 'black' }}>
                      {value.itemName}
                    </h5>
                  </Link>
                  <div className="d-flex">
                    <p className="card-text col-8 p-0">NT$ {value.itemPrice}</p>
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
                      <AiOutlineShoppingCart style={{ color: '#79cee2',fontSize:'24px' }} />
                    </Link>
                    <Link className="col-2" onClick={()=>{addToLike({"userId":JSON.parse(localStorage.getItem('LoginUserData')).mbId,"likeproductId":value.itemId})}}>
                      {/* <i class="far fa-heart"></i> */}
                      <AiOutlineHeart style={{ color: '#F9A451',fontSize:'24px' }} />
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
          </div>
          )
        })}
      </div>

      {/* {myproduct.length}
      {totalpage} */}
      <div className="row my-3">
        <div className="col">
          {/* 新的頁數bar開始 */}
          <ul className="d-flex">
            <li className="s-pageItem">
              <Link className="" onClick={() => paginate(currentpage - 1)}>
                <AiOutlineCaretLeft />
              </Link>
            </li>
            {pageNumbers.map((number, index) => {
              const data = {
                type,
                page: number,
              }
              return (
                <li
                  key={index}
                  className={
                    's-pageItem ' +
                    (number === currentpage ? 's-pageItem-Active' : '')
                  }
                >
                  <Link
                    className=""
                    //   to={{
                    //     search: searchParams.get('page')
                    //       ? `page=${number}`
                    //       : search + `page=${number}`,
                    //   }}
                    // to={{ search: `type=${type}` + `&&page=${number}` }}
                    //頁數資訊可以不要顯示在url
                    // onClick={() => {paginate(number);setType(type)}}
                    onClick={() => {
                      setCurrentpage(number)
                    }}
                  >
                    {number}
                  </Link>
                </li>
              )
            })}
            <li className="s-pageItem">
              <Link className="" onClick={() => paginate(currentpage + 1)}>
                <AiOutlineCaretRight />
              </Link>
            </li>
          </ul>
          {/* 新的頁數bar結束 */}

          
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
      <Slider
        handletype={function(value) {
          handletype(value)
        }}
      />
      <div className="d-flex container">
        {type !== 0 ? (
          <div className="s-filterClearBtn">
            類型{type}
            <button onClick={() => setType(0)}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        ) : (
          ''
        )}
        {vendor !== 'V000' ? (
          <div className="s-filterClearBtn">
            發行商:{vendordisplay}
            <button onClick={() => setVendor('V000')}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        ) : (
          ''
        )}
        {price !== 9999 ? (
          <div className="s-filterClearBtn">
            價格:{pricedisplay}
            <button onClick={() => setPrice(9999)}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        ) : (
          ''
        )}
        {orderBy !== 'itemId' ? (
          <div className="s-filterClearBtn">
            排序:{orderbydisplay}
            <button onClick={() => setOrderBy('itemId')}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="container">
      <Filterbar
        setMyproduct={setMyproduct}
        setTotalpage={setTotalpage}
        setVendor={setVendor}
        setPrice={setPrice}
        setOrderBy={setOrderBy}
      />
      </div>
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}
export default withRouter(ProductList)

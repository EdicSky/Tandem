import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../css/shop.scss'
import { AiOutlineSearch } from 'react-icons/ai' //search_icon

function Filterbar(props) {
  const [search_query, setSearch_query] = useState('')
  async function Search() {
    const request = new Request(
      'http://localhost:3300/product/?search=' + search_query,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    const response = await fetch(request)
    const data = await response.json()

    props.setMyproduct(data.rows)
    props.setTotalpage(data.totalPages)
  }
  useEffect(() => {
    Search()
  }, [search_query])
  const handleSearch = value => {
    setSearch_query(value)
  }
  return (
    <>
      <div className="row d-flex justify-content-center my-2">
        <div className="col col-sm-6 col-lg-2 s-filterbar">
          <input
            type="search"
            className="form-control s-filterbar-search"
            aria-label="Text input with dropdown button"
            name="search"
            value={search_query}
            onChange={event => setSearch_query(event.target.value)}
          />
          <Link
            className="s-searchicon"
            to={'/productlist/?search=' + `${search_query}`}
            // onClick={() => props.handleSearch()}
          >
            {/* <i class="fas fa-search"></i> */}
            <AiOutlineSearch />
          </Link>
        </div>
        <div className="col col-sm-6 col-lg-2 s-filterbar">
          <button
            className="btn btn-outline-secondary dropdown-toggle s-filterbar-btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            價格區間
          </button>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <div role="separator" className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#">
              Separated link
            </Link>
          </div>
        </div>
        <div className="col col-sm-6 col-lg-2 s-filterbar">
          <button
            className="btn btn-outline-secondary dropdown-toggle s-filterbar-btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            發行商
          </button>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#" onClick={()=>props.setVendor(2)}>
              1
            </Link>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <div role="separator" className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#">
              Separated link
            </Link>
          </div>
        </div>
        <div className="col col-sm-6 col-lg-2 s-filterbar">
          <button
            className="btn btn-outline-secondary dropdown-toggle s-filterbar-btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <div role="separator" className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#">
              Separated link
            </Link>
          </div>
        </div>
        <div className="col col-sm-6 col-lg-2 s-filterbar">
          <button
            className="btn btn-outline-secondary dropdown-toggle s-filterbar-btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            排序方式
          </button>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
            <div role="separator" className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#">
              Separated link
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filterbar

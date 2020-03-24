// import React from 'react'
// import InfiniteScroll from 'react-infinite-scroll-component'
// import { data } from './data/index'
// export default function Infinitescroll() {
//   return (
//     <>
//       {/* <InfiniteScroll
//           dataLength='20'
//           next={this.fetchMoreData}
//           hasMore={true}
//           loader={<h4>Loading...</h4>}
//         ></InfiniteScroll> */}
//       <div className="row my-5 text-center">
//         {data.map(value => {
//           return (
//             <div className="col-3">
//               <img src={value.image} />
//               <p>{value.title}</p>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Infinitescroll extends React.Component {
  state = {
    breweries: [],
    pageNumber: 1,
    items: 12,
    hasMore: true,
  }

  componentDidMount() {
    //initial request is sent
    this.fetchData()
  }

  fetchData = () => {
    axios
      .get(
        `http://localhost:5555/items/posts?page=${this.state.pageNumber}&per_page=${this.state.items}`
      )
      .then(res =>
        this.setState({
          //updating data
          breweries: [...this.state.breweries, ...res.data],
          //updating page numbers
          pageNumber: this.state.pageNumber + 1,
        })
      )
  }

  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.breweries.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.hasMore}
          loader={<h4>網頁載入中...</h4>}
          className="row"
        >
          {this.state.breweries.map(brewery => (
            <div
              className="col-4 my-4"
              key={brewery.post_id}
              onClick={() =>
                (window.location.href = `/postdetail/${brewery.post_id}`)
              }
            >
              <figure className="C-InfiniteLoadFigure" style={{}}>
                <img
                  src={`http://localhost:5555/img/${brewery.postImg}`}
                  style={{ height: '100%', width: '100%', display: 'block' }}
                />
              </figure>

              {/* <p>{brewery.postContent}</p> */}
            </div>
          ))}
        </InfiniteScroll>
      </>
    )
  }
}

export default Infinitescroll

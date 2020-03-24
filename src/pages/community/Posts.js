import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Posts(props) {
  const [posts, setPosts] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [items, setItems] = useState(12)
  const [hasMore, setHasMore] = useState(true)

  async function fetchPost() {
    let res = await fetch('http://localhost:5555/items/postsDetail')
    let response = await res.json()
    setPosts(response)
    console.log(response)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  //   useEffect(() => {
  //     axios({
  //       method: 'GET',
  //       url: 'http://localhost:5555/items/posts',
  //       params:{q:query}
  //     })
  //   }, [])

  //   fetchData = () => {
  //     axios
  //       .get(
  //         `http://localhost:5555/items/posts?page=${pageNumber}&per_page=${items}`
  //       )
  //       .then(res =>
  //     setPosts(response)
  //     setPageNumber(pageNumber+1)

  //         })
  //       )
  //   }

  return (
    <>
      <div className="container">
        <div className="row">
          {posts.length > 0
            ? posts.map(v => (
                <>
                  {/* <div className="row"> */}
                  <div className="col-sm-4">
                    <h3>{v.postTitle}</h3>
                    {/* <p>{v.postContent}</p> */}
                    <img src={`http://localhost:5555/img/${v.postImg}`} />
                  </div>
                  {/* </div> */}
                </>
              ))
            : ''}
        </div>
      </div>
    </>
  )
}

// import React, { Component } from 'react'

// export default class Posts extends Component {
//   state = {
//     posts: null,
//   }
//   async componentDidMount() {
//     const url = 'http://localhost:5555/items/posts'

//     const response = await fetch(url)
//     const data = await response.json()
//     // setPosts(JSON.stringify(data[1]))
//     this.setState({ posts: data })
//     // console.log(data)
//   }
//   render() {
//     return <div>{this.state.posts}</div>
//   }
// }

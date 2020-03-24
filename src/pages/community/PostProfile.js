import React, { useEffect, useState } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai'

function PostProfile(props) {
  const [posts, setPosts] = useState([])
  // const [postMember, setPostMember] = useState([])
  const [loginUser, setLoginUser] = useState('')

  //連資料庫 fetch API
  async function fetchPost() {
    let res = await fetch('http://localhost:5555/items/posts')
    let response = await res.json()
    setPosts(response)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  // 連資料庫 fetch API (memberdata for post)

  // async function fetchPostMember() {
  //   let res = await fetch('http://localhost:5555/items/postsMember', {
  //     method: 'POST',
  //     credentials: 'include',
  //     body: JSON.stringify(props),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //   let response = await res.json()
  //   console.log('response', response)
  //   setPostMember(response)
  // }
  // useEffect(() => {
  //   fetchPostMember()
  // }, [])

  //文章判斷會員文章首頁
  let postProfile = null
  let arr = []

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].mbId === +props.match.params.id) {
      postProfile = posts[i]
      // const postImage = posts[i].postImg
      // posts[i].push(pos)
      // arr.push(posts)
      arr.push(postProfile)
      // console.log(postProfile)
    }
  }
  // return <></>

  if (postProfile === null) {
    // console.log(loginUser)
    return (
      <>
        {/* <div className="container">
          <h1>null</h1>
        </div> */}
        {/* <div className="container">
          <div
            className="d-flex align-items-center m-auto"
            style={{ width: '800px' }}
            // ref={el => (div1 = el)}
          >
            <figure
              style={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
                overflow: 'hidden',
                margin: '0 40px',
              }}
            >
              <img
                src={loginUser.mbAva}
                style={{ display: 'block', width: '100%', height: '100%' }}
              />
            </figure>
            <div>
              <h3>{loginUser.mbNick}</h3>
              <p>{loginUser.mbDes}</p>
              <div className="d-flex ">
                <p className="font-weight-bold">{arr.length} 貼文</p>
                <p className="mx-4 font-weight-bold"> 好友</p>
              </div>
            </div>
          </div>
          <div
            style={{
              height: '2px',
              width: '1200px',
              background: '#79cee2',
              margin: '10px 0',
            }}
            // ref={el => (div2 = el)}
          ></div>
          <div className="d-flex m-3 ">
            <p className="mx-2">貼文列表</p>
            <p className="mx-2">我的收藏</p>
          </div>
        </div>

        <NavLink
          to={`/addpost`}
          className="d-flex justify-content-end"
          style={{
            fontSize: '45px',
            color: '#F9A451',
            position: 'fixed',
            zIndex: '10',
            right: '40px',
          }}
        >
          <AiOutlinePlusCircle />
        </NavLink> */}
      </>
    )
  } else {
    console.log(arr)

    return (
      <>
        <div className="container">
          <div
            className="d-flex align-items-center m-auto"
            style={{ width: '800px' }}
            // ref={el => (div1 = el)}
          >
            <figure
              style={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
                overflow: 'hidden',
                margin: '0 40px',
              }}
            >
              <img
                // src="/images/community/1.png"
                src={postProfile.mbAva}
                style={{ display: 'block', width: '100%', height: '100%' }}
              />
            </figure>
            <div>
              <h3>{postProfile.mbNick}</h3>
              <p>{postProfile.mbDes}</p>
              <div className="d-flex ">
                <p className="font-weight-bold">{arr.length} 貼文</p>
                <p className="mx-4 font-weight-bold"> 好友</p>
              </div>
              <button className="C-profileaddbtn">加入好友</button>
            </div>
          </div>
          <div
            style={{
              height: '2px',
              width: '1130px',
              background: '#79cee2',
              margin: '10px 0',
            }}
            // ref={el => (div2 = el)}
          ></div>
          <div className="d-flex m-3 ">
            <p className="mx-2">貼文列表</p>
            <p className="mx-2">我的收藏</p>
          </div>
        </div>

        {/* 新增貼文 */}
        <NavLink
          to={`/addpost`}
          className="d-flex justify-content-end"
          style={{
            fontSize: '45px',
            color: '#F9A451',
            position: 'fixed',
            zIndex: '10',
            right: '40px',
          }}
        >
          <AiOutlinePlusCircle />
        </NavLink>
        {/*---------新增貼文------- */}

        <div className="container">
          <div className="row">
            {arr.map(v => (
              <div className="col-6">
                <figure
                  className="C-profilePostFigure"
                  onClick={() => {
                    window.location.href = `/postdetail/${v.post_id}`
                  }}
                >
                  <>
                    <img
                      src={`http://localhost:5555/img/${v.postImg}`}
                      style={{ width: '100%' }}
                    />
                  </>
                </figure>
                {/* <p>{postProfile.postImg}</p> */}
              </div>
            ))}
          </div>
        </div>
      </>
    )
    // arr.map(v => {
    //   ;<>
    //     <div className="d-flex">
    //       <div className="C-profilePostImg">
    //         <figure className="C-profilePostFigure">
    //           <img
    //             style={{ width: '100%' }}
    //             src={`http://localhost:5555/img/${v.postImg}`}
    //           />
    //         </figure>
    //         <p>{postProfile.postImg}</p>
    //       </div>
    //     </div>
    //   </>
    // })
  }
}
export default withRouter(PostProfile)

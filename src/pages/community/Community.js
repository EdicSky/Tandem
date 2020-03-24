import React from 'react'
import { withRouter, Route, Switch, NavLink } from 'react-router-dom'

// import { cartIncrement } from '../../actions'
import AddPost from './AddPost'
import IndexSearchBar from '../../components/community/IndexSearchBar'
import InfiniteScroll from '../../components/community/InfiniteScroll'

// import { gsap } from 'gsap'
import Localstorage from '../../Shadow_Data_ver2'

function Community(props) {
  // const cartNumbers = useSelector(state => state.cartnumbers)
  // const dispatch = useDispatch()
  console.log(props.match.url)
  console.log(props.match.path)
  // let url = props.match.url
  let path = props.match.path

  // let line1 = useRef(null)
  // let line2 = useRef(null)

  // useEffect(()=>{
  //   gsap.from([line1,line2],0.8{
  //     delay:0.8,
  //     ease:"power3.out",
  //     y:64,
  //     stagger:{
  //       amount:0.15
  //     }
  //   })
  // },)
  return (
    <div className="container">
      <Localstorage />

      <IndexSearchBar />
      <InfiniteScroll />

      <Switch>
        <Route path={path} exact>
          <></>
        </Route>
        <Route path={`${path}/addpost`}>
          <AddPost />
        </Route>
      </Switch>
    </div>
  )
}

export default withRouter(Community)

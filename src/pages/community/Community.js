import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai'
// import { useSelector, useDispatch } from 'react-redux'
// import { cartIncrement } from '../../actions'
import AddPost from './AddPost'

function Community() {
  // const cartNumbers = useSelector(state => state.cartnumbers)
  // const dispatch = useDispatch()

  return (
    <Router>
      <a
        href="./addpost"
        className="d-flex justify-content-end"
        style={{ fontSize: '40px' }}
      >
        <AiOutlinePlusCircle />
      </a>

      <Route path="/addpost">
        <AddPost />
      </Route>
    </Router>
  )
}

export default Community

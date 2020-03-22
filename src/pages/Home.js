import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-bootstrap'
import fullpage from 'fullpage.js'
import ReactFullpage from '@fullpage/react-fullpage'
import '../css/home.scss'

function Home() {
  useEffect(() => {
    new fullpage('#fullpage', {
      autoScrolling: true,
      scrollHorizontally: true,
      navigation: true,
      navigationTooltips: ['Home', 'Blog', 'About Us', 'Contact Us'],
      controlArrows: false,
      slidesNavigation: true,
      keyboardScrolling: true,
      // sectionSelector: '.section',
    })
  }, [])

  return (
    <div class="row">
      <div id="fullpage">
        <div class="section s1">
          <h1>Home Section</h1>
        </div>
        <div class="section s2">
          <div class="slide">
            <NavLink activeClassName="active" className="" href="./forum">
              <h1>Blog Section</h1>
            </NavLink>
          </div>
          <div class="slide">
            <h1>Post No.1</h1>
          </div>
          <div class="slide">
            <h1>Post No.2</h1>
          </div>
          <div class="slide">
            <h1>Post No.3</h1>
          </div>
        </div>
        <div class="section s3">
          <h1>About Us Section</h1>
        </div>
        <div class="section s4">
          <h1>Contact Us Section</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
// ReactDOM.render(<Fullpage />, document.getElementById('react-root'))

// function Home() {
//   new fullpage('#fullpage', {
//     autoScrolling: true,
//     scrollHorizontally: true,
//     navigation: true,
//     navigationTooltips: ['Home', 'Blog', 'About Us', 'Contact Us'],
//     controlAroows: false,
//     slidesNavigation: true,
//     keyboardScrolling: true,
//   })

//   return (
//     <>
//       <div id="fullpage">
//         <div class="section s1">
//           <h1>Home Section</h1>
//         </div>
//         <div class="section s2">
//           <div class="slide">
//             <h1>Blog Section</h1>
//           </div>
//           <div class="slide">
//             <h1>Post No.1</h1>
//           </div>
//           <div class="slide">
//             <h1>Post No.2</h1>
//           </div>
//           <div class="slide">
//             <h1>Post No.3</h1>
//           </div>
//         </div>
//         <div class="section s3">
//           <h1>About Us Section</h1>
//         </div>
//         <div class="section s4">
//           <h1>Contact Us Section</h1>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Home

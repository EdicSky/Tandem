import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-bootstrap'
import fullpage from 'fullpage.js'
import ReactFullpage from '@fullpage/react-fullpage'
import { Animated } from 'react-animated-css'
// import { useSpring, animated as anim } from 'react-spring'
import '../css/landingpage.scss'

function LandingPage() {
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
          <Animated
            animationIn="bounceInUp"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay="1500"
          >
            <h1>
              <a href="./home">
                <img src={require('../logotitle.png')} />
              </a>
            </h1>
          </Animated>
          <Animated
            animationIn="bounceInDown"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay="3000"
          >
            {/* <h2>
              <a class="f-btn" href="#">
                GET STARTED
              </a>
            </h2> */}
            {/* <div
              class=" gradient-border vertical-center "
              style="background-color: #FCFAF2 ;width:800px; height:500px;margin:50px auto;"
            >
              <div class="gradient-box">
                <div class=" gradient1">
                  <a href="./home">JOIN US</a>
                </div>
              </div>
            </div> */}
          </Animated>

          {/* <NavLink activeClassName="active" className="" href="./home">
            <h1>Home Section</h1>
          </NavLink> */}
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

export default LandingPage
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

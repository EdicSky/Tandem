import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-bootstrap'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Parallax } from 'react-parallax'

import '../css/home.scss'

// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// }
// const insideStyles = {
//   // background: 'white',
//   padding: 20,
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%,-50%)',
// }
const image1 = 'images/home1.jpg'
const image2 = 'images/home2.jpg'
const image3 = 'images/home3.jpg'
const image4 = 'images/home4.jpg'
const imageh1 = 'images/home-caro1.jpg'
const imageh2 = 'images/home-caro2.jpg'
const imageh3 = 'images/home-caro3.jpg'
function Home() {
  return (
    <>
      <Carousel autoPlay="true" infiniteLoop="true">
        <div>
          <img src={imageh1} />
          <p className="legend">
            <a href="https://www.e3expo.com/">
              2020 E3電玩展 因武漢肺炎疫情 停辦一次
            </a>
          </p>
        </div>
        <div>
          <img src={imageh2} />
          <p className="legend">
            <a href="https://tgs.tca.org.tw/index_portal.php">
              2020 台北國際電玩展 因武漢肺炎疫情 停辦一次
            </a>
          </p>
        </div>
        <div>
          <img src={imageh3} />
          <p className="legend">
            <a href="https://www.playstation.com/en-us/explore/ps5/">
              PlayStation5 即將上市
            </a>
          </p>
        </div>
      </Carousel>

      <Parallax>
        <div clsaa="row">
          <div class="h-styles">
            {/* <div class="home-gap"></div> */}

            <Parallax
              bgImage={image1}
              strength={300}
              blur={{ min: -5, max: 10 }}
            >
              <Parallax
                renderLayer={percentage => (
                  <div
                    class="h-sideStyles-1"
                    style={{
                      position: 'absolute',
                      background: `rgba(249, 164, 81, ${percentage * 1})`,
                      // left: '50%',
                      // top: '100%',
                      borderRadius: '50%',
                      transform: 'translate(-50%,-50%)',
                      width: percentage * 500,
                      height: percentage * 500,
                    }}
                  >
                    商品
                  </div>
                )}
              ></Parallax>
              <Parallax>
                <div style={{ height: 600 }}>
                  <div class="h-insideStyles-1">HTML inside the parallax</div>
                </div>
              </Parallax>
              {/* <div class="h-sideStyles-2">活動</div> */}
            </Parallax>

            <div class="home-gap"></div>
            <Parallax bgImage={image2} blur={{ min: -5, max: 10 }}>
              <div style={{ height: 500 }}>
                <div class="h-insideStyles-2">Dynamic Blur</div>
              </div>
            </Parallax>

            <div class="home-gap-1"></div>
            <Parallax
              bgImage={image3}
              strength={300}
              blur={{ min: -5, max: 10 }}
            >
              <div style={{ height: 800 }}>
                <div class="h-insideStyles-3">Reverse direction</div>
              </div>
            </Parallax>

            <div class="home-gap-2"></div>
            <Parallax
              bgImage={image4}
              strength={100}
              blur={{ min: -5, max: 10 }}
              renderLayer={percentage => (
                <div>
                  <div
                    style={{
                      position: 'absolute',
                      background: `rgba(249, 164, 81, ${percentage * 1})`,
                      left: '50%',
                      top: '50%',
                      borderRadius: '50%',
                      transform: 'translate(-50%,-50%)',
                      width: percentage * 500,
                      height: percentage * 500,
                    }}
                  />
                </div>
              )}
            >
              <div style={{ height: 800 }}>
                <div class="h-insideStyles-bottom">
                  <a href="./member">LET'S TANDEM ！</a>
                </div>
                <div class="h-insideStyles-4">Reverse direction</div>
              </div>
            </Parallax>
          </div>
        </div>
      </Parallax>
    </>
  )
}

export default Home

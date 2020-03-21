import React from 'react'
import logotitle from '../logotitle.png'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillMail, AiFillYoutube } from 'react-icons/ai'
import { Container, NavLink } from 'react-bootstrap'
import { ReactComponent as Logo } from '../logo.svg'

// import '../css/header-footer.css'

function Footer() {
  return (
    <>
        <footer class="l-footer">
            {/* <Container> */}
    <div class="m-container">
        <div className="justify-content-center titlesize">
            <img src={logotitle} className="titlesize" alt="Logo" />
        </div>

        <div class="l-footer_function">
            <div class="l-footer_function_row l-footer_function_row-01">
                <ul class="l-footer_nav footerlist">
                    <li class="l-footer_nav_item"><a href="#">關於TANDEM</a></li>
                    <li class="l-footer_nav_item"><a href="#">TANDEM服務規範</a></li>
                    <li class="l-footer_nav_item"><a href="#">隱私權政策</a></li>
                    <li class="l-footer_nav_item"><a href="#">人才招募</a></li>
                    <li class="l-footer_nav_item"><a href="#">聯絡我們</a></li>
                    <li class="l-footer_nav_item"></li>
                </ul>
            </div>
            <div class="l-footer_function_row l-footer_function_row-02">
                <ul class="l-footer_service footer-icon">
                    <li class="l-footer_service_item">
                        <NavLink>        
                            <AiFillFacebook />
                        </NavLink>
                    </li>
                    <li class="l-footer_service_item">
                        <NavLink>        
                            <AiFillInstagram />
                        </NavLink>
                    </li>
                    <li class="l-footer_service_item">
                        <NavLink>        
                            <AiFillTwitterCircle />
                        </NavLink>
                    </li>
                    <li class="l-footer_service_item">
                        <NavLink>        
                            <AiFillMail />
                        </NavLink>
                    </li>
                    <li class="l-footer_service_item">
                        <NavLink>        
                            <AiFillYoutube />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>

        <p class="l-footer_copyright font-ca footerbottom"><small>Copyright <span lang="en">©</span> TANDEM, Inc.</small></p>
    </div>
    {/* </Container> */}
</footer>
    </>
  )
}

export default Footer
import React from 'react'
import { Container, Link } from 'react-bootstrap'
import { ReactComponent as Logo } from '../logo.svg'

// import '../css/header-footer.css'

function Footer() {
  return (
    <>
        <footer class="l-footer">
            {/* <Container> */}
    <div class="m-container">
        <div className="justify-content-center logosize"><Logo /></div>

        <div class="l-footer_function">
            <div class="l-footer_function_row l-footer_function_row-01">
                <ul class="l-footer_nav">
                    <li class="l-footer_nav_item"><a href="#">關於TANDEM</a></li>
                    <li class="l-footer_nav_item"><a href="#">TANDEM服務規範</a></li>
                    <li class="l-footer_nav_item"><a href="#">隱私權政策</a></li>
                    <li class="l-footer_nav_item"><a href="#">人才招募</a></li>
                    <li class="l-footer_nav_item"><a href="#">聯絡我們</a></li>
                    <li class="l-footer_nav_item"></li>
                </ul>
            </div>
            <div class="l-footer_function_row l-footer_function_row-02">
                <ul class="l-footer_service">
                    <li class="l-footer_service_item"><a rel="noopener" href="#" target="_blank" class="m-iconBadge m-iconBadge-facebook"><span class="m-icon m-icon-facebook">&nbsp;</span></a></li>
                    <li class="l-footer_service_item"><a rel="noopener" href="#" target="_blank" class="m-iconBadge m-iconBadge-instagram"><span class="m-icon m-icon-instagram">&nbsp;</span></a></li>
                    <li class="l-footer_service_item"><a rel="noopener" href="#" target="_blank" class="m-iconBadge m-iconBadge-twitter"><span class="m-icon m-icon-twitter">&nbsp;</span></a></li>
                    <li class="l-footer_service_item"><a href="#" class="m-iconBadge"><span class="m-icon m-icon-mail">&nbsp;</span></a></li>
                    <li class="l-footer_service_item"><a rel="noopener" href="#" target="_blank" class="m-iconBadge m-iconBadge-youtube"><span class="m-icon m-icon-youtube">&nbsp;</span></a></li>
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
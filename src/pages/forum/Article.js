import React from 'react'
import { NavLink} from 'react-bootstrap'
import '../../css/forum.css'
import { AiOutlineGoogle, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

function Article() {
  return (
    <>
        <div class="container">

            <div class="f-gap-2"></div>
            <ul class="f-breadcrumbs">        
                <li><a href="./home">首頁</a></li>        
                <li><span class="fa fa-angle-right"></span></li>        
                <li><a href="./forum">開發論壇</a></li>
                <li><span class="fa fa-angle-right"></span></li>        
                <li><a href="./forum">程式設計</a></li>        
                <li><span class="fa fa-angle-right"></span></li>       
                <li><span>Grab your sword and fight the Horde</span></li>        
            </ul>

            <div class="f-gap-2"></div>

            {/* 文章內容 */}
            <div class="row f-vertical-gap">
                <div class="col-lg-12">
                    <div class="f-hot-post f-hot-post-single">
                        <div class="f-hot-post-text mt-0">
                            <div class="f-hot-post-img">
                                <img src="./images/forum/post-2.jpg" alt="Grab your sword and fight the Horde"/>
                            </div>

                            <div class="f-gap-1"></div>
                            <h1 class="f-hot-post-title h4">Grab your sword and fight the Horde</h1>
                            <div class="f-gap"></div>
                            <div class="f-hot-post-by">
                                <img src="./images/forum/avatar-2.jpg" alt="Witch Murder" class="rounded-circle" width="35"/> by <a href="#">Witch Murder</a> in Sep 5, 2018                        
                                <div class="f-hot-post-category">                            
                                    <span class="f-index-bg-5">程式設計</span>                            
                                    <span class="f-index-bg-6">原畫創作</span>                            
                                </div>                        
                            </div>

                            <div class="f-gap"></div>
                            <p>Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door.	The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them, as if she had known them all her life. Indeed, she had quite a long argument with the Lory, who at last turned sulky, and would only say, `I am older than you, and must know better'; and this Alice would not allow without knowing how old it was, and, as the Lory positively refused to tell its age, there was no more to be said.</p>

                            <div class="f-gap"></div>
                            <blockquote class="f-blockquote">
                                <div class="f-blockquote-icon"><span>"</span></div>
                                <div class="f-blockquote-content">
                                    Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door. As if she had known them all her life. Indeed, she had quite a long argument with the Lory.
                                </div>
                                <div class="f-blockquote-author"><span>Samuel Marlow</span></div>
                            </blockquote>

                            <div class="f-gap"></div>
                            <img class="float-left mt-0" src="./images/forum/post-inner-img.jpg" alt=""/>
                            <h3 class="h4">Now the races of these two have been</h3>
                            <p>I confess this side of the country was much pleasanter than mine; but yet I had not the least inclination to remove, for as I was fixed in my habitation it became natural to me, and I seemed all the while I was here to be as it were upon a journey, and from home. However, I travelled along the shore she clutched the matron by the arm, and forcing her into a chair by the bedside, was about to speak, wh en looking round, she caught sight of the two old women bending forward in the attitude of eager list eners.They belong to the old gentleman, said Oliver, wringing his hands; "to the good, kind, old gentle man who took me into his house, and had me nursed, when I was near dying of the fever . Oh, pray send them back; send him back the books and money</p>

                            <div class="f-gap"></div>
                            <div class="f-plain-video" data-video="https://www.youtube.com/watch?v=6cXyQg_5uoc"><span class="fa fa-play pl-5"></span></div>

                            <div class="f-gap-2"></div>
                            <p>This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again. For some minutes Alice stood without speaking, looking out in all directions over the country - and a most curious country it was.</p>


                            <div class="f-gap"></div>
                            <div class="f-post-share justify-content-between">
                                <span class="">Share Article:</span>
                                <div class="d-flex f-post-share-icon">
                                    {/* <li><span class="nk-social-facebook" title="Share page on Facebook" data-share="facebook"><span class="fab fa-facebook"></span></span></li>
                                    <li><span class="nk-social-twitter" title="Share page on Twitter" data-share="twitter"><span class="fab fa-twitter"></span></span></li>
                                    <li><span class="nk-social-pinterest" title="Share page on Pinterest" data-share="pinterest"><span class="fab fa-pinterest-p"></span></span></li>
                                    <li><span class="nk-social-linkedin" title="Share page on LinkedIn" data-share="linkedin"><span class="fab fa-linkedin"></span></span></li>
                                    <li><span class="nk-social-vk" title="Share page on VK" data-share="vk"><span class="fab fa-vk"></span></span></li> */}

                                        <AiOutlineGoogle/>
                                        <AiOutlineFacebook/>
                                        <AiOutlineTwitter/>
                                        <AiOutlineLinkedin/>

                                </div>
                            </div>
                        </div>

                        {/* 留言內容 */}
                        <div class="f-gap-3"></div>
                        <div id="comments"></div>
                        <h3 class="f-latest-title"><span><span class="f-category-text">3則</span> 評論</span></h3>
                        
                        <div class="f-gap"></div>
                        <div class="f-comments">
                            <div class="f-comment">
                                <div class="f-comment-meta">
                                    <img src="./images/forum/avatar-2.jpg" alt="Witch Murder" class="rounded-circle" width="35"/> by <a href="#">Witch Murder</a> in 20 September, 2018
                                    <a href="#" class="f-index-btn f-index-btn-rounded f-index-btn-color float-right">Reply</a>
                                </div>
                                <div class="f-comment-text">
                                    <p>This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.</p>
                                </div>

                            <div class="f-comment">
                                <div class="f-comment-meta">
                                    <img src="./images/forum/avatar-1.jpg" alt="Hitman" class="rounded-circle" width="35"/> by <a href="#">Hitman</a> in 20 September, 2018
                                    <a href="#" class="f-index-btn f-index-btn-rounded f-index-btn-color float-right">Reply</a>
                                </div>
                                <div class="f-comment-text">
                                    <p>To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.</p>
                                </div>
                            </div>
                            </div>

                            <div class="f-comment">
                                <div class="f-comment-meta">
                                    <img src="./images/forum/avatar-3.jpg" alt="Wolfenstein" class="rounded-circle" width="35"/> by <a href="#">Wolfenstein</a> in 21 September, 2018
                                    <a href="#" class="f-index-btn f-index-btn-rounded f-index-btn-color float-right">Reply</a>
                                </div>
                                <div class="f-comment-text">
                                    <p>The sight of the tumblers restored Bob Sawyer to a degree of equanimity which he had not possessed since his interview with his landlady. His face brightened up, and he began to feel quite convivial.</p>
                                </div>
                            </div>
                        </div>


                        {/* 留言回應 */}
                        <div class="f-gap-3"></div>
                        <h3 class="f-latest-title"><span><span class="f-category-text">留言</span> 回覆</span></h3>
                
                        <div class="f-gap"></div>
                        <div class="f-reply">
                            <form action="#" class="f-form" novalidate="novalidate">
                                <div class="row f-sm-gap f-vertical-gap">
                                    <div class="col-md-4">
                                        <input type="email" class="form-control required" name="email" placeholder="Email *"/>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control required" name="name" placeholder="Name *"/>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" name="name" placeholder="Website"/>
                                    </div>
                                </div>
                                
                                <div class="f-gap-1"></div>
                                <textarea class="form-control required" name="message" rows="5" placeholder="Message *" aria-required="true"></textarea>
                        
                                <div class="f-gap-1"></div>
                                <div class="f-form-response-success"></div>
                                <div class="f-form-response-error"></div>
                                <button class="f-index-btn f-index-btn-rounded f-index-btn-color">留言</button>
                            </form>
                        </div>

                        {/* 相關文章 */}
                        <div class="f-gap-3"></div>
                        <h3 class="f-latest-title"><span><span class="f-category-text">相關</span> 文章</span></h3>
                        
                        <div class="f-gap"></div>
                        <div class="row">                    
                            <div class="col-md-4">
                                <div class="f-hot-post">
                                    <a href="#" class="f-hot-post-img">
                                        <img src="./images/forum/post-3-mid.jpg" alt="We found a witch! May we burn her?"/>
                                        <span class="f-hot-post-comments-count">7</span>                                
                                        <span class="f-hot-post-category">
                                            <span class="f-index-bg-5">程式設計</span>
                                        </span>                               
                                    </a>
                                
                                <div class="f-gap"></div>
                                <h2 class="f-hot-post-title h4"><a href="#">We found a witch! May we burn her?</a></h2>
                                </div>
                            </div>
                    
                            <div class="col-md-4">
                                <div class="f-hot-post">
                                    <a href="#" class="f-hot-post-img">
                                        <img src="./images/forum/post-4-mid.jpg" alt="For good, too though, in consequence"/>
                                        <span class="f-hot-post-comments-count">23</span>                                
                                        <span class="f-hot-post-category">
                                            <span class="f-index-bg-6">原畫創作</span>
                                        </span>                                
                                    </a>
                                
                                <div class="f-gap"></div>
                                <h2 class="f-hot-post-title h4"><a href="#">For good, too though, in consequence</a></h2>
                                </div>
                            </div>  

                            <div class="col-md-4">
                                <div class="f-hot-post">
                                    <a href="#" class="f-hot-post-img">
                                        <img src="./images/forum/post-3-mid.jpg" alt="We found a witch! May we burn her?"/>
                                        <span class="f-hot-post-comments-count">13</span>                                
                                        <span class="f-hot-post-category">
                                            <span class="f-index-bg-5">程式設計</span>
                                        </span>                               
                                    </a>
                                
                                <div class="f-gap"></div>
                                <h2 class="f-hot-post-title h4"><a href="#">We found a witch! May we burn her?</a></h2>
                                </div>
                            </div>                  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Article
import React from 'react'

import { NavLink } from 'react-router-dom'

import {
  AiOutlineClockCircle,
  AiOutlineFolderOpen,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineSearch,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from 'react-icons/ai'

function RelatedNews() {
  return (
    <>
      <NavLink to="#" className="a">
        <li>
          <div className="related_img"></div>
          <div className="related_content">
            <div className="related_time">
              <div className="time_group d-flex">
                <AiOutlineClockCircle className="icon" />
                <p>2019.11.1</p>
              </div>
            </div>
            <div className="related_title">
              <h4>《萬智牌：競技場》</h4>
            </div>
          </div>
        </li>
      </NavLink>
    </>
  )
}
export default RelatedNews

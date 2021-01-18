import React from 'react'
import { devUrl } from '../../../config/index'
import { NavLink } from 'react-router-dom'

function CourseBlockTwo(props) {
  return (
    <div className="block_two">
      <div className="wrapper" style={{ marginBottom: '25px' }}>
        <img src={props.imgUrl2} alt="" />
        <NavLink
          className="btn-info-more btn btn-outline-light"
          variant="outline-light"
          // to={props.type === 'succulent' ? '/course/search' : '/course/search'}
          to={`/course/search/${props.type}`}
        >
          了解更多
        </NavLink>
      </div>
      <div className="wrapper">
        <img src={props.imgUrl3} alt="" />
        <NavLink
          className="btn-info-more btn btn-outline-light"
          variant="outline-light"
          // to={props.type === 'succulent' ? '/course/search' : '/course/search'}
          to={`/course/search/${props.type}`}
        >
          了解更多
        </NavLink>
      </div>
    </div>
  )
}

export default CourseBlockTwo

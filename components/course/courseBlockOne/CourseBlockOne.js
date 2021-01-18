import React from 'react'
import { Button } from 'react-bootstrap'
import { devUrl } from '../../../config/index'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function CourseBlockOne(props) {
  return (
    <div className="block_one">
      <img src={props.imgUrl1} alt="" />
      <NavLink
        className="btn-info-more btn btn-outline-light"
        type="button"
        // class="btn btn-outline-success"
        variant="outline-light"
        to={`/course/search/${props.type}`}
        // to={props.type === 'succulent' ? '/course/search' : '/course/search'}
      >
        了解更多
      </NavLink>
    </div>
  )
}

export default CourseBlockOne

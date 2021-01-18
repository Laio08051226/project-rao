import React from 'react'
import './CourseMonth.scss'
import Carousel from 'react-multi-carousel'
import { devUrl } from '../../../config/index'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    // slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

function CourseMonth(props) {
  return (
    <>
      <div className="r-month-courses">
        <div className="title">
          <h1>{props.text === 'recommend' ? '其他推薦課程' : '本月開課'}</h1>
          <h5>
            {props.text === 'recommend'
              ? 'Other Courses'
              : 'Courses of The Month'}
          </h5>
        </div>

        <div className="courses-card-wrapper">
          <Carousel
            responsive={responsive}
            className="r-course-card-carouse"
            // itemClass="carousel-item-padding-20-px"
            containerClass="r-carousel-container"
          >
            <div className="card" style={{ width: '18.75rem' }}>
              <img
                src={devUrl + '/images/course/course-guide/雞蛋盆手作課01.jpg'}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">雞蛋盆手作課</h5>
                <p className="card-text">日期 1/20、1/25、1/28</p>
              </div>
            </div>
            <div className="card" style={{ width: '18.75rem' }}>
              <img
                src={
                  devUrl + '/images/course/course-guide/多肉玻璃屋手作課04.jpg'
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">多肉玻璃屋手作課</h5>
                <p className="card-text">日期 1/20、1/25、1/28</p>
              </div>
            </div>
            <div className="card" style={{ width: '18.75rem' }}>
              <img
                src={
                  devUrl + '/images/course/course-guide/多肉盆花手作課04.jpg'
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">多肉盆花手作課</h5>
                <p className="card-text">日期 1/20、1/25、1/28</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default CourseMonth

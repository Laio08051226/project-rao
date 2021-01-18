import React from 'react'
// import MyBreadcrumb from '../components/main/MyBreadcrumb/MyBreadcrumb'
// import { renderRoutes, matchRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'

//元件匯入
import CourseBanner from '../components/course/courseBanner/CourseBanner'
import Scroll from '../components/main/Scroll/Scroll'
import ScrollTop from '../components/main/ScrollTop/ScrollTop'
import MainContent from '../components/main/MainContent'
import CourseTypeSucculent from '../components/course/courseTypeLeft/CourseTypeSucculent'
import CourseTypeBall from '../components/course/courseTypeRight/CourseTypeBall'
import CourseTypeFlower from '../components/course/courseTypeLeft/CourseTypeFlower'
import CourseTypePlant from '../components/course/courseTypeRight/CourseTypePlant'
import CourseBookingFlow from '../components/course/courseBookingFlow/CourseBookingFlow'
import CourseMonth from '../components/course/courseMonth/CourseMonth'
import CoursePast from '../components/course/coursePast/CoursePast'

function CourseGuide(props) {
  console.log(props)
  return (
    <>
      <CourseBanner />
      <MainContent style={{ margin: '0 50%' }}>
        <Scroll />
        <ScrollTop />
        <CourseTypeSucculent type={'succlent'} />
        <CourseTypeBall />
        <CourseTypeFlower />
        <CourseTypePlant />
        <CourseBookingFlow />
        <CourseMonth />
        <CoursePast />
      </MainContent>
    </>
  )
}

export default withRouter(CourseGuide)

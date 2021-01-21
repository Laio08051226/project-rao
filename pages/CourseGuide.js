import React, { useState, useEffect } from 'react'
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
  // const { clickType, setClickType } = useState()
  // console.log("Guide_page!" + clickType)

  // useEffect(() => {
  //   props.setFinalType(clickType)
  // }, [clickType])
  return (
    <>
      <CourseBanner />
      <MainContent style={{ margin: '0 50%' }}>
        <Scroll />
        <ScrollTop />
        {/* <CourseTypeSucculent type={'succlent'} setClickType={setClickType} /> */}
        <CourseTypeSucculent type={'succlent'} />
        {/* <CourseTypeBall type={'ball'} setClickType={setClickType} /> */}
        <CourseTypeBall type={'ball'} />
        {/* <CourseTypeFlower type={'flower'} setClickType={setClickType} /> */}
        <CourseTypeFlower type={'flower'} />
        {/* <CourseTypePlant type={'plant'} setClickType={setClickType} /> */}
        <CourseTypePlant type={'plant'} />
        <CourseBookingFlow />
        <CourseMonth />
        <CoursePast />
      </MainContent>
    </>
  )
}

export default withRouter(CourseGuide)

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//基本排版元件
import Header from './components/main/Header'
// import MyFooter from './components/main/MyFooter/MyFooter'
//頁面
import Home from './pages/Home'
import CourseGuide from './pages/CourseGuide'
import CourseSearch from './pages/CourseSearch'
import CourseInfo from './pages/CourseInfo'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  // const { finalType, setFinalType } = useState()
  // useEffect(() => {

  // },[finalType])
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/course" exact>
            {/* <CourseGuide setFinalType={setFinalType} /> */}
            <CourseGuide />
          </Route>
          <Route path="/course/search/" exact>
            {/* <CourseSearch type={finalType} /> */}
            <CourseSearch Guide_type={'succlent'} />
          </Route>
          <Route path="/course/:id" exact>
            <CourseInfo isAuth={isAuth} />
          </Route>
        </Switch>
        {/* Footer 位置 */}
      </>
    </Router>
  )
}

export default App

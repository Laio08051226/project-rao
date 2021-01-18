import React from 'react'
import { devUrl } from '../../../config/index'

function TestBreadcrumb(props) {
  console.log(props)
  return (
    <>
      <nav aria-label="breadcrumb" style={{ margin: '27px 0 62px 0' }}>
        <ol className="breadcrumb-bg d-flex">
          <li className="breadcrumb-item">
            <a href={devUrl + '/'}>首頁</a>
          </li>
          <li className="breadcrumb-item">
            <a href={devUrl + '/course'}>手作課程</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            課程搜尋
          </li>
          {/* <li className="breadcrumb-item active" aria-current="page">
            {props.match.params.name}
          </li> */}
        </ol>
      </nav>
    </>
  )
}

export default TestBreadcrumb

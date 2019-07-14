import moment from 'moment'
import React from 'react'
import ReactDOM from 'react-dom'

let time = moment('20190201', 'YYYYMMDD').format()
console.log(time)

if(module.hot) {
  module.hot.accept()
}

ReactDOM.render(<h1>hello world</h1>, document.getElementById('app'))

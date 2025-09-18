import React from 'react'
// import PropsType from 'prop-type'
const Car = ({a1,fun1}) => { // this is a function expression syntax of passing props
  return (
    <>
    <div>Car</div>
    <h1>Hello</h1>
    <p>{a1}</p>
    <p>{fun1()}</p>
    </>
  )
}
// Car.propsType = {
//   a1 : PropsType.string
// }

export default Car
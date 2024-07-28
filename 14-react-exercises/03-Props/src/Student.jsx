import React from 'react'

// Props : read-only component shared between components 
//        parent sends data to child component
//        <ComponentName propName={value} />

const Student = (props) => {
  return (
    <div className='student'>
      <p>Name    : {props.name}</p>
      <p>Age     : {props.age}</p>
      <p>Student : {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}
// Student.protoType = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool
// }

// Student.defaultProps = {
//   name: "Guest",
//   age: 0,
//   isStudent: false
// }

export default Student
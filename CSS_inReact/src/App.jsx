import React from 'react'
import Form from './Form'

const App = () => {
  return (
    <>
      <style>
        {`
        .container{
        border-style:dotted;
        border-color:blue;
        font-weight:bold;
        }
        .container h3{
        color: blue;
        }
      `}
      </style>
      <div style={{ borderStyle: "solid", borderColor: "red" }}>Inline Styling</div>
      <div className='container'>Internal Styling
        <h3>into style tag in backtick</h3>
      </div>
      <Form />
    </>
  )
}

export default App
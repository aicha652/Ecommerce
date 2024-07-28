import "./Recommended.css"
import React from 'react'

export default function Recommended() {
  return (
    <>
       <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btns">All Products</button>
          <button className="btns">nike</button>
          <button className="btns">Adidas</button>
          <button className="btns">Puma</button>
          <button className="btns">Vans</button>
        </div>
       </div>
    </>
  )
}

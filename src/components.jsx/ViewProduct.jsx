import React, { useEffect, useState } from 'react'
import NavBarProduct from './NavBarProduct'
import axios from 'axios'

const ViewProduct = () => {
  const [data, setData] = new useState([])
  const getData = () => {
    axios.get("http://localhost:3003/api/product/viewall").then(
      (response) => {
        setData(response.data)
      }
    )
  }
  useEffect(() => { getData() }, [])
  return (
    <div>
      <NavBarProduct/>
      
        
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ProductId</th>
            <th scope="col">Product Name</th>

            <th scope="col">Price</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(
              (value, index) => {
                return <tr>
                  <th scope="row">{value.productid}</th>
                  <td>{value.productname}</td>
                  <td>{value.price}</td>
                  <td>{value.description}</td>
                </tr>
              }
            )
          }

        </tbody>
      </table>
    </div>
  )
}

export default ViewProduct
import axios from 'axios'
import React, { useState } from 'react'
import NavBarProduct from './NavBarProduct'

const AddPro = () => {
    
        const [input,setInput]= new useState({
            "productid":"",
            "productname":"",
            "price":"",
            "description":""
        })
        const inputHandler=(event)=>{
            setInput({...input,[event.target.name]:event.target.value})
        }
        const readvalues=()=>{
            console.log(input)
            axios.post("http://localhost:3003/api/product/add",input).then(
                (response)=>{
                    console.log(response.data)
                }
            )
        }
  return (
    <div>
        <NavBarProduct/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Product id</label>
                            <input type="text" className="form-control" name='productid' value={input.productid} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Product Name</label>
                            <input type="text" className="form-control" name='productname' value={input.productname} onChange={inputHandler}/>
                        </div>
                        
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' value={input.price} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">description</label>
                            <input type="text" className="form-control" name='description' value={input.description} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success"  onClick={readvalues}>Add</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPro
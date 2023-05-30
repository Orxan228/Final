import React from 'react'
import "./AddCon.scss"
import { Helmet } from 'react-helmet'
import axios from "axios"
import * as yup from "yup"
import {useFormik} from "formik"


const validationSchema = yup.object({
  name:yup
  .string("Name must be a string")
  .required("Name is required"),
  price:yup
  .number("Price must be anumber")
  .required("Price is required")
})
const AddCon = () => {

  const formik = useFormik({
    initialValues:{
      name:"",
      price:""
    },
    validationSchema:validationSchema,
    onSubmit:(values,{resetForm}) =>{
      alert(JSON.stringify(values,null,2))
      axios.post("http://localhost:7777/products",values)
      resetForm()
    }
  })
  return (
    <>
      <Helmet>  
          <title>Add</title>  
      </Helmet> 

      <div className="add">
        <div className="add__inner">
          <p>Add an item:</p>
          <form className="add__inner--form" onSubmit={formik.handleSubmit}>
            <input 
            type="text" 
            placeholder='Add a name' 
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helpertext={formik.touched.name && (formik.errors.name)}
            />
            {formik.errors.name ? <div>{formik.errors.name}</div> : ""}
            <input 
            type="number" 
            placeholder='Add a price' 
            id="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helpertext={formik.touched.price && (formik.errors.price)}
            />
            {formik.errors.price ? <div>{formik.errors.price}</div> : ""}
            <button type='submit' onClick={(e)=>{
              e.target.preventDefault
              
            }}>Add the item</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddCon

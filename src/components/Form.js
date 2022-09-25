import React,{useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';

const intialObj={
      title: "",
      content: ""
    }

const Form = () => {
  const[values,setValues]=useState(intialObj)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  //function to submit function
 const FormSubmit=(e)=>{
   e.preventDefault()
    axios.post("http://localhost:5000/createUser",values)
   .then(
    (response)=>{
      console.log(response.data.message);
      swal({
        title: "Saved",
        text: "Successfully stored",
        icon: "success",
        button: "Finish",
      })
    }
    
   )
   .catch((err)=>{
    console.log(err)
    swal({
      title: "Error",
      text: "Failed to Submit Note",
      icon: "error",
      button: "Finish",
    })
  })
 }
  return (
    <>  
<form onSubmit={FormSubmit}>
  <p>{JSON.stringify(values)}</p>
  <div className="mb-6">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Note title</label>
    <input type="text" 
     name="title"
     value={values.title}
     onChange={handleInputChange}
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     placeholder="Note Name" 
     required={true}/>
  </div>
  <div className="mb-6">
    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Note Content</label>
    <textarea type="textarea" 
    value={values.content} 
    onChange={handleInputChange}
    name="content"
    rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Notes"
    required={true}/>
  </div>
  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      type="submit">
      Save Note
    </button>
</form>

    </>
  )
}

export default Form
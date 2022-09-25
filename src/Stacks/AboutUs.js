import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AboutUs = () => {
const[data,setData]=useState([])
//toast function
const notify=(title)=>{
  toast(`Successfully deleted ${title}`,{
    position: toast.POSITION.TOP_CENTER
  });
}
//delete
const deleteNote=(id,title)=>{
  axios.get(`http://localhost:5000/delete/${id}`).then(
    response =>{
      notify(title)
      console.log(response)
    }
  ).catch(err=>console.log(err));
}
//end
useEffect(()=>{
  axios.get("http://localhost:5000/getAll").then((response)=>{
    setData(response.data)
    console.log(response);
  })
})
//returning the received array
const table=data.map(({id,title,created})=>{
  return(
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {id}
                </th>
                <td className="py-4 px-6">
                    {title}
                </td>
                <td className="py-4 px-6">
                   {created}
                </td>
                <td className="py-4 px-6">
                <button 
                onClick={()=>{deleteNote(id,title)}}
                type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                </td>
        </tr>
  )
})
  return (
    <>
    {/* {data} */}
    <ToastContainer/>
  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
   <div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Note Id
                </th>
                <th scope="col" className="py-3 px-6">
                    Title
                </th>
                <th scope="col" className="py-3 px-6">
                    Creation <br/>Date
                </th>
                <th scope="col" className="py-3 px-6">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default AboutUs
import React from 'react'
import Form from '../components/Form.js'
import swal from 'sweetalert';

const HomeScreen = () => {
    const Approval=()=>{
        swal({
            title: "Approval",
            text: "Desktop Application 0",
            icon: "success",
            button: "Finish",
          })
    }
  return (
    
    <>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={Approval}>
                    Approve
                </button>
                <Form/>
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
    </>
  )
}

export default HomeScreen
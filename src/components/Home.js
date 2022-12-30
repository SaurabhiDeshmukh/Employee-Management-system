import React, { useContext, useEffect, useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from "react-router-dom";
import { adddata, deletedata } from "./context/ContextProvider";
import { updatedata } from "./context/ContextProvider";

const Home = () =>{

const [getuserdata,setUserdata] = useState([]);
console.log(getuserdata);
const {udata,setUdata} = useContext(adddata);
const {updata,setUpdata} = useContext(updatedata)
const {deleteData,setDeletedata}=useContext(deletedata)

  const getdata = async(e)=>{

    // e.preventDefault();
    // const{ name,email,age,mobile,work,add,desc}= inpval;
  
  
    const res = await fetch("/getdata",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
      // body:JSON.stringify({
      //   name,email,age,mobile,work,add,desc
  
      // })
    });
    const data = await res.json();
    console.log(data);
    if(res.status === 404 ||  !data){
      // alert("error");
      console.log("error");
      
    }
    else{
      // alert("data added");
      setUserdata(data)
      console.log("get data");
    }
  }
  
useEffect(()=>{
  getdata();
},[])

const deleteemp = async(id)=>{
  const res2 = await fetch(`/deleteemp/${id}`,{
    method:"DELETE",
    headers: {
      "Content-Type":"application/json"
    }
  });

const deletedata = await res2.json();
console.log(deletedata);
 if(res2.status === 404 || !deletedata)
 {
  console.log("error");
  
 }
 else{
  console.log("emp deleted");
  setDeletedata(deleteData)
  getdata();
 }

}


    return (


<>
{
  udata ?
  <>
  <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{udata.name}</strong>  added successfully
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  </>: ""
}
{
  updata ?
  <>
  <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{updata.name}</strong>  updated successfully
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  </>: ""
}

{
  deleteData ?
  <>
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>{deleteData}</strong> Deleted successfully
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  </>: ""
}





<div className="mt-5">
    <div className="container">
    <div className="add_btn mt-2 mb-2">
  <NavLink to="/register" className="btn btn-warning">Add employee </NavLink>
    </div>
    <table class="table">
  <thead>
    <tr className="table-dark">
      <th scope="col">ID</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Job</th>
      <th scope="col">Number</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

{
  getuserdata.map((element,id)=>{
    return(
<>
       <tr>
      <th scope="row">{id+1}</th>
      <td>{element.name}</td>
      <td>{element.email}</td>
      <td>{element.work}</td>
      <td>{element.mobile}</td>
      <td className="d-flex justify-content-between">
       <NavLink to={`view/${element._id}`}><button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
       <NavLink to={`edit/${element._id}`}><button className= "btn btn-primary"><CreateIcon/></button></NavLink>
        <button className="btn btn-danger" onClick={()=>deleteemp(element._id)} ><DeleteOutlineIcon/></button>
      </td>
    </tr>
      </>
    )
  })
}
  
  </tbody>
</table>
    </div>

</div>
</>
    )
}

export default Home
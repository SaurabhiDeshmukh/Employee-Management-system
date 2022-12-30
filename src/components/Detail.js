import React, { useEffect ,useState} from 'react'

import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TabletAndroid } from '@mui/icons-material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';


const Detail = () => {
  const [getuserdata,setUserdata] = useState([]);
const {id} = useParams("");
console.log(id);

const navigate = useNavigate();
  const getdata = async()=>{

    const res = await fetch(`/getemployee/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
      
    });
    const data = await res.json();
    console.log(data);
    if(res.status === 404 ||  !data){
      
      console.log("error");
      
    }
    else{
     
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
    navigate("/");
   }
  
  }

  return (
    <div className='container mt-3 '>
      <h1 style={{fontWeight:400}}>Welcome</h1>
      <Card sx={{ maxWidth: 600 }}>
      <CardContent>
      <div className='add_btn'>
         <NavLink to={`/edit/${getuserdata._id}`}><button className= "btn btn-primary mx-2"><CreateIcon/></button></NavLink>
        <button className="btn btn-danger"  onClick={()=>deleteemp(getuserdata._id)} ><DeleteOutlineIcon/></button>
</div>
        <div className='row'>
        <div className='left_view col-lg-6 col-md-6 col-12'>
       <img src="/user2.jpg" style={{width:50}} alt="profile" />
        <h3 className='mt-3'>Name:<span>{getuserdata.name}</span></h3>
        <h3 className='mt-3'>Age:<span>{getuserdata.age}</span></h3>
        <p  className='mt-3'><EmailIcon/>Email: <span>{getuserdata.email}</span></p>
        <p  className='mt-3'><WorkIcon/>Occupation:<span>{getuserdata.work}</span></p>
       </div>
       <div className='right_view col-lg-6 col-md-6 col-12'>

       <p  className='mt-5'><TabletAndroidIcon/>Mobile: <span>{getuserdata.mobile}</span></p>
        <p  className='mt-3'><LocationOnIcon/>Location:<span>{getuserdata.add}</span></p>
        <p  className='mt-3'>Description:<span>{getuserdata.desc}</span></p>
       </div>
        </div>
       
      </CardContent>
      </Card>


    </div>
  )
}

export default Detail

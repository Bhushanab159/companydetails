import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState} from "react";
import { Transfer } from './FetchData';
import "./UserHeader.css"
export default function UserHeader() {
    const data = Transfer();
  console.log(data);
  const [user,setUser] = useState({
    // profilepicture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Favatar&psig=AOvVaw191O0ObJiRRe9f6cjfXSUt&ust=1679821489571000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDxt-Xc9v0CFQAAAAAdAAAAABAE"
  });
  const params = useParams();

  useEffect(()=>{
    const ans = data.value.filter((ans)=>{
      return ans.id==params.id
    })
    setUser({...user, ...ans[0]});
  },[user])
  console.log(user);
  return (
   <>
   <section id='UserHeader'>
    <header id='header'>
        <h1>Profile</h1>
        <div id='userHeaderImg'>
            <img src={user.profilepicture} alt="" />
        <h6>{user.name}</h6>
        </div>
        
    </header>
   </section>
   <hr id='hr' />
   </>
  )
}

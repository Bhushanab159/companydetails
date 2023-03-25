import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { Transfer } from './FetchData';
import image from "./images/map.jpg"
import "./UserInfo.css"

export default function UserInfo() {
  const data = Transfer();
  console.log(data);
  const [user,setUser] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",

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
    <section id='userDe'>
    <div id='user'>
      <div id='div1'>
        <img src={user.profilepicture} alt="" />
        <h1>{user.name}</h1>
        <h3><span>UserName : </span>{user.username}</h3>
        <h3><span>E-mail : </span>{user.email}</h3>
        <h3><span>Phone : </span>{user.phone}</h3>
        <h3><span>Website : </span>{user.website}</h3>
      </div>
      <hr id='hr1' />
      <div id='div2'>
        <h1>Company</h1>
        <h3><span>Name : </span>{user.name}</h3>
        <h3><span>catchphrase : </span>{user.email}</h3>
        <h3><span>bs : </span>{user.phone}</h3>
      </div>
    </div>
    <div id='address'>
      <h1>Address</h1>
    <h3><span>Street : </span>{user.name}</h3>
    <h3><span>Suite : </span>{user.phone}</h3>
    <h3><span>City : </span>{user.website}</h3>
    <h3><span>Zipcode : </span>{user.email}</h3>
    <img src={image}alt="" />
    </div>
   </section>
   
   </>
  )
}

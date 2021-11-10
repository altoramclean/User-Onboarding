import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user details.....</h3>
  }

  return (
    <div className='user-container'>
    <h2>First Name{details.first_name}</h2>
     <h2>Last Name{details.last_name}</h2>   
   <h3>Email: {details.email}</h3>
    <h3>Password: {details.Password}</h3>
    </div>
  )
}
export default User;
import React from 'react'


export default function Register() {
  return (
    <div>
       <h1>Register</h1>
       <form>
  <label>
    Nom :
    <input type="text" name="name" />
  </label>
  <label>
    Last name:
    <input type="text" lname="lname" />
  </label>
  <label>
    Username: 
    <input type="text" uname="uname" />
  </label>
  <label>
    E-mail: 
    <input type="text" e-mail="e-mail" />
  </label>
  <label>
    Password: 
    <input type="text" password="password" />
  </label>
  <label>
    Confirm Password
    <input type="text" cpassword="cpassword" />
  </label>

  <input type="submit" value="Envoyer" />
</form>


    </div>
  )
}
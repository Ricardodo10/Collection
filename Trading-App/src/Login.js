import React from 'react'

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" uname="uname" />
        </label>
        <label>
          Password:
          <input type="text" password="password" />
        </label>
      </form>
    </div>
  )
}
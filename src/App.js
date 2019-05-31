import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'

const App = () => {
  const [ users, setUsers ] = useState([])

  const addUser = (user) => {
    user.id = Date.now()
    setUsers([ ...users, user ])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const clearList = () => {
    if (window.confirm('Do you want to delete all users from the list?')) {
      setUsers([])
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6'>
          <h1>Crypto users</h1>
          <Form addUser={addUser} users={users} />
        </div>
        <div className='col s12'>
          <Table users={users} deleteUser={deleteUser} />
          {users.length > 0 && (
            <button className='btn' onClick={() => clearList()}>
              Clear List
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

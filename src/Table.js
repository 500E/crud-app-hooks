import React from 'react'

const Table = ({ users, deleteUser }) => (
  <table className='striped'>
    <thead>
      <tr>
        <th>Nickname</th>
        <th>Email</th>
        <th>IP address</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.nickname}</td>
            <td>{user.email}</td>
            <td>{user.ip}</td>
            <td>
              <button onClick={() => deleteUser(user.id)} className='btn-floating '>
                X
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr />
      )}
    </tbody>
  </table>
)

export default Table

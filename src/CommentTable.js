import React from 'react'

const CommentTable = ({items}) => {
  return (
    <table className='border-2 border-solid border-black-500'>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.postId}</td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CommentTable
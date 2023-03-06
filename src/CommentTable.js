import React from 'react'

const CommentTable = ({items}) => {
  return (
    <table className='p-3 border-2 border-solid border-black-500'>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className='p-3 border-2 border-solid border-black-500'>{item.postId}</td>
            <td className='p-3 border-2 border-solid border-black-500'>{item.id}</td>
            <td className='p-3 border-2 border-solid border-black-500'>{item.name}</td>
            <td className='p-3 border-2 border-solid border-black-500'>{item.email}</td>
            <td className='p-3 border-2 border-solid border-black-500'>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CommentTable
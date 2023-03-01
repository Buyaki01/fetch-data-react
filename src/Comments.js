import { useEffect } from "react";

const Comments = ({COMMENTS_URL, comments, setComments}) => {
  useEffect(() => {
    const fetchComments = async () => {
      try{
        const response = await fetch(COMMENTS_URL)
        if (!response.ok) throw Error('Not yet received the data')
        const data = await response.json()
        setComments(data)
      }catch(err){
        console.log(err.stack)
      }
    }

    fetchComments();
  }, [])

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          {JSON.stringify(comment)}
        </li>
      ))}
    </ul>
  )
}

export default Comments
import { useEffect } from "react";

const Posts = ({POSTS_URL, posts, setPosts}) => {
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await fetch(POSTS_URL)
        if (!response.ok) throw Error('Not yet received the data')
        const data = await response.json()
        setPosts(data)
      }catch(err){
        console.log(err.stack)
      }
    }

    fetchPosts();
  }, [])

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          {JSON.stringify(post)}
        </li>
      ))}
  </ul>
  )
}

export default Posts
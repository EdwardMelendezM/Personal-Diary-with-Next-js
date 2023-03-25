import LikeButton from './LikeButton'

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface Properties{
  id:string
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return data
}

export default async function ListoOfPost ({ id }:Properties) {
  const posts = await fetchPosts()

  return (
    <div>
      {posts.slice(0, 5).map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton />
        </article>
      ))}
    </div>
  )
}

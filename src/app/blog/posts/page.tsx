import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default function Posts() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl text-purple-700 font-bold mb-4">Posts</h1>
        <ul>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              date={post.date}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

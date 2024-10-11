import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default function Page() {
  return (
    <div className="py-2">
      <h1 className="text-4xl text-green-700 font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

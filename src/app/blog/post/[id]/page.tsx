import { posts } from "@/app/lib/placeholder-data";

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === params.id);

  return (
    <div className="p-4 my-4">
      <h1 className="text-4xl text-green-800 font-bold mb-4">{post?.title}</h1>
      <p className="text-gray-500">{post?.date}</p>
      <p>{post?.content}</p>
    </div>
  );
}

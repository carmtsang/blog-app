export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl text-purple-700 font-bold mb-4">Welcome</h1>
            <p className="text-lg text-gray-700 mb-4">
              Toy mouse squeak roll over cat milk copy park pee walk owner
              escape bored tired cage droppings sick vet vomit. Slap kitten
              brother with paw. Leave dead animals as gifts lick left leg for
              ninety minutes, still dirty one of these days I&apos;m going to
              get that red dot,
            </p>
            <a
              href="/"
              className="outline outline-1 outline-offset-2 border-purple-700 text-purple-700 hover:text-white py-2 px-4 rounded hover:bg-purple-800 md:w-auto"
            >
              Go to Blog
            </a>
          </div>
        </div>
      </div>
      <div className="bg-purple-800 hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0"></div>
    </main>
  );
}

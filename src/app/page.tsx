import styles from "@/app/ui/styles/home.module.css";
import Image from "next/image";
import { roboto } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-green-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1
              className={`${roboto.className} text-4xl0 ont-bold mb-4 ${styles.text_mountain}`}
            >
              Welcome
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Toy mouse squeak roll over cat milk copy park pee walk owner
              escape bored tired cage droppings sick vet vomit. Slap kitten
              brother with paw. Leave dead animals as gifts lick left leg for
              ninety minutes, still dirty one of these days I&apos;m going to
              get that red dot,
            </p>
            <a
              href="/blog/posts"
              className={`outline outline-1 outline-offset-2 border-green-700 ${styles.text_mountain} hover:text-white py-2 px-4 rounded hover:bg-green-800 md:w-auto ${styles.fit_content_}`}
            >
              Go to Blog
            </a>
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src="/desktop.png"
              width={1000}
              height={760}
              className="hidden md:block z-10 rounded-xl"
              alt="A block that says Desktop Image"
            />
            <Image
              src="/mobile.png"
              width={560}
              height={620}
              className="block md:hidden z-10 rounded-xl"
              alt="A block that says Desktop Image"
            />
          </div>
        </div>
      </div>
      <div
        className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.bg_mountain}`}
      ></div>
    </main>
  );
}

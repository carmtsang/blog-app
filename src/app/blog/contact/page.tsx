import React from "react";

export default function Page() {
  return (
    <div className="py-2">
      <h1 className="text-4xl text-green-800 font-bold mb-4">Contact</h1>
      <p>
        Somehow manage to catch a bird but have no idea what to do next, so play
        with it until it dies of shock pet me pet me pet me pet me, bite,
        scratch, why are you petting me, or naughty running cat, yet mesmerizing
        birds and eat plants.
      </p>
      <div className="py-1">
        <h2 className="text-2xl text-green-700 font-bold">Get in Touch</h2>
        <ul className="list-disc px-5">
          <li>
            Email: <a href="mailto:contact@example.com">contact@example.com</a>
          </li>
          <li>
            Website: <a href="https://www.example.com">www.example.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

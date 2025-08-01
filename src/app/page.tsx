// src/app/page.tsx
import { getAllPosts } from "./lib/getBlogPosts";

export default async function Home() {
  const allPosts = await getAllPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl sm:text-3xl">Stuff I'm Thinking Through</h1>

        <ul className="grid gap-4">
          {allPosts.map((post) => (
            <li
              key={post.slug}
              className="rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
               <a href={`/${post.slug}`} className="block p-2 rounded">
                 {post.title}
               </a>
            </li>
          ))}
        </ul>
      </main>
       <footer className="row-start-3 text-sm text-center text-gray-500 dark:text-gray-400">
         Written by Rafael del Espejo. Probably still tinkering with the layout.
       </footer>
    </div>
  );
}

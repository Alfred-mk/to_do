import Link from "next/link";

async function getPostsData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();
}

export default async function Page() {
    const posts = await getPostsData()

    return <>
        <header className="flex justify-between item-center mb-4">
            <h1 className="text-2x1">Posts</h1>
            <Link
            className="border border-slate-300 
            text-slate-300 px-2 py-1 rounded 
            hover:bg-slate-700 focus-within:bg-slate-700 
            outline-none"
            href="/">Home</Link>
        </header>
        <ul className="pl-4">
            {posts.map((post: any) => {
                return <p>{post.title}</p>
            })}
      </ul>
    </>
}
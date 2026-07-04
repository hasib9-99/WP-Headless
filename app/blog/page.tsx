import { getPosts } from "@/lib/wordpress";
import Link from "next/link";


export default async function Blog() {

    const posts = await getPosts();
    return (
        <div className="p-10">
            <h1 className="text-4xl">
                Blogs
            </h1>
            {
                posts.map((post: any) => (
                    
                        <Link 
                        key={post.id}
                        href={`blog/${post.slug}`}
                        className= "bolder border-1 p-5 my-5 block"
                        >
                            {post.title.rendered}
                        </Link>
                ))
            }
        </div>
    )
}
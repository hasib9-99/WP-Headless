import { getPost } from "@/lib/wordpress";


export default async function SingleBlog({params,}: {
    params: Promise<{
        slug: string;
    }>;
}) {

    const { slug } = await params;

    const post = await getPost(slug);


    if (!post) {
        return (
            <h1 className="text-4xl p-10">
                Post Not Found
            </h1>
        );
    }


    return (
        <article className="p-10">

            <h1 className="text-5xl font-bold">
                {post.title.rendered}
            </h1>

            <div
                className="mt-5"
                dangerouslySetInnerHTML={{
                    __html: post.content.rendered,
                }}
            />

        </article>
    );
}
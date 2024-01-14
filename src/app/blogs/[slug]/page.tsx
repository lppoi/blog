import { parseISO } from "date-fns";
import { allPosts } from 'contentplayer/generated'
import { format } from "@/utils/format";
import MDXRender from "@/components/MdxRender";

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === decodeURI(params.slug))
    return { title: post?.title }
}


const BlogLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === decodeURI(params.slug))
    if (!post) throw new Error(`文章不存在: ${params.slug}`)

    return (
        <article className="prose max-w-none mx-auto rounded-md p-8 bg-slate-100">
            <div>
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <div className="flex gap-4 items-center">
                    <small>
                        {post.tags?.map((tag, index) => <span key={index}>{tag}</span>)}
                    </small>
                    <time dateTime={post.date} className="text-xs text-gray-600">
                        {format(parseISO(post.date), 'LLLL d, yyyy')}
                    </time>
                    <small>
                        该篇共{post.readingTime.words}字，需阅读大约{parseInt(post.readingTime.minutes)}分钟
                    </small>
                </div>

            </div>
            <MDXRender code={post.body.code} />

        </article>
    )
}

export default BlogLayout
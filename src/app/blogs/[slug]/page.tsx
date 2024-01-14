import { format, parseISO } from "date-fns";
import { allPosts } from 'contentplayer/generated'

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
                <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </article>
    )
}

export default BlogLayout
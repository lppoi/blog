import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentplayer/generated'

export default function Blogs() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    console.log(posts);

    return (
        <div className="prose">
            {posts.map((post) => (
                <PostCard key={post._id}  {...post} />
            ))}
        </div>
    )
}

function PostCard(post: Post) {
    return (
        <article className="mb-8">
            <h2 className="mb-1 text-xl">
                <Link href={post.url} className="hover:text-blue-900 dark:text-blue-400">
                    {post.title}
                </Link>
            </h2>
            <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <div className="text-sm text-ellipsis line-clamp-2" >{post.body.raw}</div>
        </article>
    )
}
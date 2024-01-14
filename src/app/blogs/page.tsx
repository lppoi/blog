import Link from 'next/link'
import { compareDesc, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentplayer/generated'
import { format } from '@/utils/format';
import styles from "./index.module.css";
export default function Blogs() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    return (
        <div>
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
                <Link href={post.url}>
                    <span className={styles.blog__title}>{post.title}</span>
                </Link>
            </h2>
            <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <div className="text-sm capitalize text-slate-500 text-ellipsis line-clamp-2 " >{post.description}</div>
        </article>
    )
}
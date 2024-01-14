import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings, {
    type Options as AutolinkOptions,
} from 'rehype-autolink-headings';
import rehypeHighlight from "rehype-pretty-code"
import rehypeSlug from 'rehype-slug';
import readingTime from "reading-time";

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        tags: {
            type: 'list',
            of: { type: 'string' }
        },
        description: { type: 'string', required: true }
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/blogs/${post._raw.flattenedPath}` },
        readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) }
    },
}))

export default makeSource({
    contentDirPath: './src/content',
    documentTypes: [Post],
    mdx: {
        // remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, {
                behavior: 'append'
            } satisfies Partial<AutolinkOptions>],
            [
                rehypeHighlight as any,
                {
                    theme: "github-dark",
                },
            ]
        ]
    }
})
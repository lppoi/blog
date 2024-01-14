import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from "reading-time";

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        description: { type: 'string', required: true }
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/blogs/${post._raw.flattenedPath}` },
        readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) }
    },
}))

export default makeSource({ contentDirPath: './src/content', documentTypes: [Post] })
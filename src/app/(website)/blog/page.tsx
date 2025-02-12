import { getPayload } from 'payload'
import config from '@payload-config'

import Blog from './Blog'

export default async function BlogPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const postId = searchParams.postId as string
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'posts',
        sort: postId ? undefined : '-createdAt',
        where: {
            ...(postId ? {
                id: {
                    equals: postId
                }
            } : {}),
            published: {
                equals: true
            }
        },
        limit: postId ? 1 : 10
    })

    // Type assertion to match Blog component's expected type
    const posts = docs.map(post => ({
        title: post.title as string,
        content: post.content,
        author: post.author,
        heroImage: post.heroImage,
        categories: post.categories,
        datePublished: post.datePublished,
    }))

    return (
        <div>
            <Blog data={{ docs: posts }}/>
        </div>
    )
}
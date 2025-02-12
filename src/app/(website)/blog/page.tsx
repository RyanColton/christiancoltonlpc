import { getPayload } from 'payload'
import config from '@payload-config'
import Blog from './Blog'

export type SearchParams = Promise<{
    postId?: string;
  }>;

type Props = {
    searchParams?: SearchParams
  };

export default async function BlogPage({ searchParams }: Props) {
    const postId = (await searchParams)?.postId
    const payload = await getPayload({ config })
    let posts: any[] = []
    if (postId) {
        // First get the current post's createdAt to use as reference
        const currentPost = await payload.findByID({
            collection: 'posts',
            id: postId,
        })

        // Get previous, current, and next posts
        const { docs } = await payload.find({
            collection: 'posts',
            where: {
                published: { equals: true },
                or: [
                    { createdAt: { less_than: currentPost.createdAt } },  // previous post
                    { createdAt: { equals: currentPost.createdAt } },     // current post
                    { createdAt: { greater_than: currentPost.createdAt } } // next post
                ]
            },
            sort: 'createdAt',
            limit: 3
        })
        posts = docs
    } else {
        // Original logic for listing posts
        const { docs } = await payload.find({
            collection: 'posts',
            sort: 'createdAt',
            where: {
                published: { equals: true }
            },
            limit: 2
        })
        posts = docs
    }

    // Type assertion to match Blog component's expected type
    const filteredPosts = posts.map(post => ({
        title: post.title as string,
        content: post.content,
        author: post.author,
        heroImage: post.heroImage,
        categories: post.categories,
        datePublished: post.datePublished,
        id: post.id,
        createdAt: post.createdAt,
    }))

    return <Blog searchParams={searchParams} data={{ docs: filteredPosts }}/>
}
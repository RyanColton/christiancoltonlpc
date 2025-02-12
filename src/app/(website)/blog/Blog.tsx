import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'
import { SearchParams, Post } from './page'
const blobBaseUrl = process.env.BLOB_BASE_URL

export default async function Blog({ searchParams, data }: { searchParams?: SearchParams, data: { docs: Post[] } }) {
  const postId = (await searchParams)?.postId
  let currentPost: Post | null = null
  let prevPost: Post | null = null
  let nextPost: Post | null = null

  if (postId) {
    currentPost = data.docs.find(post => post.id === postId) || null as Post | null
    if (!currentPost) {
      return <div>Post not found</div>
    }
    // this stupidity is to make typescript happy
    const post = currentPost as Post
    prevPost = data.docs.find(p => p.createdAt < post.createdAt) || null
    nextPost = data.docs.find(p => p.createdAt > post.createdAt) || null
  } else {
    currentPost = data.docs[1] || null
    prevPost = data.docs[0] || null
  }

  console.log(data.docs)

  return (
    <div className="w-full flex justify-center items-center bg-themeLightBlue" >
      <div className="w-full max-w-5xl p-10 flex flex-col gap-4 bg-white">
        <div key={currentPost.title}>
          <div className="flex justify-between items-center">
            {prevPost ? <Link href={`/blog?postId=${prevPost.id}`} className='text-themeDarkBlue italic hover:underline'>previous post</Link> : <div />}
            {nextPost ? <Link href={`/blog?postId=${nextPost.id}`} className='text-themeDarkBlue italic hover:underline'>next post</Link> : <div />}
          </div>
          <h1 className="text-5xl font-bold mb-8">{currentPost.title}</h1>
          {currentPost.heroImage && <img src={`${blobBaseUrl}${currentPost.heroImage.filename}`} alt={currentPost.title} className="w-52 h-auto" />}
          <RichText data={currentPost.content} />
        </div>
      </div>
    </div>
  );
}
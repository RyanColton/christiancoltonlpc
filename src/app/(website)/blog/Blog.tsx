import { RichText } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
const blobBaseUrl = process.env.BLOB_BASE_URL

export default function Blog({ data }: { data: { docs: { title: string, content: SerializedEditorState, author: { name: string, email: string }, heroImage: { filename: string }, categories: { name: string }[], datePublished: string }[] } }) {
  console.log(data.docs[0])
  return (
    <div className="w-full flex justify-center items-center bg-themeLightBlue" >
      <div className="w-full max-w-5xl p-10 flex flex-col gap-4 bg-white">
        {data.docs.map((post) => (
          <div key={post.title}>
            <h1 className="text-5xl font-bold mb-8">{post.title}</h1>
            {post.heroImage && <img src={`${blobBaseUrl}${post.heroImage.filename}`} alt={post.title} className="w-52 h-auto" />}
            <RichText data={post.content} />
          </div>
        ))}
      </div>
    </div>
  );
}
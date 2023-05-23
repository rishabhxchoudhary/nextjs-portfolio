import Link from 'next/link'
import React from 'react'

function Posts({ post }) { // slug, title, date, category, about, tags
    console.log(post.frontmatter);
    return (
        // <Link href={`/blog/${post.slug}`}>
        <div className='mb-10'>
            <h1 className='post-title cursor-pointer text-3xl font-bold'><Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link></h1>
            <div className='flex w-full justify-between px-1 my-2'>
                <h2 className='date'>{post.frontmatter.date}</h2> <h2 className='category'>{post.frontmatter.category}</h2>
            </div>
            <hr></hr>
            <p className='pb-3 text-left'>{String(post.frontmatter.about).slice(0, 500)} <Link href={`/blog/${post.slug}`}><u className='read-more cursor-pointer'> Read More</u></Link></p>
            <div className='mt-2 flex flex-wrap'>
                {post.frontmatter.tags?.map((tag, index) => (
                    <span key={index} className='tag p-2 m-1 border  rounded-lg'>{tag}</span>
                ))}
            </div>
        </div>
        // </Link>

    )
}

export default Posts
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Posts({ post, setCat, cat }) { // slug, title, date, category, about, tags
    // const [views, setViews] = useState(0);
    // useEffect(() => {
    //     axios.post('http://localhost:3000/api/count', {
    //         slug: post.slug
    //     }).then(res => {
    //         setViews(res.data);
    //     })
    // }, [views])

    return (
        // <Link href={`/blog/${post.slug}`}>
        <div className={cat == 'Latest' ? 'mb-10' : cat == post.frontmatter.category ? 'mb-10' : 'hidden'} >
            <h1 className='post-title cursor-pointer text-3xl font-bold'><Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link></h1>
            <div className='flex w-full text-sm justify-between px-1 my-2'>
                <h2 className='date'>{post.frontmatter.date}</h2> <h2 className='category' onClick={() => { setCat(post.frontmatter.category) }}>{post.frontmatter.category}</h2>
            </div>
            <hr></hr>
            <p className='pb-3 text-left'>{String(post.frontmatter.about).slice(0, 500)} <Link href={`/blog/${post.slug}`}><u className='read-more cursor-pointer'> Read More</u></Link></p>
            {/* <div className="text-sm">Views : {views == 0 ? "Loading" : views}</div> */}
            <div className='mt-2 flex flex-wrap'>
                {post.frontmatter.tags?.map((tag, index) => (
                    <span key={index} className='tag p-2 m-1 border text-sm md:text-base rounded-lg'>{tag}</span>
                ))}
            </div>

        </div>
        // </Link>

    )
}

export default Posts
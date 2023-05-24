import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function PostPage({
    frontmatter: { title, date, category, about, tags },
    slug,
    content,
}) {
    const [views, setViews] = useState(0);
    useEffect(() => {
        axios.post('https://www.rishabhxchoudhary.study/api/register', {
            slug: slug
        }).then(res => {
            setViews(res.data);
        })
    }, [])
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="max-w-4xl mx-auto mt-10 px-10 post">
                <h1 className="text-4xl md:text-7xl font-bold blog-title">{title}</h1>
                <p className=" mb-4 text-[#A5A5A5;] my-5">written on {date}</p>
                <p className=" mb-4 text-[#A5A5A5;] ">Views : {views == 0 ? "Loading..." : views}</p>
                <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('blogs'))
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {

    const markdownWithMeta = fs.readFileSync(
        path.join('blogs', slug + '.md'),
        'utf-8'
    )
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}
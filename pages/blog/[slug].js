import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Script from 'next/script';

const options = {
    prefix: "my-prefix-",
};

marked.use(mangle());
marked.use(gfmHeadingId(options));

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
        window.MathJax = {
            tex: {
                inlineMath: [['$', '$']]
            }
        };

    }, [])
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="I am Rishabh. This is my personal Blog page" />
                <meta name="keywords" content={JSON.stringify(tags) + category} />
                <meta name="author" content='Rishabh' />
                <meta name="robots" content="index, follow"></meta>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={about} />
            </Head>
            <div className="max-w-4xl mx-auto mt-10 px-10 post">
                <h1 className="text-4xl md:text-7xl font-bold blog-title">{title}</h1>
                <p className=" mb-4 text-[#A5A5A5;] my-5">written on {date}</p>
                <p className=" mb-4 text-[#A5A5A5;] ">Views : {views == 0 ? "Loading..." : views}</p>
                <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
                {/* <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
                <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script> */}
                <Script
                    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
                {/* <script>
                    window.MathJax = {
                        tex: {
                        inlineMath: [['$', '$']]
                                }
                            };
                </script> */}
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
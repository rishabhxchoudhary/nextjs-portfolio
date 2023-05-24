
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Posts from '../../components/Posts'
import Head from 'next/head'
import Link from 'next/link'
import sortByDate from '../../utils/index'
import { useState } from 'react'

function Index({ categories }) {
    const [cat, setCat] = useState(`Latest`);
    // console.log(categories);
    return (
        <>
            <Head>
                <title>Rk&apos;s WeBlog</title>
            </Head>
            <div className='w-full flex flex-col items-center'>
                <div className='p-4 md:p-10 lg:p-14 flex flex-col items-center md:items-start max-w-7xl'>
                    <h1 className='text-4xl font-bold mb-10'>RK&apos;s WeBlog</h1>
                    <div className="section-navigator flex flex-wrap gap-2 md:gap-5 mb-10">
                        {categories && Object.keys(categories).map((category, index) => (
                            <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => { setCat(category) }}>
                                {cat == category ? <div className="rectangle active"></div> : <div className="rectangle"></div>}
                                <h1 className='text-sm font-bold'>{category}</h1>
                            </div>
                        ))}
                    </div>
                    {cat != 'Contact Me' ?
                        (<>
                            {categories[cat].map((item, index) => (
                                < Posts key={index} post={item} setCat={setCat} />
                            ))}
                        </>) :
                        (
                            <>
                                <div className="py-8">
                                    <h2 className="text-4xl mb-4 blog-title">Contact Me</h2>
                                    <p>
                                        Thank you for visiting my blog! If you have any questions, suggestions, or just want to say hello,
                                        feel free to reach out to me using any of the following methods:
                                    </p>

                                    <div className="mt-4">
                                        <p className="text-lg font-semibold post-title">Portfolio:</p>
                                        <Link href={'https://www.rishabhxchoudhary.study/'}><p className="">www.rishabhxchoudhary.study/</p></Link>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-lg font-semibold post-title">Mail:</p>
                                        <Link href={"mailto:yourname@gmail.com"}>rishabh26072003@gmail.com</Link>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-lg font-semibold post-title">Phone Number:</p>
                                        <Link href={"tel:+919769857233"}>+91 9769857233</Link>
                                    </div>
                                    <div className="mt-6">
                                        <p className="text-lg font-semibold post-title">Links:</p>
                                        <ul className="">
                                            <li><Link href="https://www.linkedin.com/in/rishabhxchoudhary/"><ul>Linked In</ul></Link></li>
                                            <li><Link href="https://www.instagram.com/rishabhxchoudhary/"><ul>Instagram</ul></Link></li>
                                            <li><Link href="https://github.com/rishabhxchoudhary"><ul>Github</ul></Link></li>
                                            <li><Link href="https://www.codechef.com/users/rk26072003"><ul>Codechef</ul></Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Index

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('blogs'))
    const posts = files.map((filename) => {
        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync(
            path.join('blogs', filename),
            'utf-8'
        )
        const { data: frontmatter } = matter(markdownWithMeta)
        return {
            slug,
            frontmatter,
        }
    })

    let categories = {
        'Latest': posts
    }

    posts.map(
        (post) => {
            if (post.frontmatter.category in categories) {
                categories[post.frontmatter.category].push(post)
            }
            else {
                categories[post.frontmatter.category] = [post]
            }
        }
    )

    for (const key in categories) {
        categories[key] = categories[key].sort(sortByDate);
    }

    categories['Contact Me'] = [
        {
            slug: 'contact-me',
            frontmatter: {
                category: 'Contact Me'
            }
        }

    ]


    return {
        props: {
            categories,
        },
    }
}
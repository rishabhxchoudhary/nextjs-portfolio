import Link  from 'next/link'
import Head from 'next/head'
import ContactMe from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='scroll-smooth home bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/10 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Rishabh Kumar</title>
        <meta name="description" content="I am Rishabh. I am a Web Developer and Competitive Programmer. I also post blogs."/>
        <meta name="keywords" content='HTML CSS JS JAVASCRIPT NEXTjs REACTjs, Codechef, Codeforces' />
        <meta name="author" content='Rishabh'/>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:title" content="Rishabh's Portfolio & Blog" />
        <meta property="og:description" content="This is my Portfolio and Weblog" />
        <meta property="og:image" content="https://www.rishabhxchoudhary.study/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRK.667e98c0.jpg&w=3840&q=75" />
      </Head>
      <Header/>

      <section id="hero" className='snap-start'>
        <Hero/>
      </section>
{/* 
      <section id="skills" className='snap-center'>
        <Skills/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects/>
      </section> */}

      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
      {/* <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
          </div>
        </footer>
      </Link> */}
    </div>
  )
}

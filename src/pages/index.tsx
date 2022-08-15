import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import type { PostType, ProjectType } from '../../types/post'
import PostCard from '../components/PostCard'
import ProjectCard from '../components/ProjectCard'
import { getFeaturedPosts, getProjectPosts } from '../utils/posts'



const Home: NextPage<{posts: PostType[], projects: ProjectType[]}> = ({posts, projects}) => {
  return (
    <>
    <Head>
      <title>Roshan Swain</title>
      <meta name="description" content="Roshan Swain's personal website" />
    </Head>

      <section
        className='flex items-center justify-center h-[85vh]'
        >
        <div className='flex flex-row items-center'>
          <div className="m-4 sm:ml-4">
            <h1 className="text-3xl font-mono font-bold sm:text-6xl">
              Roshan Swain&#128075;
            </h1>
            <p className="pt-2 font-mono text-base">
              Software Engineer
            </p>
          </div>
        </div>
      </section>

      <section className='container p-4 mx-auto my-10 sm:p-0 sm:max-w-4xl w-fit' >
        <div className='flex flex-col justify-center gap-4 mx-auto sm:flex-row w-fit'>
        <div className='flex flex-col justify-between'>
            <Image className="rounded-lg" height={768} width={768} src="/assets/myphoto.png"  alt='my photo'/>
            <p className='mt-2 text-sm font-mono text-gray-400'>
              Selfie from my first year of engineering &#128521;
            </p>
          </div>
          <div className='sm:ml-4'>
              <h2 className="text-3xl font-mono font-bold transition-all duration-300 rounded cursor-pointer w-fit hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline">
                  About Me
              </h2>
            <div className="mt-4 font-mono">
              <p>Hi ! I&apos;m Roshan Swain, a software engineer currently working at <a className='text-blue-600 hover:text-blue-800 visited:text-purple-600' href='https://www.mathworks.com/'>MathWorks.</a>
              </p>
              <p className='mt-4'>
                I love working on different technologies. I have a strong interest in Web Applications and Machine Learning.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className='container p-4 mx-auto mt-20 sm:p-0 sm:max-w-4xl w-fit' >
          <Link  href="/projects">
            <a className="text-3xl font-bold font-mono transition-all duration-300 rounded cursor-pointer w-fit hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline">
              Projects
            </a>
          </Link>
          <div className="mt-4 font-mono w-96 sm:w-auto">
            <p>
              Here are some of the projects I have worked on.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-4 mx-auto mt-6 md:grid-cols-2 w-fit'>
            {projects.map((project) => {
              return <ProjectCard project={project} key={project.slug} />
            })}
          </div>
      </section>

      <section className='container p-4 mx-auto mt-20 sm:p-0 sm:max-w-4xl w-fit' >
          <Link href="/blog">
            <a className="text-3xl font-bold transition-all duration-300 rounded cursor-pointer w-fit hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline">
              Articles
            </a>
          </Link>
          <div className="mt-4 w-96 sm:w-auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <div className='flex items-center justify-center'>
            </div>
            <div className='mt-6'>
              {posts.map((post) => {
                return (
                  <PostCard key={post.slug} post={post} />
                )
              })}
            </div>
          </div>
      </section>
    </>
  )
}

export async function getStaticProps() {

  const posts = getFeaturedPosts(['slug', 'title', 'tags', 'date', 'summary'])
  const projects =  getProjectPosts(['slug', 'title', 'tags', 'date', 'summary', 'images', 'details'])

  return {
    props: {
      posts,
      projects
    }
  }
}

export default Home

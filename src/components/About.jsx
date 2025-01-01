import { useTheme } from '../context/Context'
const urlImg = 'https://raw.githubusercontent.com/ANCB03/portfolio-ancb/main/src/assets/'

const About = () => {
  const { darkTheme } = useTheme()

  return (
    <div className={`${darkTheme ? 'bg-gray-800 text-white' : 'bg-white'} pt-28 sm:pt-48`} id='about'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-sm font-bold tracking-tight sm:text-lg mb-10'>Hi, I'm Andres Caceres 👋</h2>
          <h2 className='text-6xl font-bold tracking-tight sm:text-7xl mb-10'>Full Stack Web Developer</h2>

          <p className='mt-6 text-lg leading-8 '>
            I design and code beautiful, simple things, and I love what I do.
          </p>
          <p className='mt-6 text-lg leading-8 '>
            I like to build robust and scalable products with great user experiences.
          </p>
          <div className='mx-auto max-w-2xl mt-20'>
            <img src={urlImg + 'hero-devices.svg'} alt='About img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

import { Tooltip } from '@mui/material'
import { useTheme } from '../context/Context'

const urlImg = 'https://raw.githubusercontent.com/ANCB03/portfolio-ancb/main/src/assets/'

const Technologies = () => {
  const { darkTheme } = useTheme()

  const technologies = [
    { url: 'angular.webp', alt: 'Angular' },
    { url: 'primeng.webp', alt: 'PrimeNG' },
    { url: `${darkTheme ? 'react-dark.webp' : 'react.webp'}`, alt: 'React.js' },
    { url: 'redux.svg', alt: 'Redux' },
    { url: 'js.webp', alt: 'Javascript' },
    { url: 'tailwind.webp', alt: 'Material UI' },
    { url: 'mui.webp', alt: 'Tailwind' },
    { url: `${darkTheme ? 'java-dark.webp' : 'java.webp'}`, alt: 'Java' },
    { url: 'spring-boot.webp', alt: 'Springboot' },
    { url: 'node.webp', alt: 'Node JS' },
    { url: 'html.webp', alt: 'HTML' },
    { url: 'css.svg', alt: 'CSS' },
    { url: `${darkTheme ? 'github-dark.webp' : 'github.webp'}`, alt: 'Github' },
    { url: 'bootstrap.webp', alt: 'Bootstrap' },
    { url: 'flask.svg', alt: 'Flask' }
  ]

  return (
    <div
      className={`${
        darkTheme ? 'bg-gray-800 text-white' : 'text-gray-900'
      } py-20 sm:py-28`}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-3xl font-bold tracking-tight sm:text-4xl'>
          Technologies
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {technologies.map((technology) => {
            return (
              <Tooltip key={technology.alt} title={technology.alt} arrow>
                <img
                  loading='lazy'
                  key={technology.alt}
                  className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                  src={urlImg + technology.url}
                  alt={technology.alt}
                />
              </Tooltip>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Technologies

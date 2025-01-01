import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { Container, Stack } from '@mui/material'

const urlImg = 'https://raw.githubusercontent.com/ANCB03/portfolio-ancb/main/src/assets/'

const SocialButtons = () => {
  const socials = [
    {
      id: 'Email',
      logo: <Email />,
      url: 'mailto:ancabe1403@gmail.com'
    },
    {
      id: 'LinkedIn',
      logo: <LinkedIn />,
      url: 'https://www.linkedin.com/in/andres-caceres-becerra/'
    },
    {
      id: 'GitHub',
      logo: <GitHub />,
      url: 'https://github.com/ANCB03'
    }
  ]

  return (
    <div className='flex justify-center items-center gap-8'>
      {socials.map((item) => {
        return (
          <button
            aria-label={item.id}
            className='rounded-full  hover:bg-white hover:text-violet-700 p-2 border'
            key={item.id}
            onClick={() => window.open(item.url, '_blank')}
          >
            {item.logo}
          </button>
        )
      })}
    </div>
  )
}

const Footer = () => {
  return (
    <Container
      maxWidth=''
      sx={{ backgroundColor: '#6E07F3', color: 'white', pb: 5 }}
    >
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={4}
        className='text-center'
      >
        <img
          loading='lazy'
          className='h-28 w-auto mt-10'
          src={urlImg + 'logo.png'}
          alt='Footer img'
        />

        <h1 className='my-10 text-xl'>
        Building, innovating, and conquering challenges—one code at a time.
        </h1>

        <SocialButtons />

        <p className='my-10'>
          &copy; {new Date().getFullYear()} Andres Caceres. All rights
          reserved.
        </p>
      </Stack>
    </Container>
  )
}

export default Footer

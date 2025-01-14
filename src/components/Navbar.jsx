import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { ContactPageTwoTone, ContactsTwoTone, DarkMode, InfoTwoTone, StarsRounded, WbSunnyTwoTone } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useTheme } from '../context/Context'

const urlCv = 'https://drive.google.com/file/d/1l_OGZOMaz3Ey8FphmlPndFg_3VnuLZyA/view?usp=sharing'

const urlImg = 'https://raw.githubusercontent.com/ANCB03/portfolio-ancb/main/src/assets/'

const Navbar = () => {
  const { darkTheme, toggleTheme } = useTheme()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = useNavigate()

  const handleScroll = (event) => {
    event.preventDefault()
    setMobileMenuOpen(false)
    navigate('/')

    const targetId = event.target.getAttribute('href').slice(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const openMenu = (rta) => {
    setMobileMenuOpen(rta)
    const arrowUp = document.getElementById('arrowUp')

    rta ? arrowUp.style.display = 'none' : arrowUp.style.display = 'block'
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 py-3 backdrop-filter backdrop-blur-md  ${darkTheme ? 'bg-gray-800 text-white bg-opacity-90' : 'bg-white text-gray-900 bg-opacity-70'} `}>
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <div className='hover:cursor-pointer' onClick={() => navigate('/')}>
            <img className='h-20 w-auto' src={urlImg + (darkTheme ? 'logo.png' : 'logo.png')} alt='Navbar img' />
          </div>
        </div>
        <div className='flex lg:hidden'>
          <button
            aria-label='Menu'
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${darkTheme ? 'text-white' : 'text-gray-700'}`}
            onClick={() => openMenu(true)}
          >
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12 '>
          <a href='#about' className='swing text-lg font-semibold leading-6 ' onClick={handleScroll}>
            About <span aria-hidden='true'>&rarr;</span>
          </a>
          <a href='#projects' className='swing text-lg font-semibold leading-6 ' onClick={handleScroll}>
            Projects
          </a>
          <a href='#contact' className='swing text-lg font-semibold leading-6 ' onClick={handleScroll}>
            Contact
          </a>

        </div>
        <div className='hidden lg:flex justify-end lg:gap-x-12 ml-10'>
          <IconButton aria-label='Theme' onClick={toggleTheme} sx={{ color: `${darkTheme ? 'white' : ''}` }}>
            {darkTheme ? <DarkMode sx={{ fontSize: '2rem' }} /> : <WbSunnyTwoTone sx={{ fontSize: '2rem' }} />}
          </IconButton>

          <button
            aria-label='Resume'
            className={`pulse text-lg font-semibold rounded-full ${darkTheme ? 'text-white bg-violet-900 hover:bg-violet-700 hover:text-white py-2 px-4 border-2 border-violet-900' : 'text-violet-700 hover:bg-violet-700 hover:text-white py-2 px-4 border-2 border-violet-700'} `}
            onClick={() => window.open(urlCv, '_blank')}
          >
            <ContactPageTwoTone /> Resume
          </button>
        </div>
      </nav>
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={() => openMenu(false)}>

        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto ${darkTheme ? 'bg-gray-700 sm:ring-gray-900/10' : 'bg-white sm:ring-gray-900/10'} px-6 py-6 sm:max-w-sm sm:ring-1 `}>
          <div className='flex items-center justify-between'>
            <a className='-m-1.5 p-1.5' onClick={() => navigate('/')}>
              <img
                className='h-8 w-auto'
                src={urlImg + (darkTheme ? 'logo.png' : 'logo.png')}
                alt='logo'
              />
            </a>
            <button
              aria-label='Close menu'
              className={`-m-2.5 rounded-md p-2.5 ${darkTheme ? 'text-white' : 'text-gray-700'}`}
              onClick={() => openMenu(false)}
            >
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='text-center -my-6 divide-y divide-gray-500/10'>
              <div className='py-6'>

                <a href='#about' onClick={handleScroll} className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${darkTheme ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-50'}`}>
                  About <InfoTwoTone />
                </a>
                <a href='#projects' onClick={handleScroll} className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${darkTheme ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-50'}`}>
                  Projects <StarsRounded />
                </a>
                <a href='#contact' onClick={handleScroll} className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${darkTheme ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-50'}`}>
                  Contact <ContactsTwoTone />
                </a>

                <a onClick={() => window.open(urlCv, '_blank')} className={`cursor-pointer -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${darkTheme ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-50'}`}>
                  Resume <ContactPageTwoTone />
                </a>

              </div>
              <div className='py-6'>

                <IconButton aria-label='Light Mode' style={{ color: `${darkTheme ? 'white' : ''}` }}>
                  <WbSunnyTwoTone sx={{ color: `${darkTheme ? 'white' : ''}`, fontSize: '2rem' }} />
                </IconButton>

                <label htmlFor='themeSwitch' className='switch'>
                  <input type='checkbox' id='themeSwitch' checked={darkTheme} onChange={toggleTheme} />
                  <span className='slider' />
                </label>

                <IconButton aria-label='Dark Mode' style={{ color: `${darkTheme ? 'white' : ''}` }}>
                  <DarkMode sx={{ fontSize: '2rem' }} />
                </IconButton>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navbar

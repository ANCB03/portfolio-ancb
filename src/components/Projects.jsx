import { Container, Grid } from '@mui/material'
import Project from './Project'
import { useTheme } from '../context/Context'

const Projects = () => {
  const { darkTheme } = useTheme()

  return (
    <div className={`${darkTheme ? 'bg-gray-800' : ''} pt-28 pb-10 sm:pb-20`} id='projects'>
      <div className='mx-auto max-w-8xl px-4 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className={`text-3xl font-bold tracking-tight ${darkTheme ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>Some projects that I have supported and developed</h2>
        </div>
        <Container>
          <Grid container spacing={3} sx={{ py: 5 }}>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Bodyhealth Web'
                github={['https://github.com/ANCB03/bodyhealth-backend/tree/development', 'https://github.com/ANCB03/bodyhealth-frontend/tree/development']}
                live='https://bodyhealth-web.netlify.app/'
                img='bodyhealth.webp'
                tech={
                    [
                      { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` },
                      { nombre: 'Springboot', icono: 'spring-boot.webp' },
                      { nombre: 'Material UI', icono: 'mui.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Web application for the management of bodyhealth gym processes in the city of Cúcuta, inventory management, sales, customers, employees and more. Created with React.js and Springboot.'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='ChatBot UFPS'
                github={['https://github.com/ANCB03/chatbot-ufps']}
                live='https://ancb03.github.io/chatbot-ufps/'
                img='chatbot-ufps.webp'
                tech={
                    [
                      { nombre: 'HTML', icono: 'html.webp' },
                      { nombre: 'CSS', icono: 'css.svg' },
                      { nombre: 'JS', icono: 'js.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='A chatbot connected to the OPEN AI API to solve doubts about the student statute of the Francisco de Paula Santander University. Created with HTML, CSS and JS.'

              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>

              <Project
                title='Restaurante App'
                img='restaurante-1.png'
                tech={
                  [
                    { nombre: 'Angular', icono: 'angular.webp' },
                    { nombre: 'SpringBoot', icono: 'spring-boot.webp' },
                    { nombre: 'MySQL', icono: 'mysql.webp' }
                  ]
                }
                darkTheme={darkTheme}
                descripcion='Web application for the management of processes and sales of the Caldero Chorreante restaurant, which allows waiters and administrators to perform different activities in a simple and fast way.'
                imagenes={['restaurante-5.png', 'restaurante-2.png', 'restaurante-3.png', 'restaurante-4.png']}
              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='DBZ MAIN PAGE'
                github={['https://github.com/ANCB03/angular-bases']}
                live='https://dbz-main-page.netlify.app/'
                img='dbz-main-page.webp'
                tech={
                    [
                      { nombre: 'Angular', icono: 'angular.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Heroes website where you can add a character with name and power. This page is a brief overview of the basics in Angular.'
                imagenes={['dbz-main-page1.png']}
              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Mapa Colombia'
                github={['https://github.com/ANCB03/mapa-colombia']}
                live='https://ancb03.github.io/mapa-colombia/'
                img='mapa-colombia.webp'
                tech={
                    [
                      { nombre: 'HTML', icono: 'html.webp' },
                      { nombre: 'CSS', icono: 'css.svg' },
                      { nombre: 'JS', icono: 'js.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Web page of the interactive map of Colombia where you can select three different types of information and load a respective map where selecting a department shows the information that corresponds to it. Created with HTML, CSS and JS.'
                imagenes={['mapa-colombia1.webp', 'mapa-colombia2.webp', 'mapa-colombia3.webp']}
              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Gifs App'
                github={['https://github.com/ANCB03/gifs-app-angular']}
                live='https://ancb03.github.io/gifs-app-angular/'
                img='gifs-app2.webp'
                tech={
                    [
                      { nombre: 'Angular', icono: 'angular.webp' },
                      { nombre: 'TypeScript', icono: 'typescript.svg' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='GIFs website that connects to the GIPHY API and allows us to search for GIFs and shows 10 results. It also stores in local storage the searches made to be able to search for them again in the future. Created with Angular 16.2.6.'
                imagenes={['gifs-app.png', 'gifs-app1.webp']}
              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Tasks App'
                github={['https://github.com/ANCB03/tasks-react-redux']}
                live='https://task-react-redux-ancb.netlify.app/'
                img='tasks-app.png'
                tech={
                    [
                      { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` },
                      { nombre: 'JavaScript', icono: 'js.webp' },
                      { nombre: 'Redux', icono: 'redux.svg' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Task web page using Redux for state management in the application. Created with React and Redux.'
                imagenes={['tasks-app1.png']}
              />

            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Projects

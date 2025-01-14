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
                img='dbz-main-page1.png'
                tech={
                    [
                      { nombre: 'Angular', icono: 'angular.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Heroes website where you can add a character with name and power. This page is a brief overview of the basics in Angular.'
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
                imagenes={['mapa-colombia1.webp', 'mapa-colombia2.webp']}
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
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Rick and Morty'
                github={['https://github.com/ANCB03/rick-and-morty-react']}
                live='https://rick-and-morty-ancb.netlify.app/'
                img='rick-and-morty.png'
                tech={
                    [
                      { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` },
                      { nombre: 'TypeScript', icono: 'typescript.svg' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Web page that connects to an API of the characters from the animated series Rick and Morty and shows their name and planet they belong to.'
                imagenes={['rick-and-morty1.png']}
              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='SoftDental'
                github={['https://github.com/ANCB03/softdental']}
                live='https://rick-and-morty-ancb.netlify.app/'
                img='softdental.png'
                tech={
                    [
                      { nombre: 'JAVA', icono: `${darkTheme ? 'java-dark.webp' : 'java.webp'}` },
                      { nombre: 'SpringBoot', icono: 'spring-boot.webp' },
                      { nombre: 'MySQL', icono: 'mysql.svg' },
                    ]
                }
                darkTheme={darkTheme}
                descripcion='SoftDental is an API for a dental clinic where it helped to keep track of appointments, clinical history and control of the clinic´s equipment. Created with JAVA and the SpringBoot framework.'

              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='PQRS UFPS'
                github={['https://github.com/ANCB03/pqrs-backend']}
                live='https://ancb03.github.io/pqrs-frontend/index.html'
                img='pqrs.png'
                tech={
                    [
                      { nombre: 'JAVA', icono: `${darkTheme ? 'java-dark.webp' : 'java.webp'}` },
                      { nombre: 'HTML', icono: 'html.webp' },
                      { nombre: 'CSS', icono: 'css.svg' },
                      { nombre: 'JS', icono: 'js.webp' },
                      { nombre: 'SpringBoot', icono: 'spring-boot.webp' },
                      { nombre: 'MySQL', icono: 'mysql.svg' },
                    ]
                }
                darkTheme={darkTheme}
                descripcion='PQRS website for the Francisco de Paula Santander University that helped to resolve concerns. Users could register and then make a PQRS and this would be notified to the administrator in charge of the page to resolve the concerns. Created with JAVA using the SpringBoot framework, MySQL, HTML, CSS and JS.'
                imagenes={['pqrs-bd.png','pqrs2.png','pqrs3.png','pqrs4.png','pqrs5.png','pqrs6.png','pqrs7.png','pqrs8.png']}
              />

            </Grid>
            
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Projects

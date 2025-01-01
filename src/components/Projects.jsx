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
                      { nombre: 'JS', icono: 'js.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='A chatbot connected to the open ai api to solve doubts about the student statute of the Francisco de Paula Santander University. Created with html, css and js.'

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
                title='Droguería App'
                github={['https://github.com/ANCB03/medicamentos']}
                live='https://medicamentos-micro.netlify.app/'
                img='drogueria.png'
                tech={
                    [
                      { nombre: 'Angular', icono: 'angular.webp' },
                      { nombre: 'PrimeNG', icono: 'primeng.webp' },
                      { nombre: 'MongoDB', icono: 'mongo.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Web application for the inventory management of a drugstore, which allows employees to perform different activities in a simple and fast way.'
              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Expense-Income Manager'
                github={['https://github.com/ANCB03/expense-manager']}
                live='https://expense-income-manager.netlify.app/'
                img='expense-manager.webp'
                tech={
                    [
                      { nombre: 'React JS', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` },
                      { nombre: 'Node JS', icono: 'node.webp' },
                      { nombre: 'Tailwind', icono: 'tailwind.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Website that allows users to keep track of their expenses and income, which allows to add, edit and delete them. Created with React.js and Node.js.'
              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Coinmarket App'
                github={['https://github.com/ANCB03/coinmarket-app-angular']}
                live='https://coinmarket-app.netlify.app/'
                img='coinmarket-app.webp'
                tech={
                    [
                      { nombre: 'Angular', icono: 'angular.webp' },
                      { nombre: 'TypeScript', icono: 'typescript.svg' },
                      { nombre: 'Material UI', icono: 'mui.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Website that allows users to see the price of cryptocurrencies in real time, which allows users to see the price of the most important cryptocurrencies in the market.'
              />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Project
                title='Tasks App'
                github={['https://github.com/ANCB03/task-app-react']}
                live='https://ANCB03.github.io/task-app-react/'
                img='tasks-app.webp'
                tech={
                    [
                      { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` },
                      { nombre: 'JavaScript', icono: 'js.webp' },
                      { nombre: 'Tailwind', icono: 'tailwind.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Task management website, which allows users to create, edit and delete tasks. Created with React.js.'
              />

            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Projects

import { useTheme } from '../context/Context'

const Skills = () => {
  const { darkTheme } = useTheme()

  return (
    <section className={`${darkTheme ? 'bg-gray-800 text-white' : 'text-gray-900'} relative isolate overflow-hidden px-6 py-4 sm:py-8 lg:px-8`}>
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>

        <h2 className='text-center text-3xl font-bold tracking-tight mb-8 sm:text-4xl '>Skills</h2>

        <div className='sm:text-center text-lg font-semibold sm:text-2xl'>
          <p className='mb-8'>
          I have experience in modern technologies such as React, Angular, Spring Boot, and Flask, I specialize in designing seamless user experiences and robust backend systems, ensuring efficiency and performance in every project.
          </p>
          <p>
          I have led initiatives ranging from containerization with Docker to CI/CD pipeline implementation on AWS, and MongoDB database optimization. I also have a strong track record in creating and documenting APIs using Swagger, ensuring efficient and clear integration.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Skills

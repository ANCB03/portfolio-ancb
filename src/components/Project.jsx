import React, { useState } from 'react';
import { GitHub, InsertLink } from '@mui/icons-material';
import { Tooltip, styled, Modal } from '@mui/material';

const urlImg = 'https://raw.githubusercontent.com/ANCB03/portfolio-ancb/main/src/assets/';

const ImagenEstilo = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.1)',
  },
  borderRadius: '5%',
});

const ImagenExpandida = styled('img')(({ theme }) => ({
  maxWidth: '90vw',
  maxHeight: '90vh',
  margin: 'auto',
  display: 'block',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
}));

const handleShowPage = (arr) => {
  if (arr.length > 1) {
    window.open(arr[0], '_blank');
    window.open(arr[1], '_blank');
  } else {
    window.open(arr[0], '_blank');
  }
};

const Project = ({ title, img, tech, github, live, darkTheme, descripcion, imagenes }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`px-1 pt-14 mx-auto lg:px-8 ${darkTheme ? 'text-white' : ''}`}>
      {/* Imagen principal */}
      <ImagenEstilo
        loading='lazy'
        src={urlImg + img}
        alt={title}
        onClick={() => handleImageClick(urlImg + img)}
      />

      <div className='flex justify-between items-center pt-4'>
        <h2 className='text-2xl font-bold tracking-tight'>{title}</h2>
        <div className='flex'>
          {tech.map((item) => (
            <Tooltip key={item.nombre} title={item.nombre} arrow>
              <img
                src={urlImg + item.icono}
                className='max-h-8 object-contain mx-0.5'
                alt={item.nombre}
              />
            </Tooltip>
          ))}
        </div>
      </div>

      {descripcion && <div className='mt-4 text-justify'>{descripcion}</div>}

      {github && live && (
        <div className='flex items-center gap-8 pt-4'>
          <button
            className={`swing px-6 py-2 border-2 rounded-lg ${darkTheme
                ? 'text-white border-violet-700 hover:bg-white hover:text-violet-800 hover:border-white'
                : 'text-violet-800 border-violet-700 hover:bg-violet-800 hover:border-violet-900 hover:text-white'
              }`}
            onClick={() => handleShowPage(github)}
          >
            <div className='flex items-center gap-2'>
              <GitHub />
              <h2 className='text-lg'>GitHub</h2>
            </div>
          </button>

          <button
            className={`shakeFix px-6 py-2 border-2 rounded-lg ${darkTheme
                ? 'border-white hover:border-white hover:bg-white hover:text-black'
                : 'border-gray-700 hover:bg-gray-800 hover:border-gray-900 hover:text-white'
              }`}
            onClick={() => window.open(live, '_blank')}
          >
            <div className='flex items-center gap-2'>
              <InsertLink />
              <h2 className='text-lg'>Live</h2>
            </div>
          </button>
        </div>
      )}

      {imagenes && (
        <>
          <div className='mt-4 grid xl:grid-cols-2 md:grid-cols-2 justify-between gap-8'>
            {imagenes.map((item, index) => (
              <ImagenEstilo
                key={index}
                loading='lazy'
                src={urlImg + item}
                alt={title}
                onClick={() => handleImageClick(urlImg + item)}
              />
            ))}
          </div>
          <hr className='border border-solid mt-8' />
        </>
      )}

      {/* Modal para imagen expandida */}
      <Modal
        open={!!selectedImage}
        onClose={handleCloseModal}
        aria-labelledby='modal-image'
        aria-describedby='modal-expanded-image'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent', // Quita cualquier fondo que pueda ser visible
          boxShadow: 'none', // Elimina las sombras del modal
          outline: 'none', // Elimina el contorno
        }}
      >
        <div onClick={handleCloseModal} style={{ cursor: 'pointer', textAlign: 'center' }}>
          <ImagenExpandida src={selectedImage} alt='Expanded' />
        </div>
      </Modal>
    </div>
  );
};

export default Project;

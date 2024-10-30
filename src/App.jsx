import React from 'react'
import Todo from './components/Todo'
import github_icon from './assets/github_icon.png' 
import linkedin_icon from './assets/linkedin_icon.png' 

const App = () => {
  return (
    <div className='bg-stone-900 flex flex-col pt-10 min-h-screen'>
      <div className='flex-grow flex items-center justify-center'>
        <Todo/>
      </div>
    

      <div className="mt-10 flex flex-col items-center pb-4">
        <p className="text-gray-500 text-sm">Developed by Aviral Bansal</p>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/Aviral1611" target="_blank" rel="noopener noreferrer">
            <img src={github_icon} alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/aviral-bansal-8427a4289/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_icon} alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App

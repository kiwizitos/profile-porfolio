import Cardzinho from './CardContent'

import { ExiCo, Codebox, Feedback, Todo } from '../assets/img'

function Content() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center'>
      <Cardzinho
        name='Feedback App'
        desc='an application made with react & firebase, input the rating and a description.'
        imgSrc={Feedback}
        siteLink='https://kiwi-feedback.netlify.app'
        gitLink='https://github.com/kiwizitos/feedback-app'
      />
      <Cardzinho
        name='To-do App'
        desc='Created a to-do list to try some state functions for React.'
        imgSrc={Todo}
        siteLink='https://aww-todo.netlify.app/'
        gitLink='https://github.com/kiwizitos/todo-react'
      />
      <Cardzinho
        name='Codebox'
        desc='Simple front-end project to use forms.'
        imgSrc={Codebox}
        siteLink='https://codbox.netlify.app/index.html'
        gitLink='https://github.com/kiwizitos/caixita'
      />
      <Cardzinho
        name='Exi Co'
        desc='Graphic design project.'
        imgSrc={ExiCo}
        siteLink='https://exico.netlify.app/'
        gitLink='https://github.com/kiwizitos/exiCo'
      />
    </div>
  )
}

export default Content

import Cardzinho from './CardContent'

function Content() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center'>
      <Cardzinho
        name='Feedback App'
        desc='an application made with react & firebase, wich gives the user a form to input some rating and a description.'
        siteLink='https://kiwi-feedback.netlify.app'
        gitLink='https://github.com/kiwizitos/feedback-app'
      />
      <Cardzinho
        name='Feedback App'
        desc='an application made with react & firebase, wich gives the user a form to input some rating and a description.'
        siteLink='https://kiwi-feedback.netlify.app'
        gitLink='https://github.com/kiwizitos/feedback-app'
      />
      <Cardzinho
        name='Feedback App'
        desc='an application made with react & firebase, wich gives the user a form to input some rating and a description.'
        siteLink='https://kiwi-feedback.netlify.app'
        gitLink='https://github.com/kiwizitos/feedback-app'
      />
      <Cardzinho
        name='Feedback App'
        desc='an application made with react & firebase, wich gives the user a form to input some rating and a description.'
        siteLink='https://kiwi-feedback.netlify.app'
        gitLink='https://github.com/kiwizitos/feedback-app'
      />
    </div>
  )
}

export default Content

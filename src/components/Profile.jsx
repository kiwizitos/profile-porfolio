import { Button, ButtonGroup, Container } from '@mui/material'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import About from './About'
import Content from './Content'
import ContentButton from './ContentButton'
import ProfileHeader from './Header'
import More from './More'
import SocialMedia from './SocialMedia'

function Profile({ name, username }) {
  return (
    <Container>
      <div className='h-[90%] max-h-screen flex flex-col md:flex-row items-center justify-start shadow-lg bg-slate-200 mr-4 rounded-md p-2'>
        <div className='flex flex-col w-[300px] md:h-[500px] justify-center md:justify-start pr-2 '>
          <ProfileHeader name={name} username={username} />
          <div className='flex md:flex-col gap-2 my-1 justify-center'>
            <Link to='/' index>
              <ContentButton>Home</ContentButton>
            </Link>
            <Link to='/projects'>
              <ContentButton>Projects</ContentButton>
            </Link>
            <Link to='/more'>
              <ContentButton>Abilities</ContentButton>
            </Link>
            <SocialMedia />
          </div>
        </div>
        <div className='w-full h-[500px] p-2 overflow-auto'>
          <Routes>
            <Route path='/' index exact element={<About />} />
            <Route path='/projects' element={<Content />} />
            <Route path='/more' element={<More />} />
          </Routes>
        </div>
      </div>
    </Container>
  )
}

export default Profile

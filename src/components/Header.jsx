import { Avatar } from '@mui/material'
import Image from '../assets/site2.png'

function ProfileHeader({ name, username }) {
  return (
    <div className='flex items-center justify-center gap-3 w-[250px] py-4'>
      <Avatar src={Image} />
      <div>
        <p className='text-2xl'>{name}</p>
        <p className='text-[14px]'>{username}</p>
      </div>
    </div>
  )
}

export default ProfileHeader

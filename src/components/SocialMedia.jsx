import { SocialIcon } from 'react-social-icons'

function SocialMedia() {
  return (
    <div className='flex justify-self-end self-end gap-1'>
      <a
        href='http://github.com/kiwizitos'
        target='_blank'
        rel='noopener noreferrer'>
        <SocialIcon
          network='github'
          bgColor='#191919'
          style={{ width: 30, height: 30 }}
        />
      </a>
      {/* <a
        href='http://instagram.com/mn_kiwi'
        target='_blank'
        rel='noopener noreferrer'>
        <SocialIcon
          network='instagram'
          bgColor='#191919'
          style={{ width: 30, height: 30 }}
        />
      </a> */}
    </div>
  )
}

export default SocialMedia

"use client"
import Link from "next/link"

interface Props {
  id?: string | undefined,
  profile: string | undefined
}

const ProfileIcon = ({id, profile} : Props) => {
  return (
    <Link
      href={`/profile/${id}`}
    >
        <div 
        className=' h-11 w-11 bg-primary rounded-full text-left'>
          <img 
            className='object-cover h-full w-full rounded-full border-2 border-primary-line' 
            src={profile} 
            alt="" 
          />
      </div>
    </Link>

  )
}

export default ProfileIcon

'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import WhatsappIcon from '../public/whatsapp-social-media-svgrepo-com.svg'
import { useState } from 'react'
import Link from 'next/link'
export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('')

  const router = useRouter()

  const isValidNumber = (number: String) => {
    if(number.length == 10 || number.length == 9)
    {
      console.log("good")
      return true

    }
  return false
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex'>
        <Input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder='05X-XXXXXXX'
        >

        </Input>
        
        <Link
                href={isValidNumber(phoneNumber) ? `https://wa.me/+972${phoneNumber}`: {}}
                className='ml-3'
        >
          
        <Button
        className="bg-white"
        >
          <Image
          src={WhatsappIcon}
          alt="sd" 
          height={30}
          width={30}
          />

        </Button>
        </Link>

      </div>
    </main>
  )
}

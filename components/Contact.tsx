import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import Link from 'next/link'

type Inputs = {
  name: String,
  email: String,
  subject: String,
  message: String,
};

type Props = {}

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rishabh.choudhary.ug21@nsut.ac.in?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='mt-24 uppercase tracking-[20px] text-gray-500 text-2xl' >
            Contact Me
        </h3>

        <div className='flex flex-col space-y-5'>
            <h4 className='text-xl break-normal md:text-4xl font-semibold text-center'>
                I have got just what you need. {" "} 
                <span className='underline decoration-[#F7AB0A]'>Lets talk</span>
            </h4>
            <div className='space-y-3'>
                <Link href="tel:+919769857233">
              <div className='flex items-center space-x-5 justify-center'>
                  <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                  <p className='text-xl'>+919769857233</p>
              </div>
                </Link>
              <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-xl'>rishabh.choudhary.ug21@nsut.ac.in</p>
              </div>
              <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>NSUT Dwarka</p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-1 mx-auto'>
              <div className='flex space-x-1'>
                <input {...register('name')} className='contactInput' placeholder='Name' type="text" required/>
                <input {...register('email')} className='contactInput' placeholder='Email' type="email" required/>
              </div>
              <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" required/>
              <textarea {...register('message')} placeholder='Message' className='contactInput' name="" required></textarea>
              <button type='submit'
              className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'
              >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe;
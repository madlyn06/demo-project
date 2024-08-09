import React, { useState } from 'react'
import slider from '../../assets/contact/background.png'
import neb from '../../assets/contact/NEB.png'
export const content = {
  name: 'NEB TRAN',
  position: 'CEO AND FOUNDER',
  email: 'Neb@Unixvisual.com',
  phone: '+84 78 566 2222'
}
import emailjs from '@emailjs/browser'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    address: '',
    other: '',
    inquiries: ''
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData)
    e.preventDefault()

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_mqm0xng'
    const templateId = 'template_fdydcij'
    const publicKey = 'shpc0wIqXmnYGMX4X'

    // Create a new object that contains dynamic template params
    const { address, email, inquiries, name, other, whatsapp } = formData
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Unixvisual',
      whatsapp: whatsapp,
      address: address,
      other: other,
      inquiries: inquiries
    }

    // Send the email using EmailJS
    // eslint-disable-next-line import/no-named-as-default-member
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response)
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          address: '',
          other: '',
          inquiries: ''
        })
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      })
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <h1 className='text-center text-[#c1984f] text-2xl mb-3 font-copper font-extrabold'>Contact Us</h1>
        <div className='grid md:grid-cols-5 md:mx-10 justify-center'>
          <div className=' mx-2 md:col-span-4 md:relative'>
            <img src={slider} alt='' className='w-full' />
            <p className=' lg:absolute font-banmethuot mt-8 md:mt-0 text-white font-bold text-4xl md:text-5xl lg:text-7xl top-12 right-0 lg:translate-x-1/2 sm:w-[535px] w-[360px]'>
              Contact us via email or phone
            </p>
            <p className='text-[#c1984f] font-century text-base -rotate-90 absolute right-[-92px] bottom-[-35px] hidden md:block'>
              {'<----  SCROLL DOWN'}
            </p>
          </div>
          <div className='lg:col-span-1 lg:mt-2 ml-2'>
            <p className='text-[#c1984f] text-2xl font-century font-extrabold my-2'>Unix Visual</p>
            <p className='text-white text-base  md:text-lg lg:text-xl lg:mt-44'>
              Do you want to know how your Living room or your new interiors will look? We can create a beautiful
              Interior Render based on your floor plan.
            </p>
          </div>
        </div>
        {/* <div className='grid  grid-cols-1 lg:grid-cols-4 mt-10 md:mt-40 gap-8'>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div className='col-span-1 font-copper relative w-full flex justify-center' key={index}>
                <img src={neb} alt='' className='lg:w-full md:w-1/2 w-2/3  ' />
                <div
                  style={{ top: '46%' }}
                  className=' font-copper absolute text-dark translate-y-1/2 top-1/2  w-full -translate-x-1/2 left-1/2 text-center'
                >
                  <p className='font-bold text-sm  md:text-2xl lg:text-2xl'>{content.name}</p>
                  <p className='font-bold text-sm md:text-2xl lg:text-xl  mt-4'>{content.position}</p>
                  <p className='text-xs md:text-xl lg:text-xl '>{content.email}</p>
                  <p className='mt-4 text-sm md:text-xl lg:text-xl '>{content.phone}</p>
                </div>
              </div>
            ))}
        </div> */}
        <div className='flex justify-center mt-40'>
          <form action='' onSubmit={handleSubmit}>
            <div className='flex lg:gap-16 gap-6 flex-wrap'>
              <div className='flex flex-col gap-6'>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  className='bg-transparent max-w-[195px] border-b-2 border-[#eeeeee80] outline-none text-white pb-[2px]'
                  onChange={handleChange}
                  placeholder={'Name:'}
                />
                <input
                  type='text'
                  name='whatsapp'
                  value={formData.whatsapp}
                  className='bg-transparent max-w-[195px] border-b-2 border-[#eeeeee80] outline-none text-white pb-[2px]'
                  onChange={handleChange}
                  placeholder={'Whatsapp:'}
                />
                <input
                  type='text'
                  name='inquiries'
                  value={formData.inquiries}
                  className='bg-transparent max-w-[195px] border-b-2 border-[#eeeeee80] outline-none text-white pb-[2px]'
                  onChange={handleChange}
                  placeholder={'Inquiries:'}
                />
                <input
                  type='text'
                  name='other'
                  value={formData.other}
                  className='bg-transparent max-w-[195px] border-b-2 border-[#eeeeee80] outline-none text-white pb-[2px]'
                  onChange={handleChange}
                  placeholder={'Other:'}
                />
              </div>
              <div className='flex flex-col gap-6'>
                <input
                  type='text'
                  name='email'
                  value={formData.email}
                  className='bg-transparent max-w-[195px] border-b-2 border-[#eeeeee80] outline-none text-white pb-[2px]'
                  onChange={handleChange}
                  placeholder={'Email:'}
                />
                <input
                  type='text'
                  name='address'
                  value={formData.address}
                  className='bg-transparent max-w-[195px] border-b-2 border-[#eeeeee80] outline-none text-white pb-[2px]'
                  onChange={handleChange}
                  placeholder={'Address:'}
                />
              </div>
            </div>

            {/* <input type='text' name='whatsapp' onChange={handleChange} /> */}
            <div className='flex justify-center'>
              <button className='text-[#c1984f] italic mx-auto'>Send...</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

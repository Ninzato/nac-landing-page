import ContactCard from '@/components/Contact/ContactCard'
import ContactForm from '@/components/Contact/ContactForm'
import { MainFooter } from '@/components/Main/MainFooter'
import { MainTopbar } from '@/components/Main/MainTopbar'
import React from 'react'

const page = () => {
  return (
    <>
    <MainTopbar/>
    <ContactCard/>
    <ContactForm/>
    <MainFooter/>
    </>
  )
}

export default page
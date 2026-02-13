import Container from '@/components/layout/Container'
import WegovyTableContent from '@/components/treatment-wegovy/weggovy-table-content'
import WegovyBmi from '@/components/treatment-wegovy/wegovy-bmi'
import WegovySection from '@/components/treatment-wegovy/wegovy-sections'
import WegovyInjection from '@/components/treatment-wegovy/wegovyInjection'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Wegovy = () => {
  return (
    <section className='bg-[#f2f3f5] -mt-7'>
      <Container>
        {/* breadcrumbs */}
        <div className='flex items-center justify-start gap-2 pt-16 pl-5'>
          <Link href="/" className='hover:underline text-[#160647] text-base'>
            Home
          </Link>
          <ChevronRight size={16} />
          <Link href="/" className='hover:underline text-[#160647] text-base'>
            Available Treatments
          </Link>
          <ChevronRight size={16} />
          <Link href="/" className='text-base'>
            Home
          </Link>
        </div>
        <WegovyInjection />
        <WegovyBmi />
        <WegovySection />
        <WegovyTableContent />
      </Container>
    </section>
  )
}

export default Wegovy
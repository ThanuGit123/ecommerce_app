import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 boreder-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10  flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Forever — Where Fashion Lives On

            Discover timeless style and modern trends at Forever, your ultimate destination for fashion that speaks to you. Whether you're dressing for comfort, confidence, or celebration — we’ve got your wardrobe covered.</p>
          <p>At Forever, we believe fashion is more than just clothing — it's an expression of who you are.
            We offer a carefully curated collection of apparel for every style and every moment. From streetwear to seasonal collections, each piece is designed to bring out the best in you.

            Founded with the mission to deliver affordable, high-quality fashion, Forever is your everyday companion in clothing that feels good, looks great, and lasts long.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Forever — Your Style, Your Story.

               Fashion that fits. Trends that last.

               Where every outfit begins — Forever.

               Dress bold. Stay timeless.

               Look good. Feel Forever.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title  text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py:8 sm:py-20 flex flex-col gap-5'>
          <b> Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, quality isn't just a promise — it's our foundation.</p>

        </div>
        <div className='border px-10 md:px-16 py:8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>User-Friendly Interface – Browse, filter, and find your perfect outfit in seconds.</p>

        </div>
        <div className='border px-10 md:px-16 py:8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Responsive Support – Quick replies through chat, email, or phone..</p>

        </div>
         
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About

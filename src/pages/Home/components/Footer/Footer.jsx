import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-black dark:bg-gray-900 -mx-4'>
      <div className='grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4'>
        <div>
          <h2 className='mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400'>
            Company
          </h2>
          <ul className='text-white dark:text-gray-400'>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              About
            </li>
            <li className='mb-4'>
              <Link to='/' className='hover:underline' />
              Careers
            </li>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              Brand Center
            </li>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              Blog
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400'>
            Help center
          </h2>
          <ul className='text-white dark:text-gray-400'>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              Discord Server
            </li>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              Twitter
            </li>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              Facebook
            </li>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              Contact Us
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400'>
            Legal
          </h2>
          <ul className='text-white dark:text-gray-400'>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              Privacy Policy
            </li>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              Licensing
            </li>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              Terms &amp; Conditions
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400'>
            Download
          </h2>
          <ul className='text-white dark:text-gray-400'>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              iOS
            </li>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              Android
            </li>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              Windows
            </li>
            <li className='mb-4'>
              <Link to='/' className=' hover:underline' />
              MacOS
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer class='bg-black dark:bg-gray-900 -mx-4'>
      <div class='grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4'>
        <div>
          <h2 class='mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400'>
            Company
          </h2>
          <ul class='text-white dark:text-gray-400'>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                About
              </Link>
            </li>
            <li class='mb-4'>
              <Link to='/' class='hover:underline'>
                Careers
              </Link>
            </li>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                Brand Center
              </Link>
            </li>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class='mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400'>
            Help center
          </h2>
          <ul class='text-white dark:text-gray-400'>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                Discord Server
              </Link>
            </li>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                Twitter
              </Link>
            </li>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                Facebook
              </Link>
            </li>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class='mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400'>
            Legal
          </h2>
          <ul class='text-white dark:text-gray-400'>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                Privacy Policy
              </Link>
            </li>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                Licensing
              </Link>
            </li>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class='mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400'>
            Download
          </h2>
          <ul class='text-white dark:text-gray-400'>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                iOS
              </Link>
            </li>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                Android
              </Link>
            </li>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                Windows
              </Link>
            </li>
            <li class='mb-4'>
              <Link to='/' class=' hover:underline'>
                MacOS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
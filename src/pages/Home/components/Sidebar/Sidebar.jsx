import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../../../assets/images/logo.png'

function Sidebar() {
  const menuList = [
    { name: 'Home', icon: 'fa-solid fa-house-chimney', link: '/' },
    {
      name: 'Products',
      icon: 'fa-brands fa-product-hunt',
      link: '/products/men',
    },
    { name: 'Cart', icon: 'fa-solid fa-cart-shopping', link: '/cart' },
    { name: 'About', icon: 'fa-solid fa-address-card', link: '/about' },
    { name: 'Contact', icon: 'fa-solid fa-address-book', link: '/contact' },
  ]

  const activeStyle = {
    backgroundColor: 'white',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  }

  return (
    <ul className='p-4'>
      <img src={Logo} className='object-cover w-32 mx-auto mb-4' alt='logo' />
      {menuList.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.link}
            className='w-full inline-block rounded p-2 cursor-pointer mb-4 transition-colors hover:bg-gray-100'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <i className={item.icon} />
            <span className='ml-3'>{item.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar

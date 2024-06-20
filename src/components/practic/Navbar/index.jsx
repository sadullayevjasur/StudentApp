import React from 'react'
import './index.css'
import { FaRegHeart } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import rasm from '../Navbar/logo.png'

function Navbar() {
  return (
    <header>
        <div className="menu">
            <ul className='ul '>
                <li><a href="">Контрагентам</a></li>
                <li><a href="">Дизайнерам</a></li>
                <li><a href="">Вакансии</a></li>
                <li><a href="">{rasm}</a></li>
               <input type="search" placeholder='search' />
                <li><a href="">Вход/Регистрация</a></li>
                <FaRegHeart />
                <IoMdPeople />



            </ul>
        </div>
    </header>
  )
}

export default Navbar
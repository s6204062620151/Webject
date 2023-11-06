import React from 'react'
import {  AiFillHome,AiOutlineAppstoreAdd,AiOutlineAppstore,AiOutlineOrderedList } from 'react-icons/ai'

export const SIdebarData = [
    {
        title: "Home",
        path: "/" ,
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
      title: "Add Products",
      path: "/Adminaddproduct" ,
      icon: <AiOutlineAppstoreAdd/>,
      cName: 'nav-text'
  },
  {
      title: "Products Lists",
      path: "/Adminproductlists" ,
      icon: <AiOutlineAppstore />,
      cName: 'nav-text'
  },
  {
      title: "Order Lists",
      path: "/Adminorderlists" ,
      icon: <AiOutlineOrderedList />,
      cName: 'nav-text'
  }
]

import Directory from '../../components/directory/directory.component';
// import useState from "react-dom"
import React, { useContext } from 'react';
import { user_info_context } from '../../components/context/userContext';
import {useState} from 'react'

const Home = () => {
    const user =  useContext(user_info_context)

  // const a  =  3;
  console.log('react')
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];
  

  // const [ccategories , setcategories] = useState(categories)
  
  return <Directory categories={categories} />
    
    
    
   

};

export default Home;
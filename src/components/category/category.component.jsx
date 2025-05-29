

import { useNavigate } from 'react-router-dom';
import './category.style.scss';


const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    const nav =  useNavigate()
    const handleClick = ()=>{

      nav(`/shop/${title}`)
    }
    return (
      <div className='directory-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body' onClick={handleClick}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
    );
  };
  
  export default CategoryItem;
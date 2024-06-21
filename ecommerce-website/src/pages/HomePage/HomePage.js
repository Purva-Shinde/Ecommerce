import React, { useEffect } from 'react'
import HeroSlider from '../../components/Slider/HeroSlider'
import './HomePage.css';
import Category from '../../components/Category/Category';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/store/categorySlice';
const HomePage=()=> {
  const dispatch = useDispatch();
  const {data: categories, status: categoryStatus} = useSelector((state) => state.category);
  useEffect(() => {
     dispatch(fetchCategories());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='homePage'>
      <HeroSlider/>
      <Category categories = {categories} status = {categoryStatus} />
      
    </div>
  )
}

export default HomePage
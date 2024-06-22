import React, { useEffect } from 'react'
import HeroSlider from '../../components/Slider/HeroSlider'
import './HomePage.css';
import Category from '../../components/Category/Category';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/store/categorySlice';
import ProductList from '../../components/ProducList/ProductList';
import {fetchProducts} from '../../redux/store/productSlice'
const HomePage=()=> {
  const dispatch = useDispatch();
 const {data: categories, status: categoryStatus} = useSelector((state) => state.category);
  const {data: products, status: productStatus} = useSelector((state) => state.product);
   useEffect(() => {
    dispatch(fetchProducts());
     dispatch(fetchCategories());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='homePage'>
      <HeroSlider/>
      <Category categories = {categories} status = {categoryStatus} />
      <ProductList  products = {products} status = {productStatus}/> 
      
    </div>
  )
}

export default HomePage
import React, { useEffect } from 'react'
import HeroSlider from '../../components/Slider/HeroSlider'
import './HomePage.css';
import SingleCategory from '../../components/SingelCategory/SingleCategory'
import Category from '../../components/Category/Category';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories,fetchProductsByCategory } from '../../redux/store/categorySlice';
import ProductList from '../../components/ProducList/ProductList';
import {fetchProducts} from '../../redux/store/productSlice'
const HomePage=()=> {
   const dispatch = useDispatch();
 const {data: categories, status: categoryStatus} = useSelector((state) => state.category);
  const {data: products, status: productStatus} = useSelector((state) => state.product);
  const {catProductAll: productsByCategory, catProductAllStatus} = useSelector((state) => state.category);

   useEffect(() => {
    dispatch(fetchProducts());
     dispatch(fetchCategories());
     dispatch(fetchProductsByCategory(1, 'all'));
     dispatch(fetchProductsByCategory(2, 'all'));
     
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   return (
    <div className='homePage'>
      <HeroSlider/>
      <Category categories = {categories} status = {categoryStatus} />
      <ProductList  products = {products} status = {productStatus}/> 
      <section>
        { productsByCategory[1] && <SingleCategory products = {productsByCategory[1]} status = {catProductAllStatus} /> }
      </section>
      <section>
        { productsByCategory[2]&& <SingleCategory products = {productsByCategory[2]} status = {catProductAllStatus} /> }
      </section>
      
    </div>
  )
}

export default HomePage
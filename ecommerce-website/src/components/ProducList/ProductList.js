import React from 'react';
import './ProductList.css'
import ERROR from '../Error/Error';
import LOADER from '../Loader/Loader';
import {STATUS} from '../../utils/status';
import { formatPrice } from '../../utils/helpers';
import { useSelector, useDispatch } from 'react-redux';
import SingleProduct from '../SingleProduct/SingleProduct';
import { setModalData, setIsModalVisible } from '../../redux/store/modalSlice';


const ProductList=({products,status}) =>{
    const dispatch = useDispatch();
    const {isModalVisible} = useSelector((state) => state.modal);

    const viewModalHandler = (data) => {
        dispatch(setModalData(data));
        dispatch(setIsModalVisible(true));
    }

    if (status=== STATUS.ERROR) return (<ERROR/>);
    if (status === STATUS.LOADING) return (<LOADER/>);
  return (
 
    <div className='product  bg-ghost-white '>
            { isModalVisible && <SingleProduct />}
 
<div className='container'>
<div className='product-content'>
<div className='section-title'>
<h3 className='fw-7 text-regal-blue'>OUR PRODUCT</h3>
</div>
<div className='product-items grid'>
    {products.slice(0,20).map(product =>(
        <div className='product-item' key = {product.id}  onClick = {() => viewModalHandler(product)}>
    <div className='produt-item-img'>
    <img src = {product.images[0]} alt = "" />
    <div className = "product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">{product.category.name}</div>

    </div>
    <div className='product-item-body'>
<h6 className='product-item-title'>{product.title}</h6>
<div className='product-item-price'>{formatPrice(product.price)}</div>
    </div>
</div>
    ))

}
</div>
</div>
</div>

    </div>
  )
}

export default ProductList
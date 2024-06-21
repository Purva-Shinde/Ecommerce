import { createSlice } from "@reduxjs/toolkit";
// import { BASE_URL } from "../../utils/apiURL.js";
import { STATUS } from "../../utils/status.js";
 
const categorySlice = createSlice({
    name:'category',
    initialState:{
        data:[],
        status:STATUS.IDLE,
        catProductAll:[],
        catproductAllStatus:STATUS.IDLE,
        catproductsingle:[],
        catproductsinglestatus:STATUS.IDLE
    },

    reducers:{
        setCategories(state,action){
            state.data =action.payload;
        },
        setStatus(state,action){
            state.status= action.payload;
        },
        setCategoriesProductAll(state,action){
        state.catProductAll = action.payload;
},
        setCategoriesStatusAll(state, action){
            state.catProductAllStatus = action.payload;
        },
        setCategoriesProductSingle(state, action){
            state.catProductSingle = action.payload;
        },
        setCategoriesStatusSingle(state, action){
            state.catProductSingleStatus = action.payload;
        }
    }

});


 

export const {
    setCategories,
    setStatus,
    setCategoriesProductAll,
    setCategoriesStatusAll,
    setCategoriesProductSingle,
    setCategoriesStatusSingle
} = categorySlice.actions;
export default categorySlice.reducer;



export const fetchCategories = () => {
    debugger
    return async function fetchCategoryThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response = await fetch("https://api.escuelajs.co/api/v1/categories");
            console.log('response', response)
            const data = await response.json();
            dispatch(setCategories(data.slice(0, 5)));
            dispatch(setStatus(STATUS.IDLE));
        } catch(error){
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}


export const fetchProductsByCategory = (categoryID, dataType) => {
    return async function fetchCategoryProductThunk(dispatch){
        if(dataType === 'all') dispatch(setCategoriesStatusAll(STATUS.LOADING));
        if(dataType === 'single') dispatch(setCategoriesStatusSingle(STATUS.LOADING));
        
        try{
            const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryID}/products`);
            const data = await response.json();
            if(dataType === 'all'){
                dispatch(setCategoriesProductAll(data.slice(0, 5)));
                dispatch(setCategoriesStatusAll(STATUS.IDLE));
            }
            if(dataType === 'single'){
                dispatch(setCategoriesProductSingle(data.slice(0, 10)));
                dispatch(setCategoriesStatusSingle(STATUS.IDLE));
            }                       
        } catch(error){                      
            dispatch(setCategoriesStatusAll(STATUS.ERROR));
        }
    }            
}

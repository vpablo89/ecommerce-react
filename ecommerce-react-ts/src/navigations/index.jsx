import React from "react";
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from '../containers/CartContainer';
import NoRouteFound from "../components/NoRouteFound";

const MainNavigator = () => {
    return (
        
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />}/>
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NoRouteFound/>} />
                <Route path="/detail/*"  element={<NoRouteFound/>} />
            </Routes>
        </BrowserRouter>
        
    );
};

export default MainNavigator;
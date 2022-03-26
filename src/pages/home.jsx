import React from 'react';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import ProductList from '../containers/ProductList';


const home = () => {
    return (
        <main>
        <Header/>
        <section>
            <ProductList/>
        </section>
         </main>
    )
}

export default home;
import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddProducts from './AddProducts';
import AllProducts from './AllProducts';
import axios from 'axios'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("/api/product/all");
            setProducts(result.data);
            //console.log(result.data);
        }
        fetchData();
    }, []);

    return (
        <div className='products'>
            <Tabs>
                <TabList>
                    <Tab>All Products</Tab>
                    <Tab>Add Products</Tab>
                </TabList>

                <TabPanel>
                    <h3 className='accountContentTitle'>All Products</h3>
                    {products.length === 0 ? (<h4 className='noProducts'>There are currently no products!</h4>) : (
                        <div className="d-flex">
                            {products.map((product) => (
                                <AllProducts product={product} key={product._id} />
                            ))}
                        </div>
                    )}
                </TabPanel>
                <TabPanel>
                    <h3 className='accountContentTitle'>Add Products</h3>
                    <AddProducts />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Products
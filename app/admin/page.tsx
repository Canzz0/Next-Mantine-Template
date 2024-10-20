'use client';
import {Box, Container,Title } from '@mantine/core';
import React from 'react';
import { ProductList } from './product/productlist';
import AddProduct from './components/addproduct/addproduct';
import classes from './adminpage.module.css';
import AddCategory from './category/addcategory/addcategory';
const page = () => {
  return (
    <Container mt='lg' size="xl" >
    
      <Box mb='md' className={classes.titleplace}>
          <Title order={3} size="h1">
            H3 heading with h1 font-size
          </Title>
          <AddProduct />
          <AddCategory/>
        </Box>
        <ProductList />
    </Container>
  );
};

export default page;

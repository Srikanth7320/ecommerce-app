import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    axios.get('/api/products?featured=true&limit=8')
      .then(res => setFeaturedProducts(res.data.products))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <Box>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
        Welcome to E-Shop
      </Typography>
      
      <Grid container spacing={3}>
        {featuredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product._id}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                alt={product.name}
              />
              <CardContent>
                <Chip label={product.category} size="small" sx={{ mb: 1 }} />
                <Typography gutterBottom variant="h6" noWrap>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  ${product.price}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    component={Link}
                    to={`/products/${product._id}`}
                  >
                    View
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
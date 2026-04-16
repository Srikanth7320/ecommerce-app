import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box
} from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          E-Shop
        </Typography>
        
        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>
        
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/orders">
              Orders
            </Button>
            <IconButton color="inherit" onClick={handleLogout}>
              <AccountCircle />
            </IconButton>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </>
        )}
        
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
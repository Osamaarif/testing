import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';

function App () {
  return (
    <div>
      <ButtonAppBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="products" element={<ProductsStage />}>
          <Route path="/" element={<ShoesIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}



function ButtonAppBar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 25,
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <nav>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to ='/' className='header'>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to ='products'className="header">
              Products
            </Link>
          </Typography>
          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
      </nav>
    </div>
  );
}


function ShoesIndex () {
  return (
    <ul>
      {Object.entries(Shoes).map(([slug, {name, img}]) => (
        <li key={slug}>
          <Link to={`/products/${slug}`}>
          <h2>{name}</h2>
          <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LaunchShoe () {
  const { slug } = useParams();
  const shoe = Shoes[slug];

  if (!shoe) {
    return <h2>Not found</h2>
  }

  const { name, img} = shoe ;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

const Shoes = {
    "space-hippie-2-volt":{
      name: "SPACE-HIPPIE-02-VOLT",
      img: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/5343cbb8-5e23-45f2-9236-0ebe6f14d65e/space-hippie-02-volt-this-is-trash-release-date.jpg"
      },
    "air-force-1-07":{
      name: "AIR-FORCE-1-07",
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/30c619b7-12ad-402e-85a4-fff5509e0c72/air-force-1-07-shoe-SFvPJF.jpg"
      }
    }

function Home () {
  return (
      <h1>Home page</h1>
  );
}

function ProductsStage () {
  return (
    <div>
      <h1>Products page</h1>
      <Outlet />
    </div>
   );
}

function NotFound () {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
}


export default App;
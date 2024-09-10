import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Category from './pages/Category'
import CategoryFilter from './pages/CategoryFilter'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/products/:id' element={<ProductDetails />}/>
      <Route path='/categories' element={<Category />}/>
      <Route path='/categoryfilter/:slug' element={<CategoryFilter/>}/>
      <Route path='/signin' element={<SigninPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route  path='*' element={<div>404 Not Found</div>}/>
    </Routes>
    </BrowserRouter>  
  )
}

export default App

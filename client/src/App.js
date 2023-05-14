import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Newsletter from "./components/Footer/Newsletter/Newsletter"
import AppContext from "./util/context"
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Pay from './components/Pay/Pay'
import Success from './components/success/Success'
import About from './components/About/About'
import Dashboard from './components/Dashboard/Dashboard'
import CreateProduct from './components/Dashboard/CreateProduct'
import User from './components/Dashboard/User'
import Order from './components/Order/Order'

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from 'react-query'
  import { CartProvider } from './util/cartContext'

function App() {
    const queryClient = new QueryClient()
    return (
        
        
        <AppContext>
        <CartProvider>
        <QueryClientProvider client={queryClient}>
        <Router>
            
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/pay" element={<Pay />} />
                    <Route path="/success" element={<Success />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/createproduct' element={<CreateProduct />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/orders' element={<Order />} />

                </Routes>
                <Newsletter />
                <Footer />
            
        </Router>
        </QueryClientProvider>
        </CartProvider>
        </AppContext>
        
        
    )
}

export default App;

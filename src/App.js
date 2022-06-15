import './App.css';
import Nav from './Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer';
import SignUp from './SignUp';
import PrivateComponent from './PrivateComponent';
import LogIn from './LogIn'
import AddProduct from './AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Nav/>
 
        <Routes>

        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<h1>Product Component</h1>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update" element={<h1>Update Product Component</h1>}/>
        <Route path="/logout" element={<h1>Logout Component</h1>}/>
        <Route path="/profile" element={<h1>Profile Component</h1>}/>
        </Route>

        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<LogIn/>}/>

        </Routes>



      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;


import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes, Route ,Link, Router} from 'react-router-dom';
// import Home from './react Router/Home';
// import About from './react Router/About';
// import Services from './react Router/Services';
import ApiCall from './ApiCall';
// import Post from './axios/Post';
import Navbar from './layout/Navbar';
import Home from './pages/Home';

import AddUser from './users/Adduser';
import EditUser from './users/EditUser';

import ViewUser from './users/ViewUser';
import FilteredList from './FilterArray.jsx';
import FilterArray from './FilterArray.jsx';
import UseMemoDemo from './component/reacthook/UseMemoDemo';
import Counter from './component/reacthook/Counter ';
import UseReducer from './component/reacthook/UseReducer';
import Header from './addcard/Header';
import AgeCalculator from './AgeCalculator';
function App() {
  return (
    <div>
      {/* <AgeCalculator/> */}
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser/>} />
        </Routes>
      </BrowserRouter>
    {/* <Counter/> */}
    {/* <UseReducer/> */}
 {/* <FilteredList/> */}
 {/* <FilterArray/> */}
 {/* <UseMemoDemo/> */}
      {/* <ApiCall/> */}
      {/* <Post/> */}
     
     {/* <BrowserRouter>
     <ul>
       <li><Link to="/home">Home</Link></li>
       <li><Link to="/about">About</Link></li>
       <li><Link to="/services">Services</Link></li>

    </ul>
     <Routes>
         <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/services/:message" element={<Services/>}/>
      </Routes>
     </BrowserRouter> */}


     {/* <Header/> */}
     </div>
   
  );
}

export default App;

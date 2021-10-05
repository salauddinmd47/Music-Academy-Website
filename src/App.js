import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import AllCourses from './components/AllCourses/AllCourses';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Teachers from './components/Teachers/Teachers'; 
import CourseDetails from './components/CourseDetails/CourseDetails';
import AdmissionFrom from './components/AddmissionForm/AdmissionFrom';
//  All components is being placed Switch router so that routing can be easily done.Header and footer components declare outside switch so that it can be found in every page of this website.
function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route  path="/home">
              <Home></Home>
          </Route>
          <Route  path="/about">
             <AboutUs></AboutUs>
          </Route>
          <Route  path="/courses">
            <AllCourses></AllCourses>
          </Route>
          <Route  path="/details/:courseId">
            <CourseDetails></CourseDetails>
          </Route> 
          <Route  path="/teacher">
            <Teachers></Teachers>
          </Route>
          <Route  path="/admission">
           <AdmissionFrom></AdmissionFrom>
          </Route>
          <Route path ="*">
            <NotFound></NotFound>
          </Route>
        </Switch>  
        <Footer></Footer>
      </Router> 
    </div>
  );
}

export default App;

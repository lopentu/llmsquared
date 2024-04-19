import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import DataCuration from './pages/DataCuration';
import Header from './components/Header';
import ModelTraining from './pages/ModelTraining';
import Evaluation from './pages/Evaluation';
import Application from './pages/Application';
import Posts from './pages/Posts/Posts';
import SubProjectFirst from './pages/SubProjectFirst';
import SubProjectTwo from './pages/SubProjectTwo';
import SubProjectThree from './pages/SubProjectThree';
import SubProjectFour from './pages/SubProjectFour';
import MainProject from './pages/MainProject';
import React  from 'react';
import ScrollToTop from './ScrollToTop';
import News from './pages/News';
import Hackathon from './pages/Posts/Hackathon';


const App = () => {



    return(
        <div className='App'>
            <BrowserRouter basename={process.env.PUBLIC_URL}>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/plan/main-project' element={<MainProject/>} />
                    <Route path='/plan/data-curation' element={<DataCuration/>} />
                    <Route path='/plan/model-training' element={<ModelTraining/>} />
                    <Route path='/plan/evaluation' element={<Evaluation/>} />
                    <Route path='/plan/application' element={<Application/>} />
                    <Route path='/posts' element={<Posts/>}/>
                    <Route path='/sub-project/first' element={<SubProjectFirst/>}/>
                    <Route path='/sub-project/second' element={<SubProjectTwo/>} />
                    <Route path='/sub-project/third' element={<SubProjectThree/>} />
                    <Route path='/sub-project/forth' element={<SubProjectFour/>} />
                    <Route path='/news' element={<News/>}/>
                    <Route path='/news/hackathon' element={<Hackathon/>}/>
                </Routes>
                <ScrollToTop />

            </BrowserRouter>
        </div>
    )
}

export default App
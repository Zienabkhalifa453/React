// import logo from './logo.svg';
import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";
import Watchlist from "./components/WatchList";
import { LanguageProvider } from "./context/Language";
// import RegisterForm from "./components/RegisterForm";
const RegisterForm = React.lazy(()=>import('./components/RegisterForm'));
function App() {
  return (
    
    <BrowserRouter>
      <LanguageProvider>
        <Header></Header>
        <div className="container">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="movie-details/:id" element={<MovieDetails />} /> 
              <Route path="watch-list" element={<Watchlist />} /> 
              <Route path="form" element={<RegisterForm />} /> 
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </Suspense>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  
    
  );
}

export default App;

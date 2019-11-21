import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import DogsListContainer from "./components/DogsListContainer";
import { Route } from "react-router-dom";
import DogBreedImagesContainer from "./components/DogBreedImagesContainer";

function App() {
  return (
    <main>
      <Route exact path="/" component={DogsListContainer} />
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
    </main>
  );
}

export default App;

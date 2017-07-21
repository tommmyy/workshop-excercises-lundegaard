import React from 'react';
import VolumesList from '../../containers/VolumesList';
import Filter from '../../containers/Filter';
import './App.css';

const App = () =>
  <div className="App">
  	<Filter />
    <VolumesList />
  </div>;

App.propTypes = {

};

export default App;

import React from 'react';
import VolumesList from '../../containers/VolumesList';
import Filter from '../../containers/Filter';
import ErrorBox from '../../containers/ErrorBox';
import './App.css';

const App = () =>
  <div className="App">
  	<ErrorBox />
  	<Filter />
    <VolumesList />
  </div>;

App.propTypes = {

};

export default App;

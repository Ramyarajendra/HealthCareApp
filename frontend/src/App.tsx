import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import ProviderList from './components/ProviderList';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Search />
        <ProviderList />
      </Container>
    </div>
  );
}

export default App;

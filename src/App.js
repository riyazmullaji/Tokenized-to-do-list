import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import TodoList from './TododoList';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => (props.darkMode ? '#333' : '#fff')};
    color: ${(props) => (props.darkMode ? '#fff' : '#333')};
    font-family: 'Arial', sans-serif;
  }
`;

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ToggleButton = styled.button`
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <AppContainer>
        <Header  />
        <TodoList />
        <Footer  />
        <ToggleButton onClick={toggleDarkMode}>
          Toggle Dark Mode
        </ToggleButton>
      </AppContainer>
    </>
  );
}

export default App;

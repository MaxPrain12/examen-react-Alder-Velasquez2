import React from 'react';
import NavBaa from './components/NavBaa';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PaginasApp } from './data/PaginasApp';

function App() {
  return (
    <Router>
      <NavBaa />
      {PaginasApp.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}
export default App;

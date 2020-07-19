import React from 'react';
import Layout from './components/Layout/Layout';
import BurgurBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgurBuilder/>
      </Layout>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Components/Layout/Layout"
import CustomerView from './Components/Customer/CustomerView';

function App() {
  return (
    <div>
      <Layout>
        <div>
        {/* <h2>Collapsible Sidebar Using Bootstrap 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
        <CustomerView/>
        </div>
      </Layout>
    </div>
  )
}

export default App;

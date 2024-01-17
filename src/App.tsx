
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/security/Login';
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import 'primeicons/primeicons.css';
import './App.css'
import WithAuthentication from './hooks/WithAuthentication';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './pages/layout/Layout';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={
          <WithAuthentication>
            <Layout >
              <Dashboard></Dashboard>
            </Layout>
          </WithAuthentication>}
        />
      </Routes>
    </Router>
  )
}

export default App

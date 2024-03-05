import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { BarChart } from './components/BarChart';
import { Footer } from './components/Footer';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/InOut';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { Settings } from './components/Settings';
import { GlobalProvider } from './context/GlobalState';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Header />
                  <div className='container'>
                    <Balance />
                    <IncomeExpenses />
                    <BarChart />
                    <TransactionList />
                    <AddTransaction />
                  </div>
                  <div className='footer'>
                    <Link to='/settings'>
                      <button className='btn-green'>Settings</button>
                    </Link>
                    <Footer />
                  </div>
                </>
              }
            />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </Router>
      </GlobalProvider>

      <ToastContainer />
    </>
  );
}

export default App;

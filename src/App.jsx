import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/InOut'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </GlobalProvider>
  )
}

export default App

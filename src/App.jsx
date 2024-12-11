import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransactionList from './components/AddTransactionList';


import { GlobalProvider } from './context/GlobalState';

function App() {

  return (
    <GlobalProvider>
     <Header />
     <div className='container'>
      <Balance />
     <IncomeExpenses />
     <TransactionList />
     <AddTransactionList />
     </div>
    </GlobalProvider>
  )
}

export default App


import './App.css'
import Laptop from './Component/Laptop'

function App() {

  return (
    <>
    <Laptop name = "Hp" model = 'probook'  price={15000} style={{backgroundColor:"red" ,}}/>
    <Laptop name = "Dell" model = 'aspire'  price={25000}/>
    <Laptop name = "Asus" model = 'zerobook'  price={45000}/>
    </>
  )
}

export default App

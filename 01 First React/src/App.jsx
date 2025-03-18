import './App.css'
import Jsx from './Component/JSX'
import Person from './Component/Person'
import Product from './Component/Product'

function App() {

  return (
    <>
    {/* <Jsx/> */}
    {/* <Person/> */}
    <Product title = "I phone" Brand = "Apple" quantity = "2" price = "10000"/>
    <Product title = "Galaxy s24" Brand = "Samsung" quantity = "5" price = "1000"/>
    </>
  )
}

export default App

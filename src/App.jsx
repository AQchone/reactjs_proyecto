import Header from "./components/header/header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div>
      <Header/>
      <ItemListContainer mensaje="hola mundo"/>
    </div>
  )
}

export default App

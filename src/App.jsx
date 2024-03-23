import HomePage from './screens/HomePage'
import ProductPage  from "./screens/ProductPage"
import { Route } from "wouter";
function App() {
  return (
    <>
    <Route path='/' component={HomePage}/>
    <Route path='/product/:id'>
      {params => <ProductPage id={params.id} />}
    </Route>
    </>
  )
}

export default App
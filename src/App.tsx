
import { Provider } from 'react-redux'
import './App.css'
import { RootLayout } from './layout'
import { store } from './store/store'


function App() {

  return (
    <Provider store={store}>
      <RootLayout />  
    </Provider>
  )
}

export default App

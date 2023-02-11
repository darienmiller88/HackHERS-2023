import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [numStores, setNumStores] = useState(0)
  const [numItems, setNumItems] = useState(0)
  const headers = {
    'Ocp-Apim-Subscription-Key': '4ae9400a1eda4f14b3e7227f24b74b44',
    'accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST,OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Authorization,Ocp-Apim-Subscription-Key'
  }

  useEffect(() => {
    (async() => {
      const stores = await axios.get("https://apimdev.wakefern.com/mockexample/V1/getStoreDetails", {
        headers: headers
      })
  
      const items = await axios.get("https://apimdev.wakefern.com/mockexample/V1/getItemDetails", {
        headers: headers
      })
  
      setNumItems(items.data.length)
      setNumStores(stores.data.length)
      console.log("num stores:", stores.data.length, "and num items:", items.data.length)
    })()
  }, [])

  return (
    <div className="App">
      <h1>Number of Wakefern stores: {numStores}</h1>
      <h1>Number of items: {numItems}</h1>
    </div>
  )
}

export default App

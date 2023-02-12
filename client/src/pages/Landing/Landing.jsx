import React, { useEffect, useState } from 'react'
import styles from "./Landing.module.scss"
import axios from "axios"
import logo from "../../assets/wakefernlogo.png"
import Button from "../../components/Button/Button"

export default function Landing() {
    const [stores, setStores] = useState([])
    const [numItems, setNumItems] = useState(0)
    const [name, setName] = useState("")
    const [selectedStore, setSelectedStore] = useState("6612 Landis Ave #UNIT WS")
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
    
        // const items = await axios.get("https://apimdev.wakefern.com/mockexample/V1/getItemDetails", {
        //   headers: headers
        // })
    
        // setNumItems(items.data.length)
        setStores(stores.data)
      })()
    }, [])

    const submitForm = e => {
        e.preventDefault()

        console.log("user selected: ", selectedStore)
    }       

    // console.log("store:", stores[1])
  
    return (
        <div className={styles.Landing}>
            <div className={styles.login_wrapper}>
                <Button buttonText={"Log in/Register"}/>
            </div>
            <div className={styles.logo_wrapper}>
                <img alt='logo' src={logo}/>
            </div>

            <h1>Customer Feedback Survey</h1>
            <h3>
                Thank you for shopping with us! Please take the time to fill out the following feedback form so we can 
                continue to provide the best possible service 🙏. 
            </h3>
            <div className={styles.horizontal}></div>

            <form onSubmit={submitForm}>
                <div className={styles.selection_wrapper}>
                    <label>Please select your the Wayfern Food Corp you are currently at:</label>
                    <select value={selectedStore} onChange={e => setSelectedStore(e.target.value)} required>
                        {
                            stores.map((store, i) => {
                                return <option value={store.Address} key={i}>
                                    { store.Address }
                                </option>
                            })
                        }
                    </select>
                </div>

                <div className={styles.name_wrapper}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.name)}/>
                </div>

                <div className={styles.submit_wrapper}>
                    <Button buttonText={"Submit feedback"}/>
                </div>
            </form>
        </div>
    )
}

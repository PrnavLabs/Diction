import { useState, useEffect } from "react"
import Challenge from "./components/Layouts/Challenge"
import Dashboard from "./components/Layouts/Dashboard"
import Layout from "./components/Layouts/Layout"
import Welcome from "./components/Layouts/Welcome"
import WORDS from "./utils/Vocab.json"

function App() {
  
  const [selectedPage, setSelectedPage]= useState(0) //zero is for welcome, 1 is for dashboard, 2 is for challenge
  const [name, setName]= useState('')
  const [day, setDay]= useState(1)
  const [datetime, setDatetime] = useState(null)
  const [history, setHistory] = useState({})
  const [attempts, setAttempts] = useState(0)

  function handleChangePage(pageIndex){
    setSelectedPage(pageIndex)
  }

  function handleCreateAccount(){
    if (!name){return}
    localStorage.setItem('username', name)
    handleChangePage(1)
  }  
  
  useEffect(() => {
    // this callback function is triggered on page load
    if (!localStorage) { return } // if we don't yet have access to the database, then exit the callback function
    if (localStorage.getItem('username')) {
      // if we find the item (so get item returns something), then we enter the if block
      setName(localStorage.getItem('username'))}
      // we have a name, so we can skip to the dashboard
      setSelectedPage(1)
  }, [])
    

  const pages= {
    0: <Welcome handleCreateAccount={handleCreateAccount} name={name} setName={setName} />,
    1: <Dashboard name={name} />,
    2: <Challenge/>
  }

  return (
    
    <Layout>
      {pages[selectedPage]}
    </Layout>
    
  )
}

export default App

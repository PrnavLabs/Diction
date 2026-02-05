import Challenge from "./components/Layouts/Challenge"
import Dashboard from "./components/Layouts/Dashboard"
import Layout from "./components/Layouts/Layout"
import Welcome from "./components/Layouts/Welcome"

function App() {
  
  return (
    
    <Layout>
      <Welcome></Welcome>
      <Dashboard></Dashboard>
      <Challenge></Challenge>
    </Layout>
    
  )
}

export default App

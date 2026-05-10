import Header from './components/Header/Header'
import DiagramSection from './components/DiagramSection/DiagramSection'
import ProsConsTable from './components/ProsConsTable/ProsConsTable'
import PricingSection from './components/PricingSection/PricingSection'
import ScenariosSection from './components/ScenariosSection/ScenariosSection'
import ResponsibilitySection from './components/ResponsibilitySection/ResponsibilitySection'
import TableSection from './components/TableSection/TableSection'
import InventorySection from './components/InventorySection/InventorySection'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <DiagramSection />
        <ProsConsTable />
        <PricingSection />
        <ScenariosSection />
        <ResponsibilitySection />
        <TableSection />
        <InventorySection />
      </main>
      <Footer />
    </div>
  )
}

export default App

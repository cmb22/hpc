import { Routes, Route } from "react-router";
import { Login } from './pages/Login'
import { HPC } from './pages/HPC'
import { Success } from './pages/Success'
import { Layout } from './components/Layout'

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/hpc" element={<HPC />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Layout>
  )
}
export default App;
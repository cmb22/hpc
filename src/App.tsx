import { Routes, Route } from "react-router";
import { Login } from './pages/Login'
import { HPC } from './pages/HPC'
import { Layout } from './components/Layout'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/hpc" element={<HPC />} />
      </Routes>
    </Layout>
  )
}
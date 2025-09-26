import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Página a la que Mercado Pago redirige después del pago */}
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<h1>Pago fallido</h1>} />
        <Route path="/payment-pending" element={<h1>Pago pendiente</h1>} />

       
      </Routes>
    </Router>
  );
}

export default App;

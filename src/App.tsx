import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";

export default function App() {
  return (
    <div>
      <MantineProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </MantineProvider>
    </div>
  );
}

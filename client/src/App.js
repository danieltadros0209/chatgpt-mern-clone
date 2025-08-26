import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./theme";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
import JsConverter from "./pages/JsConverter";
import ScifiImage from "./pages/ScifiImage";
import Footer from "./components/Footer";

// updated this app.js file - review commit
function App() {
  // change theme
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          {/* routes to load pages */}
          <Route path="/" element={<Homepage />} />
          {/* this is the register route */}
          <Route path="/register" element={<Register />} />
          {/* this is the login route */}
          <Route path="/login" element={<Login />} />
          {/* this is the summary route */}
          <Route path="/summary" element={<Summary />} />
          {/* this is the  paragraph route*/}
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;

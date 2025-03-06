import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import CreatePage from "./Pages/CreatePage";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";


function App() {
  
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.200", "gray.800")}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;

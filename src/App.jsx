import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Summary from './pages/Summary';
import Search from './pages/Search';
import Certificate from './pages/Certificate';
import './App.css';

function App() {
  return (
    <Router>
      <SidebarProvider>
        {/* Sidebar component */}
        <AppSidebar />

        {/* Sidebar trigger */}
        <SidebarTrigger />

        {/* Content */}
        <div className="product">
          <h1
            className="text-4xl font-bold"
            style={{
              fontWeight: 500,
              background: "linear-gradient(to right, #4285f4, #d96570)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Summarize government and regulatory compliance documents
          </h1>

          {/* Define routes for content */}
          <Routes>
            <Route path="/" element={<div> </div>} />
            <Route path="/summary" element={<Summary />} />
            <Route path='/certificate' element ={<Certificate/>}/>
            <Route path='/search' element ={<Search/>}/>
            {/* Add more routes here if needed */}
          </Routes>
        </div>
      </SidebarProvider>
    </Router>
  );
}

export default App;

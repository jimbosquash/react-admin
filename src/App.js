import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import {Routes, Route} from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
// import SideBar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Viewer from "./viewer";

// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geomgraphy from "./scenes/geography";
// import Calendar from "./scenes/calendar";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar/>
          <main className="content">
            <TopBar/>
            <Routes>
              <Route path='/' element={<Viewer />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              {/* 
              
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/geography' element={<Geomgraphy />} />
              <Route path='/calendar' element={<Calendar/>} /> */}

            </Routes>

          </main>
        
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
import "./App.css";
import { AppContextProvider } from "./context/app-context";
import { AppRoutes } from "./routes/app-routes";

function App() {
  return (
    <>
      <div className="App">
        <AppContextProvider>
          <AppRoutes />
        </AppContextProvider>
      </div>
    </>
  );
}

export default App;

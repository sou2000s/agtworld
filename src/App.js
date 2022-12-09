import Home from "./Pages/Home/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import { Modal } from "bootstrap";


function App() {
  return (
    <div className="">
        <RouterProvider router={ routes}></RouterProvider>
      
    </div>
  );
}

export default App;

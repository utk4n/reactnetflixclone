import { createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const ToastifyContext = createContext()

const ToastifyContextProvider = ({children}) =>{

    const notify = () => toast('⛔  Please Login.', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

return(
    <ToastifyContext.Provider value={notify}>
        {children}
    </ToastifyContext.Provider>
)

} 
export default ToastifyContextProvider;
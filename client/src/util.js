import {toast} from "react-toastify";

export const handlesuccess = (msg) => {
    
    toast.success(msg, {
        position : 'top-right',
    })
}

export const handleError = (msg) => {

    toast.error(msg, {
        position : 'top-right',
    })
}

const BACKEND_URL = "https://blog-platea-recipe-1.onrender.com";

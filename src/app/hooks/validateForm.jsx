import { useRef } from "react";
import validateEmail from "@/utils/validateEmail";

export default function useFormValidation () {
    const errorRef = useRef(null);

    const validateForm = (form) => {
        errorRef.current = null;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        // Validate that all fields are not empty
        for(let field in data){
            console.log(form.elements[field])
            const element = form.elements[field];
            element.classList.replace("border-red-400", "border-gray-300");
            if(data[field].length === 0) {
                element.classList.replace("border-gray-300", "border-red-400");
                errorRef.current = {
                    error: true,
                    text: "Empty fields"
                }
            }
        }

        if(errorRef.current !== null) return errorRef.current;

        // Validate email
        console.log("Validating email");
        if(!validateEmail(data["email"])){
            form.elements["email"].classList.replace("border-gray-300", "border-red-400");
            errorRef.current = {
                error: true,
                text: "Invalid email"
            }
        }

        if(errorRef.current !== null) return errorRef.current;

        // Validate password
        console.log("validating passwords");
        if(data["password"] !== data["confirm-password"]) {
            form.elements["password"].classList.replace("border-gray-300", "border-red-400");
            form.elements["confirm-password"].classList.replace("border-gray-300", "border-red-400");
            errorRef.current = {
                error: true,
                text: "Incompatible Passwords"
            }
        }

        if(errorRef.current !== null) return errorRef.current;
        
        return errorRef.current;
    }

    return validateForm;
}
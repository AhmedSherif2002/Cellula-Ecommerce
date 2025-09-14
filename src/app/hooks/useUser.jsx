"use client"
import { UserContext } from "../store/UserContext";
import { useContext } from "react";

export const useUser = () => {
    return useContext(UserContext);
}
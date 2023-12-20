import { useContext } from "react"
import { ChangeLanguageContext } from "../contexts/ChangeLanguageContext"

export const useChangeLanguage = () => {
    return useContext(ChangeLanguageContext)
}
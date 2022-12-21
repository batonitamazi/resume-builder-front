import {AuthContext} from '../providers/auth.provider'
import { useContext } from 'react'

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error("useAuth Context must be used inside an AuthContextProvider")
    }
    return context
}
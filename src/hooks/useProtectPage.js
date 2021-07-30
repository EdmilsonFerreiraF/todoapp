import { useEffect } from "react"
import { useRouter } from 'next/router';

import { goToLogin } from '../routes/coordinator';

export const useProtectPage = () => {
    const router = useRouter()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (!token) {
            goToLogin(router)
        }
    }, [router])
}
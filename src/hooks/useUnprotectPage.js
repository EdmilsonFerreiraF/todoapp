import { useEffect } from "react";
import { useRouter } from 'next/router';

import { goToTasks } from '../routes/coordinator';

export const useUnprotectPage = () => {
    const router = useRouter()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            goToTasks(router)
        }
    }, [router])
}
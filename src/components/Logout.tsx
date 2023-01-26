import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '@/firebase';
import { useRouter } from 'next/router';

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            router.push("/");
            alert("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    )
}
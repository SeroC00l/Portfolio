import React from 'react'
import { ArrowUp } from "./icons/ArrowUp";

export const Footer = () => {
    return (
        <>
            <footer className="flex justify-between items-center flex-wrap bg-gray-700">
                <div>
                    <p className="text-white text-2xl">
                        Copyight &copy; 2023 by Alejandro Urrea | All Rights Reserved.
                    </p>
                </div>
                <div>
                    <a href="#home" className="inline-flex">
                        <ArrowUp />
                    </a>
                </div>
            </footer>
        </>
    )
}

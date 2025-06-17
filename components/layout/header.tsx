import React from "react";
import {ModeToggle} from "@/components/mode-toggle";

export const Header = () => {
    return(
        <header className={'border-b flex items-center'}>
            <div className={'w-full max-w-[1440px] px-4 mx-auto flex justify-end'}>
                <ModeToggle/>
            </div>
        </header>
    )
}
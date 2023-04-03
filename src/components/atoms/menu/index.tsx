import { FC } from 'react';
import { MenuItem } from '../menu-item';
import cv from "../../../assets/files/cv.pdf";

export const Menu: FC = () => {
    const moveToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    const closeMenu = () => {
        const menu = document.getElementById("menu");
        menu?.classList.remove("top-0");
        menu?.classList.add("-top-[100%]");
        const btnToggle = document.getElementById("menu-toggle");
        btnToggle?.classList.remove("isOpen");
    }

    const handleOnClick = (callback?: () => void) => {
        closeMenu();
        callback?.();
    }

    return (
        <ul
            id="menu"
            className="flex justify-between py-2 -top-[100%] tablet-down:fixed tablet-down:left-0 tablet-down:z-[200] tablet-down:flex-col tablet-down:items-center tablet-down:justify-start tablet-down:bg-white tablet-down:w-full tablet-down:h-full tablet-down:px-4 tablet-down:pt-16 tablet-down:transition-all tablet-down:duration-500"
        >
            <MenuItem label="Experience" onClick={() => handleOnClick(() => {
                moveToElement('experience');
            })} />

            <MenuItem label="Projects" onClick={() => handleOnClick()} />

            <MenuItem label="Download CV" href={cv} target='_blank' onClick={() => handleOnClick()} />
        </ul>
    );
};

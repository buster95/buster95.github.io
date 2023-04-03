import { FC, HTMLAttributeAnchorTarget } from 'react';

interface Props {
    label: string;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
    onClick?: () => void;
}

export const MenuItem: FC<Props> = ({ label, href, target, onClick }) => {
    return (
        <li
            className="hover:bg-primary hover:text-white rounded-3xl cursor-pointer flex items-center tablet-down:w-full"
            onClick={onClick}
        >
            <a href={href} target={target} className="p-4 w-full">{label}</a>
        </li>
    );
};

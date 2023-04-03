import { FC } from 'react';

interface Props {
    title: string;
    description: string;
    image?: string;
}

export const ProjectCard: FC<Props> = ({ title, description, image }) => {
    return (
        <div className='cursor-pointer bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-500'>
            <img src={image} alt="" />

            <div className='p-4 max-h-[180px]'>
                <h3 className='font-bold text-lg'>{title}</h3>
                <p className='overflow-ellipsis overflow-hidden'>{description}</p>
            </div>
        </div>
    );
};

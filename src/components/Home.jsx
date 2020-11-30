import React from 'react';
import profileImage from '../me.png';
import profileIcon from '../profile-pic.png';

const Home = () => (
    <div className="home">
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src={ profileImage }></img>
                </a>
                <header className="flex items-center justify-between leading-tight p-2 pb-0 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black font-primary" href="#">
                            Software Engineer
                        </a>
                    </h1>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4 pt-0.5">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full w-8" src={ profileIcon }></img>
                        <p className="ml-2 text-sm font-primary">
                            Fabian Soosaithasan
                        </p>
                    </a>
                </footer>
            </article>
        </div>
    </div>
);

export default Home;
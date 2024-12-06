import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <nav className="space-x-4">
                <a href="#home" className="text-gray-700 hover:text-yellow">Home</a>
                <a href="#prayer-times" className="text-gray-700 hover:text-yellow">Gebedstijden</a>
                <a href="#courses" className="text-gray-700 hover:text-yellow">Cursussen</a>
                <a href="#volunteer" className="text-gray-700 hover:text-yellow">Vrijwilligers</a>
                <a href="#live" className="text-gray-700 hover:text-yellow">Live</a>
                <a href="#contact" className="text-gray-700 hover:text-yellow">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
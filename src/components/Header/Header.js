import React from 'react';

const resetSelections = () => {
    window.localStorage.clear();
    window.location.reload();
}
const Header = () => {
    return (
        <div className="container mx-auto pt-6">
            <div className="flex justify-left max-w-screen-sm mx-auto px-10 cursor-pointer" onClick={resetSelections}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg></div>
        </div>

    );
}

export default Header;
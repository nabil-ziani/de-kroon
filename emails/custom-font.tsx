import React from 'react';

export const Font = () => (
    <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
            
            * {
                font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            }
            
            h1, h2, h3, h4, h5, h6 {
                font-weight: 600;
            }
            
            body, p, div, span {
                font-weight: 400;
            }
        `}
    </style>
); 
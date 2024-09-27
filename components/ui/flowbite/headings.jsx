import React from 'react';

export const Heading = {
    h1: ({ children, ...props }) => <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 className="text-4xl font-bold dark:text-white" {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 className="text-3xl font-bold dark:text-white" {...props} >{children}</h3>,
    h4: ({ children, ...props }) => <h4 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" {...props}>{children}</h4>,
    h5: ({ children, ...props }) => <h5 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" {...props}>{children}</h5>,
    h6: ({ children, ...props }) => <h6 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" {...props}>{children}</h6>,
};


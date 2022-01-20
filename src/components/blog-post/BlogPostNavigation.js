import React from 'react';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';

const BlogPostNavigation = ({ additionalClass }) => (
    <nav className={['max-w-7xl mx-auto px-6 md:px-0 flex items-center justify-between', ...additionalClass].join(' ')}>
        <div className="-mt-px w-0 flex-1 flex">
            <a
                href="/"
                className="border-t-2 border-transparent pt-4 pr-1
                inline-flex items-center text-sm md:text-lg font-medium hover:text-secondary"
            >
                <ArrowNarrowLeftIcon className="mr-2 h-5 md:h-7 w-5 md:w-7" aria-hidden="true" />
                Previous post
            </a>
        </div>
        <div className="-mt-px w-0 flex-1 flex justify-end">
            <a
                href="/"
                className="border-t-2 border-transparent pt-4 pl-1
                inline-flex items-center text-sm md:text-lg font-medium hover:text-secondary"
            >
                Next post
                <ArrowNarrowRightIcon className="ml-2 h-5 md:h-7 w-5 md:w-7" aria-hidden="true" />
            </a>
        </div>
    </nav>
);

export default BlogPostNavigation;

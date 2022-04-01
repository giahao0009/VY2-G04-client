import React from 'react';
import {Link, useResolvedPath, useMatch} from 'react-router-dom';

function CustomLink({children, to, ...props}){
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    let cl = props.className + " active";
    return (
        <div>
        <Link
            to={to}
            {...props}
            className={match ? cl : props.className}
        >
            {children}
        </Link>
        </div>
    )
}

export default CustomLink;
import { NavLink } from 'react-router-dom';

function Link(props) {
    const { children, to, type, className } = props
    return (
        type === 'a'
            ? <a className={className} href={to} >{children}</a>
            : <NavLink className={className} to={to} >{children}</NavLink>
    );
}

Link.defaultProps = {
    type: 'a'
}

export default Link;
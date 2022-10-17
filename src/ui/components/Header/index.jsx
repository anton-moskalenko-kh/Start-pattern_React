import Link from "../Link";
import {routers} from "../../../engine/config/links";

//Style
import {useStyle} from "./style";

function Header() {
    const classes = useStyle()

    return (
        <header>
            <div className={classes.logo}>

            </div>
            <div>
                <Link to={routers.main} type="Navlink">First</Link>
                <Link to={routers.example} type="Navlink">Second</Link>
            </div>
        </header>
    )
}

export default Header
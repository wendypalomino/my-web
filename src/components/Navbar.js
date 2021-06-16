import logo from '../images/logo.svg'
import topFigure from '../images/topFigure.svg'

export default function Navbar() {
    return (
        <nav>
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <span>Vanessa Palomino</span>
            </div>
            <div className="top-figure">
                <img src={topFigure} alt="topFigure" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

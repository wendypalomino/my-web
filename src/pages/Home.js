import dots from '../images/dots.svg'
import backgroundFigure from '../images/backgroundFigure.svg'
import profilePhoto from '../images/profilePhoto.png'
import leftCornerFigure from '../images/leftCornerFigure.svg'
import circle from '../images/circle.svg'
import rombo from '../images/rombo.svg'
import Navbar from "../components/Navbar";


export default function Home() {

    return (
        <>
            <div className="container-home">
                <div className="nav">
                    <Navbar />
                </div>
                <div className="left">
                    <div className="dots">
                        <img src={dots} alt="dots" />
                    </div>
                    <div className="leftCorner-figure">
                        <img src={leftCornerFigure} alt="leftCornerFigure" />
                    </div>
                </div>
                <div className="center">
                    <h1><span>Hi! I'm Vanessa -</span><br />Full Stack Web<br />  Developer</h1>
                    <div>
                        <button className="btn">
                            Check my projects
                        </button>
                    </div>
                    <div className="circle">
                        <img src={circle} alt="circle" />
                    </div>

                </div>
                <div className="right">
                    <div className="rombo">
                        <img src={rombo} alt="rombo" />
                    </div>
                    <div className="background-figure">
                        <img src={backgroundFigure} alt="backgroundFigure" />
                    </div>
                    <div className="background-figure">
                        <img src={profilePhoto} alt="backgroundFigure" />
                    </div>
                </div>
            </div>
        </>
    )
}

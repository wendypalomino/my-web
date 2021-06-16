import dotsAbout from '../images/dotsAbout.svg'
import passionate from '../images/passionate.svg'
import circle from '../images/circle.svg'
import rombo from '../images/rombo.svg'




export default function About() {
    return (
        <>
        <div className="container-about">          
            <div className="about">
                <div className="title-about">
                    <div className="circle-about">
                        <img src={rombo} alt="circle" />
                    </div>
                    <p className="title">About Me</p>
                </div>
                <div className="passionate">
                    <img src={passionate} alt="passionate" />
                </div>

            </div>
            <div className="dots-about">
                    <img src={dotsAbout} alt="circle" />
            </div>
            <div className="about-content">

                <div className="content">
                    <p>After spending many years working in the banking system, I've realized that something was missing in my life, something
                    that could bring excitement to my work life. That's how I started a new amazing journey in my profesional path and became a Web developer,
                    who enjoys coding and learning new technologies.
                    </p>
                    <div>
                        <button className="btn">
                            Download my CV
                     </button>
                    </div>

                </div>
            </div>
        </div>
        <div>
        <div className="about">
                <div className="title-about">
                    <div className="circle-about">
                        <img src={circle} alt="circle" />
                    </div>
                    <p className="title">Skills</p>
                </div>
                

            </div>
        </div>
        </>
    )
}

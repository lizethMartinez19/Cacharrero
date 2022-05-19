import car1Image from '../assets/images/carrousel1.png'
import car2Image from '../assets/images/carrousel2.png'
import car3Image from '../assets/images/carrousel3.png'
const Carrousel=()=>(
    <div id="carouselExampleControls" className="imgcarrosuel carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="w-100" src={car1Image} alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={car2Image} alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={car3Image} alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block">
                </div>
            </div>
        </div>
    </div>
)

export default Carrousel
import fashion from './images/fashion.jpg'
import Accessories from './images/Accessories.jpg'

const Carousel = () => {
    
    return ( 
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={fashion} alt="First slide" style={{height: "90vh"}}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h6 style={{fontSize: "60px", fontWeight: "300"}}>FASHION</h6>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Accessories} alt="Second slide" style={{height: "90vh"}}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h6 style={{fontSize: "60px", fontWeight: "300"}}>ACCESSORIES</h6>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={fashion} alt="Third slide" style={{height: "90vh"}}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h6 style={{fontSize: "60px", fontWeight: "300"}}>ELECTRONICS</h6>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
 
export default Carousel;
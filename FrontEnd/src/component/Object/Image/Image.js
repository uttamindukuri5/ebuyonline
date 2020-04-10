import React from 'react'; 

export default props => {
    return (
        <div  id="carouselExampleInterval" className="carousel slide border" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ props.img } className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://www.nationalgeographic.com/content/dam/animals/2018/10/sloth-energy/01-sloth-energy-nationalgeographic_1046424.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://c.tadst.com/gfx/750w/international-sloth-day.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};
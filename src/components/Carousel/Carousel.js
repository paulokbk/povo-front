import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample(props) {
  return (
    <div className="carrousel-container">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://revistapesquisa.fapesp.br/wp-content/uploads/2018/09/012-017_Notas_271-1200px-13.jpg" height={props.height}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Alabama_Hills1-1200px.jpg/800px-Alabama_Hills1-1200px.jpg" height={props.height}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Shoshone_Falls-1200px.jpeg" height={props.height}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://revistapesquisa.fapesp.br/wp-content/uploads/2018/09/012-017_Notas_271-1200px-13.jpg" height={props.height}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
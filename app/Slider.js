
const Home = () => {
    return (
      <div className="container-fluid">
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          style={{ height: '500px' }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://static.vecteezy.com/system/resources/previews/028/793/242/non_2x/e-commerce-shopping-cart-with-multiple-products-a-sunlit-abstract-background-e-commerce-concept-ai-generative-free-photo.jpg"
                alt="First slide"
                // className="d-block w-100"
                style={{ height: '500px' ,width:'1930px',marginLeft:'50px'}}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://static.vecteezy.com/system/resources/previews/020/844/893/original/carousel-template-social-media-post-design-set-of-instagram-carousel-post-editable-instagram-carousel-template-free-vector.jpg"
                alt="Second slide"
                // className="d-block w-100"
                style={{ height: '500px' ,width:'1930px',marginLeft:'50px'}}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.jerseyvillelibrary.org/site-assets/images/facebook-live-caroling-for-website-carousel.png/@@images/image.png"
                alt="Third slide"
                // className="d-block w-100"
                style={{ height: '500px' ,width:'1930px',marginLeft:'50px'}}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </div>
    );
  };
  
  export default Home;
  
  
  
  
  
import logo from './logo.svg';
import './App.css';
import Login from './Login';

function App() {
  return (
    <div className="App">

      <div className='header'>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">EShop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Products</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Branches
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Mumbai</a></li>
                    <li><a class="dropdown-item" href="#">Delhi</a></li>

                    <li><a class="dropdown-item" href="#">Patna</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link ">Contact Us</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      
      <div className='products'>
        <div class="card" >
          <img className='prodImg' src="https://tse2.mm.bing.net/th?id=OIP.rH1ssomuw42FE9LrUwNBCwHaE8&pid=Api&P=0&w=258&h=172" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Makup Items</h5>
              <p class="card-text">Lakme</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
              
            </div>
        </div>
        <div class="card" >
          <img className='prodImg' src="https://tse2.mm.bing.net/th?id=OIP.rH1ssomuw42FE9LrUwNBCwHaE8&pid=Api&P=0&w=258&h=172" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Makup Items</h5>
              <p class="card-text">Lakme</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
              
            </div>
        </div>
        <div class="card" >
          <img className='prodImg' src="https://tse2.mm.bing.net/th?id=OIP.rH1ssomuw42FE9LrUwNBCwHaE8&pid=Api&P=0&w=258&h=172" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Makup Items</h5>
              <p class="card-text">Lakme</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
              
            </div>
        </div>
        <div class="card" >
          <img className='prodImg' src="https://tse2.mm.bing.net/th?id=OIP.rH1ssomuw42FE9LrUwNBCwHaE8&pid=Api&P=0&w=258&h=172" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Makup Items</h5>
              <p class="card-text">Lakme</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
              
            </div>
        </div>
        <div class="card" >
          <img className='prodImg' src="https://tse2.mm.bing.net/th?id=OIP.rH1ssomuw42FE9LrUwNBCwHaE8&pid=Api&P=0&w=258&h=172" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Makup Items</h5>
              <p class="card-text">Lakme</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
              
            </div>
        </div>
        <div class="card" >
          <img className='prodImg' src="https://tse2.mm.bing.net/th?id=OIP.rH1ssomuw42FE9LrUwNBCwHaE8&pid=Api&P=0&w=258&h=172" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Makup Items</h5>
              <p class="card-text">Lakme</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
              
            </div>
        </div>
        <div class="card" >
          <img className='prodImg' src="https://tse2.mm.bing.net/th?id=OIP.rH1ssomuw42FE9LrUwNBCwHaE8&pid=Api&P=0&w=258&h=172" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Makup Items</h5>
              <p class="card-text">Lakme</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
              
            </div>
        </div>
        <div class="card" >
          <img className='prodImg' src="https://tse2.mm.bing.net/th?id=OIP.rH1ssomuw42FE9LrUwNBCwHaE8&pid=Api&P=0&w=258&h=172" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Makup Items</h5>
              <p class="card-text">Lakme</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
              
            </div>
        </div>

      </div>
      <div className='banner'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://tse2.mm.bing.net/th?id=OIP.5ie2mEHcqZg89nTb_toDcQHaEp&pid=Api&P=0&w=279&h=174" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://tse1.mm.bing.net/th?id=OIP.grhNDUkImMmGd28tsWb30AHaE8&pid=Api&P=0&w=250&h=166" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div>

<footer class="page-footer font-small teal pt-4">


  <div class="container-fluid text-center text-md-left">


    <div class="row">


      <div class="col-md-6 mt-md-0 mt-3">


        <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
          repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
          harum esse fugiat. Itaque, culpa?</p>

      </div>

      <div class="col-md-6 mb-md-0 mb-3">


        <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
          commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
          excepturi hic.</p>

      </div>


    </div>


  </div>



  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/"> MDBootstrap.com</a>
  </div>


</footer>

      </div>
    </div>
  );
}

export default App;

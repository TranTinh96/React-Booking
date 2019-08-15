class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer class="footer">
         <div class="footer-header footer-color fs-16 py-4 container-fluid">
          <div class="text-right">
            <div class="social-icons-list">
              <a href="http://www.facebook.com" class="m-r-10"><i class="fa fa-facebook"></i></a>
              <a href="http://www.twitter.com" class="m-r-10" ><i class="fa fa-twitter"></i></a>
              <a href="http://www.linkedin.com"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
          <div class="footer-content row container-fluid text-center">
              <div class="col-md-2 col-sm-12 p-t-30 ">
                <img src="images/PC/1.jpg" height="200px" width="100%"></img>
              </div>
              <div class="col-md-2 col-sm-6 p-t-30">
                <img src="images/PC/2.jpg" height="200px" width="100%"></img>
              </div>
              <div class="col-md-2 col-sm-6 p-t-30">
                <img src="images/PC/3.jpg" height="200px" width="100%"></img>
              </div>
              <div class="col-md-2 col-sm-12 p-t-30">
                <img src="images/PC/4.jpg" height="200px" width="100%"></img>
              </div>
              <div class="col-md-2 col-sm-6 p-t-30">
                <img src="images/PC/5.jpg" height="200px" width="100%"></img>
              </div>
              <div class="col-md-2 col-sm-6 p-t-30">
                <img src="images/PC/6.jpg" height="200px" width="100%"></img>
              </div>
          </div>
          <div class="footer-footer fs-15 m-t-30">
            <div class="footer-copyright text-center py-4 footer-color ">© 2019 Copyright:1513516@hcmut.edu.vn </div>
          </div>

        </footer>
      </div>

    )
  }
}

function App() {
  return (
    <div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('footer'));


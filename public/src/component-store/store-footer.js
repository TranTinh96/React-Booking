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


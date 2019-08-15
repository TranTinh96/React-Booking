const arrHotGirl = [
  { id: 1, img: 'images/1.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  { id: 2, img: 'images/2.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  { id: 3, img: 'images/3.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  { id: 4, img: 'images/4.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  { id: 5, img: 'images/5.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  { id: 6, img: 'images/6.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  { id: 7, img: 'images/7.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  { id: 8, img: 'images/8.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  { id: 9, img: 'images/9.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  { id: 10, img: 'images/10.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  { id: 11, img: 'images/11.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  { id: 12, img: 'images/12.jpg', title: "Nguyễn Dương Khả Tú", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }
]

//Add new Component Hotgirl
class Add extends React.Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6  col-xl-3 col-lg-3 m-t-30">
        <div className="card">
          <img src={this.props.children} atl="Hot Girl" height="350px" width="100%"></img>
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.content}</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
    )
  }
}


// Content Hot Girl
class Content extends React.Component {

  render() {

    const ND_Girl = arrHotGirl.map((girl) => {
      return <Add key={girl.id} title={girl.title} content={girl.content}>{girl.img}</Add>
    });
    return (
      <div className="row">
            {ND_Girl}
      </div>
    )
  }
}







ReactDOM.render(<Content />, document.getElementById('content'));


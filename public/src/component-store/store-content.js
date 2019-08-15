const arrIphone=[
  { id: 1, img: 'images/SP/6s.png', title: "Iphone 6s",price: "9.900.000 VNĐ" },
  { id: 2, img: 'images/SP/7.png', title: "Iphone 7",price:"11.900.000 VNĐ" },
  { id: 3, img: 'images/SP/8plus.png', title: "Iphone 8 Plus",price: "18.900.000 VNĐ" },
  { id: 4, img: 'images/SP/x.png', title: "Iphone X",price: "21.900.000 VNĐ" },
  { id: 5, img: 'images/SP/xr.png', title: "Iphone Xr",price: "21.900.000 VNĐ" },
  { id: 6, img: 'images/SP/xs-max.png', title: "Iphone Xs Max",price: "35.900.000 VNĐ" }
]



//Add new Component Smart Phone
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.Price=this.Price.bind(this);
  };
  Price(name,price){
    alert(name +":"+price);
  }
  render() {
    return (
      <div className="col-md-6 col-sm-6 col-12 col-xl-4 col-lg-4 m-t-30 smart-c">
        <div className="card ">
          <img class="p-t-20 p-b-20" src={this.props.children} atl="Hot Girl" height="400px" width="350px"></img>
          <div className="card-body card-color">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text"><b>{this.props.price}</b></p>
            <hr></hr>
            <button className="btn btn-primary fs-12 btn-w" onClick={() => { this.Price(this.props.title,this.props.price)}}>Mua</button>
          </div>
        </div>
      </div>
    )
  }
}


// Content 
class Content extends React.Component {

  render() {
    const Iphone = arrIphone.map((iphone) => {
      return <Add key={iphone.id} title={iphone.title} price={iphone.price}>{iphone.img}</Add>
    });
    return (
      <div className="row justify-content-center">
            {Iphone}

      </div>
    )
  }
}







ReactDOM.render(<Content />, document.getElementById('content'));


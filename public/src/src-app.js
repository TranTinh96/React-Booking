
/*--------------------------------------------WELCOME--------------------------------------------*/

function Welcome(props) {
  return <div>
    <h1>Hello, {props.name}</h1>
    <p>{props.children}</p>
  </div>

}
//Hiện DateTime
function Tick() {
  return <div>
    <h2>Clock</h2>
    <p>It is : {new Date().toLocaleDateString()}</p>
  </div>
}

function getName(name) {
  alert(name);
}

//ObjectList
function Blog(props) {
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <hr />
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

/*--------------------------------------------COMPONENT--------------------------------------------*/
//In ra Girl
class Girl extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Diễm Quỳnh</h1>
      </div>
    );
  }
}
//hien children
class NodeChildren extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.children}</h4>
      </div>
    );
  }
}

//Button Handling Events
class ActionLink extends React.Component {

  render() {
    return (
      <div>
        <h4>Name :{this.props.name}</h4>
        <p>Age :{this.props.age}</p>
        <button class="btn btn-primary btn-small" onClick={() => { getName(this.props.name) }} >Detail</button>
        <hr></hr>
      </div>
    )
  }
}


//State
class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TongHocVien: this.props.hocvien
    };
    this.addStudent = this.addStudent.bind(this);
  }
  addStudent() {
    this.state.TongHocVien = parseInt(this.state.TongHocVien) + 1;
    this.setState(this.state);
  }
  render() {
    return (
      <div>
        <h4>Khóa học {this.props.khoahoc}</h4>
        <p> Số học viên :{this.state.TongHocVien}</p>
        <button class="btn btn-primary btn-small" onClick={this.addStudent} >Add</button>
      </div>
    )
  }
}


//Input
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button class="btn btn-primary btn-small" type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

//Thay doi hinh
class ChangImg extends React.Component {

  onChangeImg() {
    this.state.hinh = this.state.hinh % 11 + 1;
    this.setState(this.state);
  }

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <img src={"images/" + this.state.hinh + '.jpg'} />
      </div>
    )
  }
  componentDidMount() {
    setInterval(this.onChangeImg, 1000);
  }
}

//List
class List extends React.Component {

  myadd() {
    this.state.arr.push("Lê Quỳnh Như");
    this.setState(this.state);
  }

  constructor(props) {
    super(props);
    this.state = {
      arr: ['Mỹ Hiệp', "Nguyễn Dương Khả Tú", "Diễm Quỳnh"]
    };
  }

  render() {
    return (
      <div>
        <button class="btn btn-primary btn-small" onClick={this.myadd}>Add</button><hr />
        {
          this.state.arr.map(function (node, index) {
            return <NodeChildren key={index}>{node}<hr /></NodeChildren>
          })
        }
      </div>
    )
  }
}


/*-----------------------------------CALL FUNCTION/COMPONENT-----------------------------------*/
function App() {
  return (
    <div>
      <Blog posts={posts} />
    </div>
  );
}

/*--------------------------------------------MAIN--------------------------------------------*/
ReactDOM.render(
  <App />, document.getElementById('root')
);



var list;
/*
*
*
*Form Repair
*
*
*/
class FormRE extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      val: this.props.children
  
    })
    this.handleChange = this.handleChange.bind(this);
  }
   //Input
   handleChange(event) {
    list.setState({ val: event.target.value });
  };
  //Save
  Save(name,id) {
   $.post("/save",{id:id,val:list.state.val} ,
     function (data) {
      list.setState({ arrGirl: data });
     },
   );
   list.setState({isRepair:false  });
   document.getElementById(list.state.id_).style.display="inline";
   ReactDOM.unmountComponentAtNode(document.getElementById(list.state.id_+'form'));

  };

  //Cancel
  Cancel(id) {
    list.setState({isRepair:false});
    document.getElementById(list.state.id_).style.display="inline";
    ReactDOM.unmountComponentAtNode(document.getElementById(list.state.id_+'form'));
  };
  render() {
    return (
      <div >
        <input type="text" onChange={this.handleChange}  defaultValue={this.props.children} />
        <div class="p-t-8">
          <button className="btn  btn-sm mt-2 mb-4 m-r-10" onClick={() => { this.Save(this.props.children,this.props.id) }}><i class="fa fa-check"></i></button>
          <button class="btn btn-sm  mt-2 ml-2 mb-4" onClick={() => { this.Cancel(this.props.id) }}><i class="fa fa-ban"></i></button>
          </div>
      </div>
    )
  }
}


/*
*
*
* Content
*
*
*/
class NodeChildren extends React.Component {

  constructor(props) {
    super(props);
    this.setState({
      isRepair: false,
      id_:undefined
    })

  }

  //Delete Girl
  deleAdd(name) {
    $.post("/deleteGirl", { note: name },
      function (data) {
        list.setState({ arrGirl: data })
      },
    );
  }

  //Repair Girl
  RepAdd(name) {
    list.state.isRepair = true;
    list.state.id_=name;
    if(list.state.isRepair){
      ReactDOM.render(<FormRE id={this.props.id}>{this.props.children}</FormRE>, document.getElementById(name+'form'));
      document.getElementById(name).style.display="none";
    }
  }

  render() {
    return (
      <div class="div-note p-b-20">
        <div id={this.props.id+"form"}>
        </div>
        <div id={this.props.id} >
          <p>{this.props.children}</p>
          <button class="btn btn-sm m-r-10" onClick={() => { this.deleAdd(this.props.children) }}><i class="fa fa-trash-o"></i></button>
          <button class="btn btn-sm ml-2" onClick={() => { this.RepAdd(this.props.id) }}><i class="fa fa-cog"></i></button>
        </div>
      </div>
    )
  }
  
}



class Node extends React.Component {
  render() {
    return (
      <div className="div-note">
        {this.props.children}
      </div>
    )
  }
}



/*-----------------------------------CALL FUNCTION/COMPONENT-----------------------------------*/

/*
*
* Add new Girl bên phía Client
*
*
*/
class InputDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleChange(event) {
    list.setState({ value: event.target.value });
  };

  ClickAddGirl() {
    if (list.state.value) {
      list.setState({
        arrGirl: list.state.arrGirl.concat(list.state.value),
        isToggle: false
      });
    } else {
      list.setState({
        isToggle: false
      });
    }
    ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));

  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button class="btn btn-primary btn-sm" onClick={this.ClickAddGirl}>Send</button>
      </div>
    )
  }
}

/*
*
*
* Add new Girl bên phía Server
*
*
*/
class InputServer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleChange(event) {
    list.setState({ value: event.target.value });
  };
  ClickAddGirl() {
    if (list.state.value) {
      //Gửi thông tin lên serve
      $.post("/add", { note: list.state.value },
        function (data) {
          list.setState({ arrGirl: data })
        }
      );
    } else {
      list.setState({
        isToggle: false
      });
    }
    ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));

  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button className="btn btn-primary btn-sm" onClick={this.ClickAddGirl}>Send</button>
      </div>
    )
  }
}



class InputNo extends React.Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}


/*
*
* Xử lí Show/Hide cho form infomation arrGirl
*
*
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    list = this;
    this.state = {
      isToggle: false,
      arrGirl: []
    };
    this.addClick = this.addClick.bind(this);
  }



  //Thêm Girl
  addClick() {
    this.state.isToggle = !this.state.isToggle;
    if (this.state.isToggle == true) {
      ReactDOM.render(
        <InputServer />, document.getElementById('div-add'));
    }
    else {
      ReactDOM.render(
        <InputNo />, document.getElementById('div-add'));
    }
    this.setState(this.state);
  };


  render() {
    return (
      <div>
        <button className="btn btn-primary btn-sm" onClick={this.addClick}>{this.state.isToggle ? 'ON' : 'OFF'}</button>
        <div id="div-add"></div>
        <div className="div-list">
          {
            this.state.arrGirl.map(function (node, index) {
              return <NodeChildren key={index} id={index}>{node}</NodeChildren>
            })}
        </div>
      </div>
    )
  }

  componentDidMount() {
    var that = this;
    $.post("/getNode",
      function (data) {
        that.setState({ arrGirl: data });
      },
    );
  }

}


/*--------------------------------------------MAIN--------------------------------------------*/
ReactDOM.render(
  <App />, document.getElementById('root')
);



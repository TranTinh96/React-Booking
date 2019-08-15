class Form extends React.Component {
  render() {
    return (
      <div className="tab-right">
        <button type="button" className="btn btn-info fs-15" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus"></i></button>

        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header modal-header-t">Add New Tag</div>
              <div className="modal-body modal-body-t m-r-15 m-l-15 fs-16">
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

}



function App() {
  return (
    <div>
      <Form />
    </div>

  );
}

ReactDOM.render(<App />, document.getElementById('add'));


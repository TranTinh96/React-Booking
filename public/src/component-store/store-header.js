class Header extends React.Component {
     render() {
          return (
               <div className="header fs-15 header-menu">
               <div class="logo-container">
                    <a href="../" class="logo">
                         <img src="assets/images/girl.jpg" height="35" alt="JSOFT Admin" />
                    </a>
                    <div class="visible-xs toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
                         <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
                    </div>
                    
               </div>
          </div>
          )
     }

}

ReactDOM.render(<Header />, document.getElementById('head'));


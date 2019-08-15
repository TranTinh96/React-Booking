class Intro extends React.Component {
  render() {
    return (
      <div>
        <div class="nav-scroller" >
          <nav class="nav d-flex justify-content-between fs-15 ">
            <a class="p-3 " href="#"><b>Apple</b></a>
            <a class="p-3 " href="#"><b>Sam Sung</b></a>
            <a class="p-3 " href="#"><b>Oppo</b></a>
            <a class="p-3 " href="#"><b>Xiaomi</b></a>
            <a class="p-3 " href="#"><b>Vivo</b></a>
            <a class="p-3 " href="#"><b>Huawei</b></a>
            <a class="p-3 " href="#"><b>ReadMe</b></a>
            <a class="p-3 " href="#"><b>Vsmart</b></a>
            <a class="p-3 " href="#"><b>Nokia</b></a>
            <a class="p-3 " href="#"><b>Mobell</b></a>
            <a class="p-3 " href="#"><b>Asus</b></a>
            <a class="p-3 " href="#"><b>BlackBery</b></a>
          </nav>
        </div>
        
        <div class="nav-scroller nav-color" >
          <nav class="nav d-flex justify-content-between fs-14 ">
            <a class="p-3 nav-color" href="#"><b>Chọn mức giá</b></a>
            <a class="p-3 nav-color" href="#">Dưới 2 triệu</a>
            <a class="p-3 nav-color" href="#">Từ 2-4 triệu</a>
            <a class="p-3 nav-color" href="#">Từ 7-13 triệu</a>
            <a class="p-3 nav-color" href="#">Trên 13 Triệu</a>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
              <label class="form-check-label primary" for="inlineCheckbox1">New</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
              <label class="form-check-label primary" for="inlineCheckbox1">Trả góp 0%</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
              <label class="form-check-label primary" for="inlineCheckbox1">Chỉ bán Online</label>
            </div>
            <a class="p-3 nav-color" href="#">Tính năng</a>
            <a class="p-3 nav-color" href="#">Sắp xếp</a>
          </nav>
        </div>
      </div>
    );
  }

}



ReactDOM.render(<Intro />, document.getElementById('intro'));


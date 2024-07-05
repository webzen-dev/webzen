const HomeSamples = () => {
  return (
    <div className="HomeSamples">
      <h3>Samples</h3>
      <div className="Samples">
        <a href="https://webzen-dev.github.io/zenchat" className="SampleItem">
          <div className="lineItem"></div>
          <div className="SampleItemCaption">
            React Chat App . this project use Zusten for state management and
            use fire base use for database and save user and user name
          </div>
          <div className="SampleItemImage">
            <span className="leftSpan">1</span>
            <img src="./zenchat.png" alt="" />
          </div>
          <div className="SampleItemTitle"> React Chat App </div>
        </a>

        <a
          href="https://webzen-dev.github.io/react_todo"
          className="SampleItem"
        >
          <div className="lineItem"></div>
          <div className="SampleItemTitle">Todo React App </div>
          <div className="SampleItemImage">
            <span className="rightSpan">2</span>
            <img src="./todo.png" alt="" />
          </div>
          <div className="SampleItemCaption">
            React Todo App , for state management i Use React-Redux
          </div>
        </a>

        <div className="SampleItem">
          <div className="lineItem"></div>
          <div className="SampleItemCaption">
            Generate Text or Url to Qr code , maked by html css js
          </div>
          <div className="SampleItemImage">
            <span className="leftSpan">3</span>
            <img src="./qr.png" alt="" />
          </div>
          <div className="SampleItemTitle"> Qr Genrator</div>
        </div>
      </div>
    </div>
  );
};

export default HomeSamples;

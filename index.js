const Button = (props) => {
  //  Write your code here.
  const { buttonName, className } = props;
  return <button className={className}> {buttonName} </button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button buttonName="Like" className="button1" />
      <Button buttonName="Comment" className="button2" />
      <Button buttonName="Share" className="button3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

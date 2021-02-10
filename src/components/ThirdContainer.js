import Bird1Image from "./../images/birds1.jpg";
import Bird2Image from "./../images/birds2.jpg";
import Bird3Image from "./../images/birds3.jpg";

const ThirdContainer = () => {
  return (
    <div className="container-fluid bg-3 text-center" id="thirdContainer">
      <h3 className="margin">Where To Find Me?</h3>
      <br />
      <div className="row">
        <div className="col-sm-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img
            src={Bird1Image}
            className="img-responsive margin"
            style={{ width: "100%" }}
            alt="Image"
          />
        </div>
        <div className="col-sm-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img
            src={Bird2Image}
            className="img-responsive margin"
            style={{ width: "100%" }}
            alt="Image"
          />
        </div>
        <div className="col-sm-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img
            src={Bird3Image}
            className="img-responsive margin"
            style={{ width: "100%" }}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;

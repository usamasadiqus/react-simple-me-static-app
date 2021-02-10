const FirstContainer = () => {
  return (
    <div className="container-fluid bg-1 text-center">
      <h3 className="margin">Who Am I?</h3>
      <img
        src="https://i.ibb.co/JtbyPKy/bird.jpg"
        className="img-responsive img-circle margin"
        style={{ display: "inline" }}
        alt="Bird"
        width={350}
        height={350}
      />
      <h3>I'm an adventurer</h3>
    </div>
  );
};

export default FirstContainer;

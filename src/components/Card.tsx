const Card = () => {
  return (
    <>
    <div className="card-container">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">React Day 1</h5>
          <h6>So basically today we learned the following:</h6>
          <p className="card-text">
            We learned how to practice basic React components. Then we played
            around with State and Props. Eventually I understood that they are
            different things, and got a better grasp on how to use them
            (deconstruct the props). And also props are immutable.
          </p>
          <a href="#" className="btn btn-danger">
            ✍(◔◡◔){" "}
          </a>
        </div>
      </div>
      </div>
    </>
  );
};
export default Card;

import "./style.css";
import Button from "../Button/Button";
import Reason from "../Reason/Reason";

const Main = () => {
  return (
    <main className="">
      <div className="hero">
        <div className="hero-img">
          <img src="/assets/image-mockups.png" alt="phones" />
        </div>
        <div className="hero-txt">
          <div className="words">
            <h1 style={{ marginTop: "0px" }}>
              Next generation digital banking
            </h1>
            <p className="">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <Button />
          </div>
        </div>
      </div>
      <section className="bdr s-reasons">
        <div className="section">
          <div className="cont">
            <div className="heading">
              <h2>Why choose Easybank?</h2>
              <p>
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>
            <div className="heading-empty desktop"></div>
          </div>
          <div className="reasons">
            {/* use a for loop to loop over the components */}
            <div className="reason-cont bdr"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;

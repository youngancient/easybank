import "./style.css";
import Button from "../Button/Button";
import Reason from "../Reason/Reason";

const Main = () => {
  const reasonData = [
    { id: 1, alt: 'icon-online' ,  imgSrc: '/assets/icon-online.svg', reasonHead : 'Online Banking', text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'},
    { id: 2, alt: 'icon-budgeting' ,  imgSrc: '/assets/icon-budgeting.svg', reasonHead : 'Simple Budgeting', text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'},
    { id: 3, alt: 'icon-onboarding' ,  imgSrc: '/assets/icon-onboarding.svg', reasonHead : 'Fast Onboarding', text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'},
    { id: 4, alt: 'icon-api' , imgSrc: '/assets/icon-api.svg', reasonHead : 'Open API', text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'},
  ]

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
              <p className="">
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>
            <div className="heading-empty desktop"></div>
          </div>
          <div className="reasons">
            {/* use a for loop to loop over the components */}
            {reasonData.map((data)=>(
              <div className="reason-cont bdr" key={data.id}>
                <Reason imgSrc={data.imgSrc} reasonHead={data.reasonHead} text={data.text} alt={data.alt} />
              </div>       
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;

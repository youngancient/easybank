import "./style.css";
import Button from "../Button/Button";
import Reason from "../Reason/Reason";
import Article from "../Article/Article";


const Main = () => {
  const reasonData = [
    { id: 1, alt: 'icon-online' ,  imgSrc: '/assets/icon-online.svg', reasonHead : 'Online Banking', text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'},
    { id: 2, alt: 'icon-budgeting' ,  imgSrc: '/assets/icon-budgeting.svg', reasonHead : 'Simple Budgeting', text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'},
    { id: 3, alt: 'icon-onboarding' ,  imgSrc: '/assets/icon-onboarding.svg', reasonHead : 'Fast Onboarding', text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'},
    { id: 4, alt: 'icon-api' , imgSrc: '/assets/icon-api.svg', reasonHead : 'Open API', text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'},
  ]
  const articleData = [
    { id: 1, alt: 'currency' , author: 'By Claire Robinson',  imgSrc: '/assets/image-currency.jpg', heading : 'Receive money in any currency with no fees ', text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'},
    { id: 2, alt: 'restuarant' , author: 'By Wilson Hutton',  imgSrc: '/assets/image-restaurant.jpg', heading : 'Treat yourself without worrying about money', text: ' Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'},
    { id: 3, alt: 'plane' , author: 'By Wilson Hutton',  imgSrc: '/assets/image-plane.jpg', heading : 'Take your Easybank card wherever you go', text: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'},
    { id: 4, alt: 'confetti' , author: 'By Claire Robinson', imgSrc: '/assets/image-confetti.jpg', heading : 'Our invite-only Beta accounts are now live!', text: '  After a lot of hard work by the whole team, we’re excited to launch our closed beta.It’s easy to request an invite through the site ...'},
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
      <section className="s-reasons">
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
              <div className="reason-cont" key={data.id}>
                <Reason imgSrc={data.imgSrc} reasonHead={data.reasonHead} text={data.text} alt={data.alt} />
              </div>       
            ))}
          </div>
        </div>
      </section>
      <section className="articles bdr">
          <div className="articles-div">
            <h2>Latest Articles</h2>
            <div className="articles">
              {/* use a for loop to loop over the components */}
              {articleData.map((article) =>(
                <div className="article-cont" key={article.id}>
                  <Article alt={article.alt} imgSrc={article.imgSrc} heading={article.heading} text={article.text} author={article.author} />
                </div>
              ))}
            </div>
          </div>
      </section>
    </main>
  );
};

export default Main;

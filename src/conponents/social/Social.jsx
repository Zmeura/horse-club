import "./social.scss";

function Social() {
  return (
    <div className="social">
      <a
        className="social__link social__link_facebook"
        href="https://www.facebook.com/"
        target="_blank"
      ></a>
      <a
        className="social__link social__link_twitter"
        href="https://www.twitter.com/"
        target="_blank"
      ></a>
      <a
        className="social__link social__link_instagram"
        href="https://www.instagram.com/"
        target="_blank"
      ></a>
    </div>
  );
}

export default Social;

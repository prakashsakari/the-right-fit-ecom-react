import {footer} from "../../dB/footer"

const Footer = () => {
  
  
  return (
    <footer className="footer d-flex direction-column align-center">
      <p>
        Made with{" "}
        <span role="img" aria-label="Love">
          ❤️
        </span>{" "}
        by Prakash Sakari
      </p>
      <div className="d-flex gap align-center padding-all-16">
        {footer.map(({imgUrl, alt, link}) => {
          return (
            <a
          href={link}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="source-image"
            src={imgUrl}
            alt={alt}
          />
        </a>
          )
        })}
      </div>
    </footer>
  );
};
  
  export { Footer };
  
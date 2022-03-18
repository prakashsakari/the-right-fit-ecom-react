import {footer} from "../../staticData/footer"
const Footer = () => {
    return (
      <footer class="footer d-flex direction-column align-center">
        <p>
          Made with{" "}
          <span role="img" aria-label="Love">
            ❤️
          </span>{" "}
          by Prakash Sakari
        </p>
        <div class="d-flex gap align-center padding-all-16">
          {footer.map(({imgUrl, alt, link}) => {
            return (
              <a
            href={link}
            class="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="source-image"
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
  
import React from "react";
import "../styles/Authors.css";

function Authors() {
  return (
    <section className="authors">
      <div className="authors-header">
        <h1>Authors & Contributors</h1>
        <p>
          MAKTABA MART welcomes educators, researchers, and writers to contribute
          to our publishing mission. Submit proposals and join our network of
          knowledge creators.
        </p>
      </div>

      <div className="authors-grid">
        <div className="author-card">
          <h3>Become an Author</h3>
          <p>
            Share your expertise by writing for our Premier Revision Series and
            academic catalogue.
          </p>
          <a href="#">Submit Proposal →</a>
        </div>

        <div className="author-card">
          <h3>Contributor Opportunities</h3>
          <p>
            Collaborate on curriculum guidance, articles, and digital learning
            resources.
          </p>
          <a href="#">Join as Contributor →</a>
        </div>
      </div>
    </section>
  );
}

export default Authors;

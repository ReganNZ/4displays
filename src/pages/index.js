import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Index({ data }) {

  return (
    <div>
      <section className="section">
        <div className="container">
         
        </div>
      </section>
      <script dangerouslySetInnerHTML={{ __html:
        `if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }`
        }}/>
      </div>
    );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
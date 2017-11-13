import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class IndexPage extends React.Component {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }

  render() {
    const { data } = this.props;
   // const { edges: posts } = data.allMarkdownRemark || null;
    return (
      <section className="section">
        <Helmet>
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
        <div className="container">
     
        </div>
      </section>
    );
  }
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

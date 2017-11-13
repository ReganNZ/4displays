import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <section className="section">
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <div className="container content">
        <h1 className="title is-size-2 has-text-info is-bold-light">{post.frontmatter.title}</h1>
        <div>price: </div>
     
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </section>
  );
}

export const productsPageQuery = graphql`
  query ProductsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
      
      }
    }
  }
`;

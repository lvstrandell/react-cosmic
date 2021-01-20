import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';

import PageTitle from '../../components/PageTitle';
import SiteNavigation from '../../components/SiteNavigation';
import Container from '../../components/Container';
import PostLink from '../../components/PostLink';

function BlogListContainer() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const client = new Cosmic();
    const bucket = client.bucket({
      slug: process.env.BUCKET_SLUG,
      read_key: process.env.READ_KEY
    });

    bucket.getObjects({
      type: 'blog-posts',
      props: 'slug,title,content',
      limit: 20,
      sort: '-created_at'
    })
      .then(data => {
        setPageData(data)
      })
      .catch(error => {
        console.error(error);
      })

  }, []);
  
  function renderSkeleton() {
    return (
      <p>Laster data...</p>
    )
  };

  function renderPage() {
      return (
        <>
          <SiteNavigation />
          <Container as="main">
            <PageTitle>Mine blogginlegg</PageTitle>
              {pageData.objects.map(item => {
                return(
                  <PostLink
                    url={`/blogg/${item.slug}`}
                    title={item.title}
                    date={`01.0.1.2021`}
                    key={item.slug}
                  />
                )
              })}
          </Container>
        </>
      )
  };

  return (
    <>
      {(pageData === null ? renderSkeleton(): renderPage())}
    </>
  )
};

export default BlogListContainer;
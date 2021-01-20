import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';

import PageTitle from '../../components/PageTitle';
import HomeContent from '../../components/HomeContent';
import SiteNavigation from '../../components/SiteNavigation';
import Container from '../../components/Container';

function ContactContainer() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const client = new Cosmic();
    const bucket = client.bucket({
      slug: process.env.BUCKET_SLUG,
      read_key: process.env.READ_KEY
    });

    bucket.getObject({
      slug: 'kontakta-oss',
      props: 'title,content'
    })
    .then(data => {
      setPageData(data.object)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  function renderSkeleton() {
    return(
      <p>Laster data...</p>
    )
  };

  function renderPage() {
    return(
      <>
        <SiteNavigation />
        <Container as="main">
          <PageTitle>{pageData.title}</PageTitle>
          <HomeContent dangerouslySetInnerHTML={{__html: pageData.content}} />
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

export default ContactContainer;
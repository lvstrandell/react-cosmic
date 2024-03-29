import React, { useState, useEffect, useRef } from 'react';
import Cosmic from 'cosmicjs';
import Mapbox from 'mapbox-gl';
import Plot from 'react-plotly.js';

import PageTitle from '../../components/PageTitle';
import HomeContent from '../../components/HomeContent';
import SiteNavigation from '../../components/SiteNavigation';
import Container from '../../components/Container';

let map = null;

function ContactContainer() {
  const [pageData, setPageData] = useState(null);
  const [chartState, setChartState] = useState({
    data: [{
      x: [1, 2, 3],
      y: [2, 6, 3],
      type: 'scatter',
      mode: 'lines+markers',
      marker: {color: 'red'},
    }],
    layout: {
      width: 600,
      height: 400,
      title: 'Vi tester ut Plotly'
    },
    frames: [],
    config: {}
  });

  const mapElement = useRef(null);
  Mapbox.accessToken = process.env.MAPBOX_API_KEY;

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

  useEffect(() => {
    if (pageData !== null) {
      map = new Mapbox.Map({
        container: mapElement.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 5,
        center: [10.81533, 61.245]
      })
    }
  }, [pageData]);

  function renderSkeleton() {
    return(
      <h1>Laster data...</h1>
    )
  };

  function renderPage() {
    return(
      <>
        <SiteNavigation />
        <Container as="main">
          <PageTitle>{pageData.title}</PageTitle>
          <HomeContent dangerouslySetInnerHTML={{__html: pageData.content}} />
          <Plot
            data={chartState.data}
            layout={chartState.layout}
            frames={chartState.frames}
            config={chartState.config}
            onInitialized={(figure) => setChartState(figure)}
            onUpdate={(figure) => setChartState(figure)}
          />
          <div style={{height: '500px'}} ref={mapElement}></div>
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
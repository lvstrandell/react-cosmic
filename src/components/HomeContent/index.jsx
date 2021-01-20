import styled from 'styled-components';

const HomeContent = styled.article`
border-top: 1px solid #aaa;

img {
  max-width: 100%;
}

ul {
  margin: 0 0 1rem;
  list-style: square;
  padding-left: 1rem;
}

.fr-inner {
  font-size: 1em;
  text-align: center;
  display: block;
}

p:empty {
  display: none;
}

`;

export default HomeContent;
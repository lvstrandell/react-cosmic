import React from 'react';
import styled from 'styled-components';

export const PostLinkBase = styled.a`
  display: block;
  padding: 1rem;
  border: 1px solid black;
  border-radius: .5rem;
  margin: 0 0 1.5rem;
  color: black;
  text-decoration: none;

  &:hover {
    border-color: rebeccapurple;
  }
`;

export const PostLinkTitle = styled.span`
  display:block;
  font-size: 1.75rem;
  font-weight: 700;
`;

export const PostLinkDate = styled.span`
  display:block;
  font-size: 1rem;
  color: #333333;
`;

function PostLink({ title, date, url }) {
  return (
    <PostLinkBase href={url}>
      <PostLinkTitle>{title}</PostLinkTitle>
      <PostLinkDate>{date}</PostLinkDate>
    </PostLinkBase>
  )
}

export default PostLink;
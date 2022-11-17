import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;
  display: flex;
  justify-content: center;
  height: 198px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1116px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {

    h1{
      color: #FFF;
      font-size: 32px;
    }

    h2{
      color: #FFF;
      font-size: 16px;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;

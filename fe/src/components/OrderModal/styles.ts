import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background-color: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #FFF;
  width: 100%;
  max-width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 24px;
    }

    button {
      display: flex;
      border: none;
      background: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    }
  }

`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }
  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }
      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }
        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
    font-size: 14px;
    opacity: 0.8;
    font-weight: 500;
    }

  }

`;

export const Action = styled.footer`
display: flex;
flex-direction: column;

  button:disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: #333333;
    border-radius: 48px;
    border: 0;
    color: #FFF;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
  }
  .secondary {
    background: transparent;
    font-weight: bold;
    border-radius: 48px;
    border: 1px solid #ccc;
    color: #d73035;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
  }

`;

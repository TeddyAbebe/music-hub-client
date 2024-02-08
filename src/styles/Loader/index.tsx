import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Spinner = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  border: 5px solid #cef;
  border-radius: 100%;
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #cef transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const Loading = () => {
  return (
    <Wrapper>
      <Spinner />
      <Spinner />
      <Spinner />
      <Spinner />
    </Wrapper>
  );
};

// ************* Music Loading Animation ************** //

const loaderAnimation = keyframes`
  100% { transform: rotate(1turn) }
`;
const LoaderContainer = styled.div`
  --d: 22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #011411;
  box-shadow: calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  animation: ${loaderAnimation} 1s infinite steps(8);
`;

export const LoadingAnimation = () => {
  return <LoaderContainer />;
};

// ************* Statistics Loading Animation ************** //

const statLoadingAnimation = keyframes`
  0%   {background-size:35px 15px,15px 15px,15px 35px,35px 35px}
  25%  {background-size:35px 35px,15px 35px,15px 15px,35px 15px}
  50%  {background-size:15px 35px,35px 35px,35px 15px,15px 15px}
  75%  {background-size:15px 15px,35px 15px,35px 35px,15px 35px}
  100% {background-size:35px 15px,15px 15px,15px 35px,35px 35px}
`;

const StatLoaderWrapper = styled.div`
  width: 55px;
  aspect-ratio: 1;
  --g1: conic-gradient(from 90deg at top 3px left 3px, #0000 90deg, #fff 0);
  --g2: conic-gradient(
    from -90deg at bottom 3px right 3px,
    #0000 90deg,
    #000000 0
  );
  background: var(--g1), var(--g1), var(--g1), var(--g1), var(--g2), var(--g2),
    var(--g2), var(--g2);
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  animation: ${statLoadingAnimation} 1.5s infinite;
`;

export const StatLoadingAnimation = () => {
  return <StatLoaderWrapper />;
};

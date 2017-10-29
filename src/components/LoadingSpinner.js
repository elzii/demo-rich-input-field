import styled, { keyframes } from 'styled-components'

function rotationBuilder(degree) {
  const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(${degree}deg);
    }
  `;
  return rotation;
}

const LoadingSpinner = styled.span`
  animation-duration: 750ms;
  animation-iteration-count: infinite;
  animation-name: ${rotationBuilder(360)};
  animation-timing-function: linear;
  width: ${props => props.size ? props.size : 20}px;
  height: ${props => props.size ? props.size : 20}px;
  border: ${props => props.size ? 4 : 4}px solid white;
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
`

export default LoadingSpinner
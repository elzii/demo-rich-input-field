import styled from 'styled-components'

export const Container = styled.div`
	max-width: 55rem;
	margin: 0 auto;
`

export const FlexRow = styled.div`
	display: flex;
	margin-left: -0.5rem;
	margin-right: -0.5rem;
`

export const FlexHalf = styled.div`
	width: 50%;
	padding: 0 0.5rem;
`


export const InputGroup = styled.div`
  position: relative;
  /* margin-top: ${props => (props.collapseMargins ? '8px' : '30px')};
  margin-bottom: ${props => (props.collapseMargins ? '8px' : '8px')}; */

  margin-top: 8px;
  margin-bottom: 8px;
`

export const InputWrap = styled.div.attrs({
  className: '',
})`
  position: relative;
`



export const Button = styled.button`
  width: ${props => (props.full ? '100%' : 'auto')};
  display: flex;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${props => props.theme.PRIMARY};
  color: ${props => props.theme.FOREGROUND};
  font-size: 15px;
  font-weight: 700;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  border-radius: 3px;

  transition: background 150ms ease-in-out;

  &:hover {

  }
`

export const ButtonLink = styled.button`
  width: auto;
  display: inline-block;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.PRIMARY};
  background: transparent;
  font-size: 14px;
  font-weight: 700;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  border-radius: 3px;

  transition: background 150ms ease-in-out;

  &:hover {

  }
`


export const InputRadio = styled.input.attrs({

})`
  visibility: hidden;
  opacity: 0;
  position: absolute;

  & ~ label {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 22px;
    font-size: 13px;
    height: 16px;
    position: relative;
    user-select: none;
    -webkit-touch-callout: none;
  }

  & ~ label:before {
    content: '';
    font-size: 12px;
    position: absolute;
    display: block;
    width: 16px;
    height: 16px;
    top: 50%;
    margin-top: -7px;
    left: 0;
    background: #fafafa;
    border: 1px solid #e2e2e2;
    border-radius: 50%;

    // transition: all 100ms ease-in-out;
  }

  &:checked ~ label::before {
    border-color: ${props => props.theme.PRIMARY};
    background: ${props => props.theme.PRIMARY};
  }

  & ~ label:hover::before {
    border-color: ${props => props.theme.PRIMARY};
  }

  &:active ~ label::before {
    transform: scale(1.2);
  }

  &:active ~ label::after,
  &:checked:active ~ label::after {
    border-color: white;
    transform: translate3d(0,0,0) scale(0.85) rotate(-65deg);
  }

  &:checked ~ label::after {
    border-color: white;
    transform: translate3d(0,0,0) scale(1) rotate(-60deg);
  }

  & ~ label::after {
    content: '';
    /* This is the checkmark */
    border: 2px solid transparent;
    border-top: none;
    border-right: none;
    font-size: 12px;
    position: absolute;
    transform: rotate(-45deg);
    text-align: center;
    width: 8px;
    height: 5px;
    left: 4px;
    top: 50%;
    margin-top: -2px;
    transform: translate3d(0,0,0);

    transition: all 100ms ease-in-out;
  }
`
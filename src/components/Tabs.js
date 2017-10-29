import React from 'react'
import styled from 'styled-components'

export const TabsMenu = styled.div`
  position: relative;
  height: auto;
  display: flex;
  min-height: 20px;
  /* width:100%; */
  flex-wrap: wrap;
  align-items: center;
  jsutify-content: center;

  margin-left: ${props => !props.joined ? '-3px' : '0'};
  margin-right: ${props => !props.joined ? '-3px' : '0'};
`

export const TabsMenuItem = styled.div`
  display:flex;
  flex: 1 1 0;
  margin: ${props => !props.joined ? '0 3px' : '0'};
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px;
  border: 1px solid ${props => props.theme.BORDER_MUTED};
  border-radius: ${props => !props.joined ? '4px' : '0' };
  text-transform: uppercase;
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  -webkit-touch-callout: none;
  transform: translate3d( 0, 0, 0);

  &:first-child {
    border-right-width: ${props => !props.joined ? '1px' : '0' };
    border-radius: ${props => props.joined ? '4px 0 0 0' : '4px' };
  }
  &:last-child {
    border-left-width: ${props => !props.joined ? '1px' : '0' };
    border-radius: ${props => props.joined ? '0 4px 0 0' : '4px' };
  }
  &:hover {
    color: ${props => props.isActive ? props.theme.FOREGROUND : props.theme.PRIMARY};
  }
  &:active {
    color: white;
    background: ${props => props.theme.PRIMARY};
    transform: translate3d( 0, 0, 0 ) scale3d(1.03, 1.03, 1);
  }
  border-color: ${props => props.isActive ? props.theme.PRIMARY : props.theme.BORDER_MUTED};
  background: ${props => props.isActive && props.theme.PRIMARY};
  color: ${props => props.isActive && props.theme.FOREGROUND};

  svg path {
    fill: ${props => props.isActive && props.theme.FOREGROUND};
    transition: all 100ms ease-in-out;
  }

  transition: all 100ms ease-in-out;
`


export const Tab = styled.div`
  border: 1px solid #dee9ed;
  margin-top: ${props => !props.joined ? '6px' : '0' };
  border-top-width: ${props => !props.joined ? '1px' : '0' };
`
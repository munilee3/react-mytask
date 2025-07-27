import styled from 'styled-components'

export const Tabs = styled.li`
  list-style: none;
  margin-right: 10px;
`

export const TabBtn = styled.button`
  background-color: ${props => (props.active ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  color: #ffffff;
`

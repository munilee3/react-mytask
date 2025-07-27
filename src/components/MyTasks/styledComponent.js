import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`
export const CreatingTaskContainer = styled.div`
  width: 35%;
  background-color: #1a171d;
  padding: 50px;
  padding-top: 70px;
`
export const TasksContainer = styled.div`
  width: 65%;
  background-color: #000000;
  padding: 15px;
  padding-top: 70px;
`
export const Heading = styled.h1`
  font-family: 'roboto';
  font-size: 30px;
  color: #f3aa4e;
  text-align: center;
  font-weight: 500;
  margin-bottom: 35px;
`
export const CreatingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Label = styled.label`
  color: #ffffff;
  font-family: 'roboto';
  font-size: 15px;
  margin-bottom: 5px;
`
export const Input = styled.input`
  border: none;
  background-color: #f1f5f9;
  paddinng: 8px;
  padding-left: 12px;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 2px;
  color: #64748b;
  font-size: 16px;
`
export const Select = styled.select`
  width: 100%;
  height: 40px;
  paddinng: 8px;
  padding-left: 10px;
  border: none;
  font-weight: 500;
  border-radius: 2px;
  margin-bottom: 20px;
`
export const Option = styled.option`
  font-weight: 500;
`
export const AddTaskBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: #f3aa4e;
  color: #ffffff;
  font-family: 'roboto';
  font-weight: 500;
  text-align: center;
  align-self: center;
`
export const Tags = styled.h1`
  color: ${props => (props.noTask ? '#f1f5f9' : '#ffffff')};
  font-family: 'roboto';
  font-size: 25px;
  font-weight: 500;
`
export const NoTaskTab = styled.p`
  color: ${props => (props.noTask ? '#f1f5f9' : '#ffffff')};
  font-family: 'roboto';
  font-size: 25px;
  font-weight: 500;
`
export const TabsList = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
`
export const NoTasks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`
export const Task = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a171d;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
`
export const TaskName = styled.p`
  color: #f8fafc;
  font-family: 'roboto';
  font-size: 17px;
`
export const TaskList = styled.ul`
  padding-left: 0px;
`
export const TaskTag = styled.p`
  background-color: #f3aa4e;
  font-family: 'roboto';
  font-size: 14px;
  color: #323f4b;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 15px;
  font-weight: 600;
`

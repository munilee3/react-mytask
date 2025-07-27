import {Component} from 'react'
import {v4} from 'uuid'
import TabItems from '../TabItems'
import {
  AppContainer,
  Heading,
  CreatingTaskContainer,
  TasksContainer,
  CreatingForm,
  Label,
  Input,
  Select,
  Option,
  AddTaskBtn,
  Tags,
  TabsList,
  NoTasks,
  TaskName,
  TaskTag,
  Task,
  TaskList,
  NoTaskTab,
} from './styledComponent'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    userInput: '',
    inputTag: tagsList[0].optionId,
    tasksArray: [],
    activeTag: 'Initial',
  }

  inputTask = event => {
    this.setState({userInput: event.target.value})
  }

  onInputTag = event => {
    this.setState({inputTag: event.target.value})
  }

  selectingTag = tagId => {
    this.setState(prevState => ({
      activeTag: prevState.activeTag === tagId ? 'Initial' : tagId,
    }))
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {userInput, inputTag} = this.state
    // const tag = tagsList.filter(each => each.optionId === inputTag)
    // const tagName = tag[0]
    const newArray = {
      id: v4(),
      taskName: userInput,
      tag: inputTag,
    }
    if (userInput.length !== 0) {
      this.setState(prevState => ({
        tasksArray: [...prevState.tasksArray, newArray],
        userInput: '',
        inputTag: tagsList[0].optionId,
      }))
    }
  }

  renderNoTasksView = () => (
    <NoTasks>
      <NoTaskTab noTask="true">No Tasks Added Yet</NoTaskTab>
    </NoTasks>
  )

  renderTasksView = () => {
    const {tasksArray, activeTag} = this.state
    const filteredTasks =
      activeTag === 'Initial'
        ? tasksArray
        : tasksArray.filter(each => each.tag === activeTag)
    return (
      <>
        {filteredTasks.length === 0 ? (
          this.renderNoTasksView()
        ) : (
          <TaskList>
            {filteredTasks.map(eachTask => (
              <Task key={eachTask.id}>
                <TaskName>{eachTask.taskName}</TaskName>
                <TaskTag>{eachTask.tag}</TaskTag>
              </Task>
            ))}
          </TaskList>
        )}
      </>
    )
  }

  render() {
    const {userInput, inputTag, activeTag} = this.state
    return (
      <AppContainer>
        <CreatingTaskContainer>
          <Heading>Create a task!</Heading>
          <CreatingForm onSubmit={this.onSubmitTask}>
            <Label htmlFor="text">Task</Label>
            <Input
              type="text"
              placeholder="Enter the task here"
              id="text"
              onChange={this.inputTask}
              value={userInput}
            />
            <Label htmlFor="tags">Tags</Label>
            <Select id="tags" onChange={this.onInputTag} value={inputTag}>
              {tagsList.map(eachTag => (
                <Option key={eachTag.optionId} value={eachTag.optionId}>
                  {eachTag.displayText}
                </Option>
              ))}
            </Select>
            <AddTaskBtn type="submit">Add Task</AddTaskBtn>
          </CreatingForm>
        </CreatingTaskContainer>
        <TasksContainer>
          <Tags>Tags</Tags>
          <TabsList>
            {tagsList.map(eachTag => (
              <TabItems
                key={eachTag.optionId}
                tagDetails={eachTag}
                selectingTag={this.selectingTag}
                activeTag={activeTag}
              />
            ))}
          </TabsList>
          <Tags>Tasks</Tags>
          {this.renderTasksView()}
        </TasksContainer>
      </AppContainer>
    )
  }
}

export default MyTasks

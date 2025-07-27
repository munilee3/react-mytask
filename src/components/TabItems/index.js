import {Tabs, TabBtn} from './styledComponent'

const TabItems = props => {
  const {tagDetails, selectingTag, activeTag} = props
  const {displayText, optionId} = tagDetails
  const isActive = activeTag === optionId
  const onSelectTag = () => {
    selectingTag(optionId)
  }
  return (
    <Tabs>
      <TabBtn type="button" onClick={onSelectTag} active={isActive}>
        {displayText}
      </TabBtn>
    </Tabs>
  )
}

export default TabItems

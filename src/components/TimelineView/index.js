// Write your code here
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import {TimelineContainer,ContentContainer,HeaderContainer,Heading,CCBPHeading} from './styledComponents' 
import {Chrono} from 'react-chrono'

const TimelineView =props=>{
    const {timelineItemsList}=props
    const displayTimeLineCard=each=>{
        if(each.categoryId==='PROJECT'){
            return <ProjectTimelineCard key={each.id} projectDetails={each}/>
        }
        return <CourseTimelineCard key={each.id} courseDetails={each}/>
    }
    return(
        <TimelineContainer>
        <ContentContainer>
        <HeaderContainer>
        <Heading>MY JOURNEY OF <br/>
        <CCBPHeading>CCBP 4.0</CCBPHeading>
        </Heading>
        </HeaderContainer>
        <Chrono 
        theme={{
            secondary:'white',
        }} 
        items={timelineItemsList} 
        mode='VERTICAL_ALTERNATING'>{timelineItemsList.map(eachItem=>(displayTimeLineCard(eachItem)))}</Chrono>
        </ContentContainer>
        </TimelineContainer>
    )
}
export default TimelineView

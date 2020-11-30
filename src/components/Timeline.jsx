import { VerticalTimeline, VerticalTimelineElement, WorkIcon }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => (
    <div className="timeline">
    <VerticalTimeline animate={false}>
      <VerticalTimelineElement
          className="vertical-timeline-element--work bounce-in"
          contentStyle={{ background: '#9D7448', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #9D7448' }}
          iconStyle={{ background: '#9D7448', color: '#fff' }}
      >
          <h3 className="vertical-timeline-element-title">Fullstack Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Frankfurt, Germany</h4>
          <p>
          @Deutsche Bahn
          </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work bounce-in"
          contentStyle={{ background: '#9D7448', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #9D7448' }}
          iconStyle={{ background: '#9D7448', color: '#fff' }}
      >
          <h3 className="vertical-timeline-element-title">Volunteer Program Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">Chicago, USA</h4>
          <p>
          @Little Brothers Friends of the Elderly
          </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work bounce-in"
          contentStyle={{ background: '#9D7448', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #9D7448' }}
          iconStyle={{ background: '#9D7448', color: '#fff' }}
      >
          <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Stuttgart, Germany</h4>
          <p>
          @Robert Bosch GmbH
          </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work bounce-in"
          contentStyle={{ background: '#9D7448', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #9D7448' }}
          iconStyle={{ background: '#9D7448', color: '#fff' }}
      >
          <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Aachen, Germany</h4>
          <p>
          @Hosting.de GmbH
          </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work bounce-in"
          contentStyle={{ background: '#9D7448', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #9D7448' }}
          iconStyle={{ background: '#9D7448', color: '#fff' }}
      >
          <h3 className="vertical-timeline-element-title">Computer Science Student</h3>
          <h4 className="vertical-timeline-element-subtitle">Aachen, Germany</h4>
          <p>
          @RWTH Aachen University
          </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);

export default Timeline;
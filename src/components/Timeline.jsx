import { VerticalTimeline, VerticalTimelineElement, WorkIcon }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => (
    <div className="timeline">
    <VerticalTimeline animate={false}>
      <VerticalTimelineElement
          className="vertical-timeline-element--work bounce-in"
          contentStyle={{ background: 'rgb(31, 41, 55, 0.9)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(31, 41, 55, 0.9)' }}
          iconStyle={{ background: 'rgb(31, 41, 55, 0.9)', color: '#fff' }}
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>}
      >
          <h3 className="vertical-timeline-element-title">Fullstack Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Frankfurt, Germany</h4>
          <p>
          @Deutsche Bahn
          </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work bounce-in"
          contentStyle={{ background: 'rgb(31, 41, 55, 0.9)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(31, 41, 55, 0.9)' }}
          iconStyle={{ background: 'rgb(31, 41, 55, 0.9)', color: '#fff' }}
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>}
      >
          <h3 className="vertical-timeline-element-title">Volunteer Program Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">Chicago, USA</h4>
          <p>
          @Little Brothers Friends of the Elderly
          </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work bounce-in"
          contentStyle={{ background: 'rgb(31, 41, 55, 0.9)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(31, 41, 55, 0.9)' }}
          iconStyle={{ background: 'rgb(31, 41, 55, 0.9)', color: '#fff' }}
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>}
      >
          <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Stuttgart, Germany</h4>
          <p>
          @Robert Bosch GmbH
          </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work bounce-in"
          contentStyle={{ background: 'rgb(31, 41, 55, 0.9)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(31, 41, 55, 0.9)' }}
          iconStyle={{ background: 'rgb(31, 41, 55, 0.9)', color: '#fff' }}
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
        </svg>}
      >
          <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Aachen, Germany</h4>
          <p>
          @Hosting.de GmbH
          </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work bounce-in"
          contentStyle={{ background: 'rgb(31, 41, 55, 0.9)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(31, 41, 55, 0.9)' }}
          iconStyle={{ background: 'rgb(31, 41, 55, 0.9)', color: '#fff' }}
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>}
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
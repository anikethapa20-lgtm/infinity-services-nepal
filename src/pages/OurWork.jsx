import React from 'react'
import { Link } from 'react-router-dom'

export default function OurWork() {
const projects = [
{
title: 'Event Planning and Management',
text: 'Corporate events, conferences, workshops, award programs, exhibitions, and private celebrations.'
},
{
title: 'Printing and Production',
text: 'Business printing, publications, event materials, packaging, signage, and promotional products.'
},
{
title: 'Travel Coordination',
text: 'Tickets, hotels, transportation, group travel, delegations, and local support.'
},
{
title: 'Marketing and Branding',
text: 'Brand identity, advertising, social media, graphic design, and campaign support.'
},
{
title: 'Recognition Programs',
text: 'Awards, nominations, judging coordination, ceremonies, and recognition materials.'
},
{
title: 'Integrated Projects',
text: 'Multiple services coordinated through one professional and dependable team.'
}
]

const projectCards = projects.map(function (project, index) {
return React.createElement(
'article',
{
className: 'work-card',
key: project.title
},
React.createElement(
'div',
{ className: 'work-number' },
String(index + 1).padStart(2, '0')
),
React.createElement(
'h3',
null,
project.title
),
React.createElement(
'p',
null,
project.text
)
)
})

return React.createElement(
'div',
null,

```
React.createElement(
  'section',
  { className: 'page-hero' },
  React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'span',
      { className: 'eyebrow' },
      'Our Work'
    ),
    React.createElement(
      'h1',
      null,
      'Thoughtful planning. Professional delivery.'
    ),
    React.createElement(
      'p',
      null,
      'Infinity Services supports events, printing, travel, marketing, branding, and recognition initiatives.'
    )
  )
),

React.createElement(
  'section',
  { className: 'section' },
  React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'div',
      { className: 'section-head' },
      React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          { className: 'eyebrow' },
          'Project Capabilities'
        ),
        React.createElement(
          'h2',
          null,
          'Work that brings every detail together.'
        )
      ),
      React.createElement(
        'p',
        null,
        'Our team coordinates projects from planning through final delivery.'
      )
    ),
    React.createElement(
      'div',
      { className: 'work-grid' },
      projectCards
    )
  )
),

React.createElement(
  'section',
  { className: 'section soft' },
  React.createElement(
    'div',
    { className: 'container two-col' },
    React.createElement(
      'div',
      null,
      React.createElement(
        'span',
        { className: 'eyebrow' },
        'Our Process'
      ),
      React.createElement(
        'h2',
        null,
        'A clear path from idea to completion.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        { className: 'lead' },
        'We begin by understanding the purpose, budget, audience, schedule, and expected result.'
      ),
      React.createElement(
        'p',
        null,
        'We then coordinate services, suppliers, production, communication, logistics, and final delivery.'
      )
    )
  )
),

React.createElement(
  'section',
  { className: 'section ivory' },
  React.createElement(
    'div',
    { className: 'container cta-simple' },
    React.createElement(
      'div',
      null,
      React.createElement(
        'span',
        { className: 'eyebrow' },
        'Plan Your Next Project'
      ),
      React.createElement(
        'h2',
        null,
        'Let us create something meaningful together.'
      )
    ),
    React.createElement(
      Link,
      {
        to: '/contact',
        className: 'btn'
      },
      'Start a Project'
    )
  )
)

)
}

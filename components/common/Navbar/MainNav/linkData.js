const aboutLinksData = {
  title: 'About',
  type: "row",
  row: [
    {
      title: 'The Organization',
      sublinks: [
        { title: 'About YuvaCracy', href: '/org/yuvacracy' },
        { title: 'Code of Conduct', href: '/org/code-of-conduct' },
        { title: 'Social Media Advisory', href: '/org/social-media-advisory' },
        { title: 'YuvaCracy - A Safe Place', href: '/org/yuvacracy-a-safe-place' },
      ]
    },
    {
      title: 'The People',
      sublinks: [
        { title: 'Our Advisors', href: '/people/advisors' },
        { title: 'Our Partners', href: '/people/partners' },
        { title: 'Our Team', href: '/people/our-team' },
      ]
    }
  ]
}

const centresData = {
  title: 'Centres',
  type: "col",
  col: [
    {
      title: "YuvaCracy Centre for Policy Research (YCPR)",
      tooltip: "YuvaCracy Centre for Policy Research",
      href: "/centres/ycpr",
    },
    {
      title: "YuvaCracy Centre for Legal Affairs (YCLA)",
      tooltip: "YuvaCracy Centre for Legal Affairs",
      href: "/centres/ycla",
    }
  ]
}

const CareersData = {
  title: 'Careers',
  type: "col",
  col: [
    {
      title: 'Internships',
      href: '/careers/internships?scroll=internship-div',
    },
    {
      title: 'Work With Us',
      href: '/careers/work-with-us?scroll=work-div',
    },
    {
      title: 'Write For Us',
      href: '/careers/write-for-us?scroll=write-div',
    },
    {
      title: 'Career Opportunities',
      href: '/careers/career-opportunities?scroll=career-div',
    }
  ]
}

const eventsData = {
  title: 'Events',
  type: "col",
  col: [
    {
      title: 'Upcoming Events',
      href: '/events/upcoming-events?scroll=upcoming-div',
    },
    {
      title: 'Past Events',
      href: '/events/past-events?scroll=past-div',
    },
    {
      title: 'Yuvacracy Dialogues',
      href: '/events/yuvacracy-dialogues?scroll=yuvacracy-diag-div',
    },
  ]
}

const supportData = {
  title: 'Support Us',
  type: "col",
  col: [
    {
      title: 'Donate',
      href: '/support/donate',
    },
    {
      title: 'Collaboration',
      href: '/support/collaboration',
    },
    {
      title: 'Partner With Us',
      href: '/support/partner-with-us',
    },
  ]
}

export {
  aboutLinksData,
  centresData,
  CareersData,
  eventsData,
  supportData,
}
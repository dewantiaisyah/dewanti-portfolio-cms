export const fallbackData = {
  settings: {
    name: 'Dewanti Aisyah Legowo',
    role: 'Growth marketer with a story-driven and systems-minded point of view',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com',
    colors: {
      primary: '#B85C38',
      secondary: '#8FA58E',
      background: '#F8F3EA',
      cardBackground: '#EFE3D3',
      text: '#252321',
      accent: '#2F4F5F'
    },
    defaultSeo: {
      metaTitle: 'Dewanti Aisyah Legowo — Growth Marketing Portfolio',
      metaDescription: 'A warm, editorial portfolio for Dewanti Aisyah Legowo: growth marketing, storytelling, analytics, digital systems, geography, and AI-assisted workflows.',
      keywords: ['Growth Marketing', 'Portfolio', 'Storytelling', 'Analytics', 'Digital Systems']
    },
    personSchema: {
      jobTitle: 'Growth Marketing Specialist',
      description: 'A reflective growth marketer with a story-driven and systems-minded point of view.',
      sameAs: []
    },
    socialLinks: [
      {label: 'Email', url: 'mailto:hello@example.com', isPrimary: true},
      {label: 'LinkedIn', url: 'https://www.linkedin.com/', isPrimary: true},
      {label: 'Blog', url: 'https://dewantiaisyah.wordpress.com/', isPrimary: false}
    ]
  },
  homepage: {
    seo: null,
    sections: [
      {
        _type: 'heroSection', isVisible: true, anchorId: {current: 'home'}, backgroundStyle: 'ivory', layout: 'wide',
        eyebrow: 'Pattern-reader. Story-builder. Growth-doer.',
        title: 'My path has never been linear. But it has always been connected.',
        subtitle: 'I started from art, movement, maps, places, and stories. Today, I bring that way of seeing into growth marketing: reading patterns, understanding people, building digital journeys, and turning ideas into systems that create measurable growth.',
        ctas: [{label: 'View Projects', href: '#projects', style: 'primary'}, {label: 'View Experience', href: '#experience', style: 'secondary'}, {label: 'Contact Me', href: '#contact', style: 'outline'}]
      },
      {
        _type: 'richTextSection', isVisible: true, anchorId: {current: 'about'}, backgroundStyle: 'white', layout: 'wide',
        eyebrow: 'About', title: 'I didn’t start from a typical marketing or tech background.',
        subtitle: 'I started from art, movement, maps, places, and stories.',
        body: [{_type:'block', style:'normal', children:[{_type:'span', text:'Since I was young, I’ve always been drawn to creative things: painting, dancing, observing details, and expressing ideas visually. Later, I studied Geography because I wanted to explore places, draw, and understand the world more closely. What I didn’t realize back then was that geography would become one of my strongest foundations. It trained me to see patterns, understand people in context, connect data with real places, and think in systems.'}]},{_type:'block', style:'normal', children:[{_type:'span', text:'Today, I bring that way of thinking into growth marketing. For me, marketing is not only about running ads. It is about understanding people, reading signals, building the right journey, and turning insights into action.'}]}]
      },
      {
        _type: 'cardGridSection', isVisible: true, anchorId: {current: 'thread'}, backgroundStyle: 'sand', layout: 'default',
        eyebrow: 'The thread behind my work', title: 'My journey may look random from the outside. But each chapter shaped how I work today.',
        cards: [
          {title:'Art & Visual Sense', tag:'Observation', body:'Painting, dancing, and visual expression taught me how to notice details, compose ideas, and communicate beyond words.'},
          {title:'Geography & Spatial Thinking', tag:'Context', body:'Geography trained me to understand people, places, movement, and systems. Data is never just numbers; it is connected to context.'},
          {title:'Growth & Digital Marketing', tag:'Action', body:'Marketing became the place where my creative, analytical, and strategic sides met: campaigns, funnels, copy, analytics, and journeys.'},
          {title:'Data, AI & Practical Tools', tag:'Expansion', body:'Now I explore AI-assisted workflows and practical tech tools to move faster from insight to action.'}
        ]
      },
      {
        _type: 'cardGridSection', isVisible: true, anchorId: {current: 'what-i-do'}, backgroundStyle: 'ivory', layout: 'default',
        eyebrow: 'What I Do', title: 'I help turn scattered signals into clear growth actions.',
        subtitle: 'My work sits at the intersection of growth strategy, performance marketing, storytelling, analytics, and systems.',
        cards: [
          {title:'Growth Strategy', body:'Understanding goals, audiences, channels, and the journey needed to move people from awareness to action.'},
          {title:'Performance Marketing', body:'Planning, running, and optimizing paid campaigns across platforms like Meta and Google.'},
          {title:'Content & Storytelling', body:'Turning insights into messages, website copy, campaign narratives, and content that feels clear.'},
          {title:'Analytics & Systems', body:'Using data, tracking, dashboards, and workflow tools to understand what works and what to improve.'}
        ]
      },
      {_type: 'projectsSection', isVisible: true, anchorId: {current: 'projects'}, backgroundStyle: 'white', eyebrow:'Selected Work', title:'Selected Work', subtitle:'A few areas of work that show how strategy, message, audience, data, and execution connect.', showAllProjects: true},
      {_type: 'experienceSection', isVisible: true, anchorId: {current: 'experience'}, backgroundStyle: 'sand', eyebrow:'Experience', title:'Experience', subtitle:'Across these experiences, I learned that growth rarely comes from one channel alone.', showAllExperience: true},
      {_type: 'skillsSection', isVisible: true, anchorId: {current: 'capabilities'}, backgroundStyle: 'ivory', eyebrow:'Capabilities', title:'Capabilities', subtitle:'A practical mix of growth, content, analytics, product thinking, workflow, and creative production.', showAllSkills: true},
      {_type: 'richTextSection', isVisible: true, anchorId: {current: 'how-i-see-work'}, backgroundStyle: 'white', layout:'wide', eyebrow:'How I See Work', title:'I believe good work starts with paying attention.', body:[{_type:'block', style:'normal', children:[{_type:'span', text:'Before building a campaign, writing a message, or analyzing a dashboard, we need to understand what is really happening: who we are speaking to, what they care about, what signals the data shows, and what context surrounds the decision.'}]}]},
      {_type: 'richTextSection', isVisible: true, anchorId: {current: 'geography'}, backgroundStyle: 'sand', layout:'wide', eyebrow:'Why Geography Still Matters', title:'A funnel is a kind of map.', body:[{_type:'block', style:'normal', children:[{_type:'span', text:'A customer journey is a kind of movement. A campaign is a way of reaching people within a specific context. A dashboard is a way of seeing patterns across time and behavior. I do not see my path as a complete career switch. I see it as a translation: from maps to funnels, from places to platforms, from spatial patterns to user behavior.'}]}]},
      {_type: 'richTextSection', isVisible: true, anchorId: {current: 'build'}, backgroundStyle: 'ivory', layout:'wide', eyebrow:'Now, I’m Expanding The Way I Build', title:'Learning tech is not about chasing trends. It is about expanding my ability to solve real problems.', body:[{_type:'block', style:'normal', children:[{_type:'span', text:'Lately, I’ve been exploring data, AI-assisted workflows, and practical tech tools as a way to help marketers, researchers, and teams move faster from messy information to useful output.'}]}]},
      {_type: 'richTextSection', isVisible: true, anchorId: {current: 'writing'}, backgroundStyle: 'white', layout:'wide', eyebrow:'Writing / Thinking', title:'I write to make sense of what I notice.', body:[{_type:'block', style:'normal', children:[{_type:'span', text:'Sometimes it becomes a blog post. Sometimes it becomes website copy, campaign messaging, a creative brief, or a small experiment. Writing helps me slow down, connect ideas, and turn scattered thoughts into something clearer.'}]}]},
      {_type: 'contactSection', isVisible: true, anchorId: {current: 'contact'}, backgroundStyle: 'ink', layout:'compact', eyebrow:'Contact', title:'Let’s connect', subtitle:'I’m interested in work that sits at the intersection of growth, storytelling, data, social impact, and practical digital systems.', showSocialLinks: true}
    ]
  },
  allProjects: [
    {title:'Growth & Performance Marketing', category:'Growth', summary:'Campaign strategy, paid media optimization, lead generation, landing page improvement, and performance reporting.', proofPoints:['ROAS 12+ on Meta Ads','275% lead generation increase','300% lead generation increase','50% CPC reduction'], tools:['Meta Ads','Google Ads','GA4','Landing Page Optimization']},
    {title:'Website, Product & Content Strategy', category:'Digital Strategy', summary:'Website copy, SEO content, value proposition, go-to-market strategy, sitemaps, wireframes, and conversion-focused landing pages.', proofPoints:['SEO-friendly copy','Conversion journey mapping','Cross-functional briefs'], tools:['SEO','Wireframe','Content Strategy']},
    {title:'Analytics, Tracking & Funnel Improvement', category:'Analytics', summary:'Turning analytics, campaign data, and user behavior into recommendations for better decisions.', proofPoints:['Funnel analysis','Tracking setup','Dashboard thinking'], tools:['GA4','GTM','Microsoft Clarity','Looker','Sheets']}
  ],
  allExperience: [
    {role:'Digital Marketing Lead', company:'PT Maju Digital Bangun Indonesia / Goesdigital', startDate:'2023-12-01', endDate:'2025-07-01', summary:'Led and executed multi-brand digital marketing strategies across paid ads, SEO, website copy, analytics, creative direction, and campaign optimization.', impact:['ROAS 12+ on Meta Ads','4,700% increase in pre-registration clicks','Improved website engagement contributing to new client acquisition']},
    {role:'Digital Marketing Specialist', company:'PT Maju Digital Bangun Indonesia / Goesdigital', startDate:'2023-07-01', endDate:'2023-11-01', summary:'Managed Google Ads and Meta Ads campaigns, improved landing pages, wrote SEO-friendly website copy, and developed go-to-market strategies.', impact:['275% increase in lead generation','50% CPC reduction within one month','117% LinkedIn follower increase']},
    {role:'Digital Marketing — Lead Generation', company:'Bithour Production', startDate:'2023-01-01', endDate:'2023-04-01', summary:'Worked with the CEO on campaign strategy, performance analysis, business development, pitching, and client coordination.', impact:['300% lead generation increase within one month','Supported long-term yearly project contract']},
    {role:'Program & Project Assistant', company:'SDGs Hub UI', startDate:'2021-02-01', endDate:'2022-12-01', summary:'Supported project management, research, coordination, reporting, content production, and program delivery for SDGs-related initiatives.', impact:['67% organic follower increase','Facilitator for Environmental Pillar of Australia–Indonesia BRIDGE School Partnership Program']}
  ],
  allSkills: [
    {title:'Growth & Performance', skills:['Meta Ads','Google Ads','Lead Generation','Campaign Optimization','Paid Media Strategy','CRO']},
    {title:'Content, SEO & Storytelling', skills:['Website Copy','SEO Content','Campaign Messaging','Content Strategy','Creative Briefs']},
    {title:'Analytics & Tracking', skills:['GA4','Google Tag Manager','Microsoft Clarity','Looker','Google Sheets','Excel','Funnel Analysis']},
    {title:'Product & Digital Strategy', skills:['Go-to-Market Strategy','Value Proposition','Business Model Canvas','Sitemap','Wireframe','Landing Page Journey']},
    {title:'Project & Workflow', skills:['Notion','Trello','Google Drive','Cross-functional Coordination','Client Communication','Intern Mentoring']},
    {title:'Creative Production', skills:['Canva','CapCut','Visual Direction','Simple Design Production','Content Ideation']}
  ],
  allWriting: []
}

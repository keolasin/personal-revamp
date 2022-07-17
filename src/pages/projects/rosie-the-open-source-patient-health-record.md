---
title: "Rosie: The Open Source Patient Health Record"
draft: false
date: 2022-07-18T23:22:25.116Z
link: https://open-health-manager.github.io/Design/
image: https://res.cloudinary.com/keolasin/image/upload/v1658100251/rosie_how_hry0pd.png
imageAlt: Image of the Rosie application on mobile devices.
---
## Problem

In the United States, patient health data is increasingly siloed and spread across many health systems, leading to a disjointed health record from a patient perspective. Without a holistic view of their health, managing health goals can be cumbersome. As well, there are ethical issues that patient data, owned and sold by health insitutions and third parties, leaves patients open to exploitation and reduced privacy. 

## Solution

Our project aimed to create a mobile-first, open source, standard personal health record (SPHR) designed for patients and vulnerable communities first and foremost. The application, Rosie, focuses on driving primary self-care, interoperability across multiple services, and accessible health literacy and recommendations. Rosie serves as a key locus in the health data landscape, focusing on patient data ownership while reducing administrative bloat, reducing health inequities, and promoting improved health.

## Results

In collaboration with MITRE, we designed an application, that's compliant with [accessibility standards](https://www.w3.org/WAI/), available across multiple platforms (web, android, iOS), and fully [open source](https://opensource.com/resources/what-open-source).

### Time

1.5 designers for 16 weeks, ongoing

## Problem Area and Landscape Review

### Patient's should own their health data and it should all be in one place, but neither of these goals are realized - yet.

There are a myriad of methods and tools to improve health in the United States, and health data records have largely been realized at an institutional level. However, a downstream intervention, at the individual level, may be more appropriate to meet immediate patient health goals and meet [strategic health policy goals](https://www.hhs.gov/about/strategic-plan/2022-2026/index.html). While electronic health records (EHRs) have improved both [organizational outcomes and population health](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3270933/), because the US health system relies on a mix of private and public services, the data associated with these records is siloed to each organization and creates a headache for patients (and physicians) trying to access that data. Thus, there is a need for an integrated, interoperable tool that can concatenate these disparate sources.

Additionally, since health organizations typically generate and collect health data in the US, there's no consensus of national and state policy as to who owns that health data - [only in New Hampshire do patients own their information in a medical record by law](http://www.healthinfolaw.org/comparative-analysis/who-owns-medical-records-50-state-comparison). With increasing [patient privacy concerns over health data](https://www.jmir.org/2022/1/e29367), and the large market for [deidentified EHR data](https://www.nejm.org/doi/full/10.1056/NEJMp2102616), it's important that patients own their health data and realize the benefits associated with ownership.

While other developed countries have personal health record tools and standards that help integrate these standard patient health records with existing electronic health records [with varying success](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8137875/), the available equivalents in the US lack several key components. MyChart, Epic's re-design that integrates patient access to their existing EHR service, is organization specific - the patient does not have an easily transferable, complete health record for their own use. Apple Health Record, more in line with a typical SPHR, is a product of a private big tech company, and could go the way of Alphabet's first PHR product [Google Health](https://www.healthcareitnews.com/news/google-has-another-go-patient-health-record-software), and there have been [concerns raised regarding data privacy](https://www.nytimes.com/2019/09/03/technology/smartphone-medical-records.html). There's a clear need for an open source, publicly available resource that provides these features ethically and sustainably.

### Health Equity and the Digital Divide

Recognizing the need for a PHR that's useful across the nation and it's many unique communities, a successful PHR should be designed around the needs of those communities. The United States faces serious public health problems, such as cardiovascular disease, Covid-19, maternal and child mortality, and gun violence, many of which are exacerbated in marginalized and disadvantaged communities. Failing to address health disparities contributes to our worsening national life expectancy, and [further harms vulnerable populations](https://www.apha.org/-/media/Files/PDF/advocacy/SPEAK/210825_Racial_Equity_Fact_Sheet.ashx)

So how can a personal health record help to advance [health equity](https://youtu.be/Arpzx6TJuQI]? Although there are concerns of a [deepening digital divide](https://www.modernhealthcare.com/opinion-editorial/failing-bridge-digital-divide-will-deepen-health-disparities), there is evidence that the issue isn't [access to technology](https://www.commonwealthfund.org/blog/2018/time-now-case-digital-health-innovation-poor-and-underserved), but rather, [technology that is accessible](https://www.himss.org/resources/digital-divide-healthcare-its-not-just-access).

## The Design Process

To meet these stated goals, the entire process involved close collaboration with development engineers at MITRE and designers at GoInvo. The design process utilized important methods: 

1. Designing for the margins and diversity
2. Rapid review and iteration
3. Open source all the way

In seeking to iterate on designs, a landscape review followed by initial designs were quickly implemented in a patient-facing application. This initial prototype and designs, while rough, proved to be essential in gathering valuable feedback from vested parties.

Next, development of personas and journey maps helped to tell a more compelling, and complete, picture of the usefulness of Rosie. Through several presentations and workshopping sessions with public health professionals and clinicians working in vulnerable communities, the combined journey map and prototype demo helped to create a more robust user experience. 

Because of the complexity of the project (how does an application safely, securely, integrate a variety of health resources into one location and provide intelligent recommendations based on that protected information?), a variety of teams across MITRE and GoInvo contributed to the project, culminating in a day-long working group session to review deliverables and goals. With a shared vision, design, engineering, and project management groups were able to implement a real-world tool for users.

## Solution

First, a [public-facing website](https://open-health-manager.github.io/Design/) for the project was created to facilitate the auspicious open source aspect and generate external buy-in. 

Next, multiple designs of the Rosie application were iterated and reviewed. Key considerations for the designs were:

1. Improving health literacy simply
2. Ensuring accessibility and ease-of-use
3. Reducing information overload through effective information architecture
4. Engaging data visualizations
5. Meaningful recommendations with immediate impact

With each iteration, trade-offs had to be considered and weighed to create an engaging, interactive application that remained user-friendly and informative. Since health records can include a lifetime of complex medical data, parsing that data in a way that users would find easily navigable and relevant was a design challenge. As well, an integrated SPHR would enable users to share their data across care teams or with friends and family effectively, while still respecting and adhering to unique relationships and related privacy considerations - the design needed to incorporate a simple way to effectively manage these unique relationships.

## Results

The application is still in development as an on-going open source project, and expects to have a full release later in 2022.
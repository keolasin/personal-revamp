---
title: "Rosie: The Open Source Personal Health Record"
draft: false
date: 2022-07-18T23:22:25.116Z
link: https://open-health-manager.github.io/Design/
image: https://res.cloudinary.com/keolasin/image/upload/v1658100251/rosie_how_hry0pd.png
imageAlt: Image of the Rosie application on mobile devices.
---
Empowering patients in their primary self care through data ownership and effective, uniquely tailored health literacy.

## Summary

### Problem

In the United States, patient health data is increasingly siloed and scattered across many health systems, leading to a disjointed health record from a patient perspective. Without a holistic view of their health, managing health goals can be cumbersome for patients and providers. There are also ethical concerns that digital data, owned and sold by health institutions and third parties, leaves individuals open to reduced privacy and exploitation.

### Solution

Our goal is to create a mobile-first, open source standard personal health record (SPHR) app. Designed with and for patients from vulnerable communities, Rosie focuses on driving primary self-care, supporting interoperability across multiple services, and increasing health literacy. Rosie serves as a key locus in the health data landscape, advocating patient data ownership while reducing administrative bloat and reducing health inequities, ultimately generating improved health outcomes.

### Results

In collaboration with MITRE, we designed an application that's compliant with [accessibility standards](https://www.w3.org/WAI/), available across multiple platforms (web, android, iOS), and fully [open source](https://opensource.com/resources/what-open-source).

### Time

1.5 designers for 16 weeks, ongoing

## Problem Area and Landscape Review

### Patient's should own their health data and it should all be in one place, but neither of these goals are realized - yet.

There’s a myriad of digital methods and tools aimed at improving health in the United States, and health data records have largely been realized at an institutional level. However, a downstream intervention, at the individual level, may be more appropriate to address immediate patient health concerns and meet [strategic health policy goals](https://www.hhs.gov/about/strategic-plan/2022-2026/index.html). Electronic health records (EHRs) have improved both [organizational outcomes and population health](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3270933/); however, because the US health system relies on both private and public services, the data associated with these records is siloed by organization, which leads to a convoluted process for patients (and providers) trying to access their health data in its entirety. There is a clear need for an integrated, interoperable tool that merges data from disparate sources into a single record. This is especially salient when it comes to providing effective healthcare to historically underserved populations.

istorically, because health organizations in the US measure and record health metrics in the course of treating patients, the legal ownership of that data varies by state. There’s currently no national consensus as to who owns that generated health data - [only in New Hampshire do patients own their information in a medical record by law](http://www.healthinfolaw.org/comparative-analysis/who-owns-medical-records-50-state-comparison), while many states confer ownership to the health organization, or lack legislation regarding health data ownership entirely. With increasing [patient privacy concerns over health data](https://www.jmir.org/2022/1/e29367) and the large market for [de-identified EHR data](https://www.nejm.org/doi/full/10.1056/NEJMp2102616), it's important that patients own their health data and realize the benefits associated with ownership. The patient health data situation today calls to mind the story of [Henrietta Lacks](https://www.nature.com/articles/d41586-020-02494-z): there are parallel justice and consent issues going unaddressed in the modern health data business, and we must be proactive about establishing robust patient data rights, and systems that bolster those rights.

While other developed countries have tools and standards to integrate patient health records [albeit with varying degrees of success](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8137875/), the US equivalents are lacking in several key areas:

1. Transferability: MyChart, Epic's re-design that integrates patient access to their existing EHR service, is organization specific; the patient does not have an easily transferable, comprehensive health record for their own use. 
2. Sustainability: Apple Health Record, more in line with a typical SPHR, is a product of a large private tech company, and could go the way of Alphabet's first PHR product [Google Health](https://www.healthcareitnews.com/news/google-health-be-shuttered) and other failed endeavors. Since health data lasts a lifetime, systems that support a personal health record should be sustainable.
3. Privacy: There have been [valid concerns raised regarding data privacy](https://www.nytimes.com/2019/09/03/technology/smartphone-medical-records.html), so any effective personal health record must protect patient privacy beyond what current regulations enforce, in accordance with the [precautionary principle](https://en.wikipedia.org/wiki/Precautionary_principle).

Clearly, the US healthcare system needs an open source, publicly available resource to fill these gaps in an ethical, scalable capacity.

### Health Equity and the Digital Divide

The US faces a number of serious public health problems, such as the high prevalence of cardiovascular disease, high maternal and child mortality, or rampant infectious diseases like Covid-19, many of which are exacerbated in marginalized communities. Given the sheer diversity of the United States, the success of a PHR should be measured by how well it serves the needs of its most vulnerable populations; failing to address health disparities systemically contributes to our declining national life expectancy and [perpetuates poor outcomes for underserved citizens](https://www.apha.org/-/media/Files/PDF/advocacy/SPEAK/210825_Racial_Equity_Fact_Sheet.ashx)

So how can a PHR advance [health equity](https://youtu.be/Arpzx6TJuQI]? Although there are concerns of a [deepening digital divide](https://www.modernhealthcare.com/opinion-editorial/failing-bridge-digital-divide-will-deepen-health-disparities), evidence suggests that the problem isn't [access to technology](https://www.commonwealthfund.org/blog/2018/time-now-case-digital-health-innovation-poor-and-underserved) but rather [technology that is accessible](https://www.himss.org/resources/digital-divide-healthcare-its-not-just-access).


## The Design Process

To meet these stated goals, GoInvo designers and MITRE development engineers worked in close collaboration on the open source project. The design process was guided by human-centered design and a few important principles:

1. Designing for the margins
2. Rapid review and iteration
3. Open source all the way

We conducted a landscape review followed by initial designs, which were quickly implemented in a patient-facing application. The prototype and initial designs were essential in gathering valuable feedback from vested parties and useful for future design iterations.

Next, we developed user personas and journey maps to capture a more compelling and complete picture of Rosie’s value. After several presentations and workshopping sessions with public health professionals and clinicians working with vulnerable communities, the journey map and prototype demo helped create a more robust user experience. A participant in an early workshop suggested that we design to communities’ strengths and apply an asset-based mindset opposed to a deficit mindset. Though aware of the barriers and systemic problems, we focused on how the community has met those challenges. What skills did they already have that could help them, and how might our tool augment these strengths and resources in a culturally appropriate way that resonated with the community? 

Because of the complexity of the project (how does an application safely and securely integrate a variety of health resources into one location and provide intelligent recommendations based on that protected information?), a variety of teams across MITRE and GoInvo contributed to the project, culminating in a day-long working group session to review deliverables, initial products, and future goals. With a shared vision, design, engineering, and project management groups were able to implement a real-world tool for users.

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

The application is still in development as an on-going open source project, with early user group testing occurring in September of 2022, and a full-release planned for the end of 2022.
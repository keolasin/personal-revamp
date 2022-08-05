---
title: Environmental Justice through R and ArcGIS
draft: false
date: 2022-04-01T22:18:42.134Z
link: https://storymaps.arcgis.com/stories/ca62f865cb5144d9b606fadac85354f8
image: https://res.cloudinary.com/keolasin/image/upload/v1658097435/arcGIS_uranium_f2spna.png
imageAlt: Map of Navajo Nation depicting water sources within 4 miles of an
  abandoned uranium mine
---
An environmental justice project to inform policy and the public on the health issues experienced in the Navajo Nation due to uranium exposure.

## Authors

Castle Funatake, Vicki Ip, Meredith Potts, Matthew Reyes, and Anastasia Roloff

## Summary

During our graduate coursework at UC Berkeley, our group developed a policy brief, statistical analysis, and interactive map through ArcGIS informing the public and policy-makers of an environmental justice issue affecting community health in Navajo Nation.

## Background

### What is Environmental Justice?

Environmental Justice is the movement around environmental issues (such as global warming, toxic chemical leaks, contaminated air and water, etc.) that disproportionately affect marginalized groups and communities of color. With roots in the civil rights and environmentalism movements of the 1960's, environmental justice came into it's own in the 1980's with the United Church of Christ Report, "Toxic Wastes and Race in the US," coined then as "environmental racism". Today, environmental justice plays an important role in the intersectional environmentalism movements and in public health endeavors. 

### What's the connection to health?

Individual and community health can be affected based on our exposure to harmful agents in the environment: air pollution causes and exacerbates respiratory illness, contaminated water sources transmit disease, and extreme heat events lead to excess deaths. [The World Health Organization estimates 24% of all global deaths in a year](https://www.who.int/publications/i/item/9789241565196) are linked to the environment. Unfortunately, many of these environmental issues negatively impacting health are unaddressed, under-funded, or lack awareness of the issue. Exposure to Uranium in Navajo Nation is one of those issues, and since it's an environmental problem that negatively impacts health in an already disadvantaged, minority community, that makes it an environmental justice issue.

## The Project: Navajo Nation and Uranium Exposure

To help raise awareness of the issue, an informational ArcGIS site was produced by our team to highlight the ongoing problem, health outcomes, and mitigation strategies. While there is a [well-studied history](https://ajph.aphapublications.org/doi/full/10.2105/AJPH.92.9.1410) of uranium miners in Navajo Nation [suffering from the radioactive effects of uranium](https://www.cdc.gov/niosh/pgms/worknotify/uranium.html), the exposure to uranium from contaminated food & water sources, building materials, and particle matter deserves greater research. While the Environmental Protection Agency (EPA) today works to [clean up abandoned uranium mines](https://www.epa.gov/navajo-nation-uranium-cleanup), especially after the [inadequate response to the Church Rock Spill of 1979](http://large.stanford.edu/courses/2019/ph241/nguyen-h2/), more could be done to support, educate, and conduct research with the community regarding the health risks associated with ingested uranium exposure.

To help highlight the research gaps for this specific community, our group completed a statistical analysis of the relationship between uranium exposure and certain metabolites in the blood stream associated with kidney damage, recreated from a dataset provided by Zamora and colleagues on [their work in a Nova Scotian community exposed to uranium in their drinking water](https://doi.org/10.1006/toxs.1998.2426). Our analysis consisted of data cleaning, followed by initial descriptive statistics and visualization of the data. Next, we confirmed the data and variables of interest to be a simple random sample approximately normally distributed, of sufficient sample size, and mostly free of outliers. Based on these assumptions, a two-sample t-test of mean Glucose levels (dependent variable) and high and low uranium exposure (independent variable) was conducted. Based on the results, the p-value of 0.0023 and 95% confidence interval mean (14.72, 63.12), we had evidence to reject the null hypothesis and suggest that there is a significant difference in mean glucose levels between high- and low- uranium exposure groups.

You can find the dataset, R code, and analysis on [my github](https://github.com/keolasin/biostats1/blob/main/dp.Rmd).

# COVID WATCH  
![COVID-WATCH](https://cdn.discordapp.com/attachments/726220926139629639/731927255759978576/ICON.png)

A robust crowd-sourcing tool and nexus for all things Covid-19 related brought to you by web-scraping and scientific databases. 


## Inspiration
Despite the numerous options for COVID-19 tracking, there are few options for local tracking of the virus and there are then fewer that have a robust user experience that anyone can get behind.
The more individuals know about their local and global situation, the easier it is for them to avoid Covid-19 hotspots and potential harm to themselves and others. Our goal is to provide the most robust user experience and functionality for anyone to be able to keep healthy and informed.
## What it does
We have provided a two-pronged solution:

-First, we have users provide life-saving data as our crowdsourcing process through our survey.

-Second, given the crowdsourced and government data, we set up local hotspots of Covid-19 and provide statistics. Alongside this, we provide local and global news and developments related to Covid-19 generated based on the popularity and reputability of the news outlet. This is all accessed through our centralized dashboard which also comes equipped with our tips for keeping safe during Covid-19, generated from the top advice from WHO. 

## How we built it
The Hotspot Map
Provides users with areas that are in a high density of infected individuals and current case numbers from that region, data is collected through our own collected data + government databases and displayed through the Google Maps API. 

Active and Recovery Case Trends
Provides graphs and statistical trends of cases from local and global regions, allowing users to search and find related data quickly.

COVID News and Safety Tips
Locally sourced news regarding Covid-19 will be provided on a single platform alongside with trusted global news, keeping users informed and safe.

## Challenges we ran into
The biggest challenge by far was taking our digitalized design and making it into actual code as most of the backend we had done on separate files without any styling. This led us to spend hours working with tools such as bootstrap studio to make the UI design easier, however, the outputted code was far too cluttered, leaving us to manually program a lot of the HTML and CSS in ourselves, eventually not even using the bootstrap and instead using flexbox. The bootstrap generated class names did not help with this process as most of them were basically gibberish, but with enough time, we got through it. 

## Accomplishments that we're proud of
The biggest goal we had in mind was not to reinvent the wheel but to take a concept and turn it into the best possible user experience. The final resulting UX and UI, first designed on paper, digitalized and made with an HTML, CSS, and JS stack, came out beautifully (in our humble opinion).

## What we learned
The biggest takeaway was how to fully modify and work with the Google Maps API. Given that we had gone into the project wanting the smoothest user experience possible, we needed to make sure that the map UI and functionality based around it made sense to the user and provided value. 

## What's next for COVID WATCH
The next stage would be to link even more granular data from nations across the globe, in turn, being able to zoom or click on any country and immediately see regional data. The biggest changes, however, would be the customizability of graphs, being able to select from a larger pool of datasets such as total treatment rate, treatment rate per 1 million, etc, this way we provide an even more detailed report of every country, region, and city. 

# Plotly-Belly-Button-Biodiversity
Analyzing Biodiversity
<br/>
<p align="center">Tyrone Fraley<br/>
UC Berkley Extension<br/>
August 31, 2022<br/>
<p/>
<br/>
<p align="center">
  <img width="460" height="200" src="Images/beef.jpeg">
</p>
<br/>

## Overview of the Analysis
For this analysis I developed a dashboard through html, Javascript, bootstrap, and plotly for Roza a biological researcher. Partnering with Improbable Beef, Roza hopes to develop synthetic beef from 10 types of bacteria. Currently, there are many other sources of synthetic beef on the market that use fungi, algae, or micro organisms that can be found on plant roots. 

### Results
The dashboard is able to supply Roza and I with comprehensible data. After creating the index.html file I created a charts.js file to pull data on the subjects from the samples.json file. Within the charts.js file  I began to develop my code. Starting with var selector = d3.select("#selDataset"); my goal was to obtain a reference for the drop down select element. I then created a list of sample names to populate the select options. At this point in the charts.js file eit was important to establish a promise object through d3.json("") once this promise had been fulfilled the function would pass as an argument to .then(). I then used console.log() to check the data that is being pulled from the json file. The variable sampleNames was established to iterate over the array of the sample names. Next, a forEach() method was applied to iterate over the sample names in the array. Afterwhich the append() method was added to bring in the option to the selected element. The text() method was an important step in the process because I wanted to add the sample names to the option. I then used property() to add the value to the option. Finally, I used const firstSample = sampleNames[0], buildCharts(), and buildMetaData() to not only add the sample names to the drop down menu, but to also begin plotting my charts. Now the data we had worked so hard to gather and code could be displayed in as an interactive dashboard. 

# Visualizing Data with Leaflet

![1-Logo](Leaflet-Step-1/Images/1-Logo.png)

The USGS provides scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. They collect data from all over the world each day, which I used to create a data visualization on the occurence of  earthquakes.

1. **Choice of a Dataset**

![3-Data](Leaflet-Step-1/Images/USGS_webpage_header.PNG)

The USGS provides earthquake data in a number of different formats, updated every 5 minutes on the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). I chose the catagory providing information on all earthquakes in a 24-hour period, which returned a JSON representation of that data.

![USGS_GeoJSON](Leaflet-Step-1/Images/USGS_GeoJson.PNG)

### 2. **Import & Visualize the Data**

![Final_Map](Leaflet-Step-1/Images/FinalMap.PNG)

I created an interactive map using Leaflet that plots all earthquakes from the data set based on latitude and longitude.

* Cirlce markers reflect the magnitude of each earthquake in both size and color. Earthquakes with higher magnitudes should appear larger and darker in color.

* Popups on each circle marker provide location, time and magnitude of the earthquake when clicked.

### Assessment

Your final product will be assessed on the following metrics:

* Completion of assigned tasks

* Visual appearance

* Professionalism

### Copyright

Trilogy Education Services © 2019. All Rights Reserved.

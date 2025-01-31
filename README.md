# geojson-feature-merger
This is a GeoJson editor/tool customized to merge features.
You can merge and create a new feature with neighboring features with this tool.

# <a href="http://xec.gr/geojson-feature-merger/feature-merger.html">Tool is now available on GitHub Pages</a>
- To test: Just click Merge button.

- You can use <a href="https://openlayers.org/en/v4.6.5/examples/data/geojson/countries.geojson" target="blank">Default OpenLayers Countries</a> source or enter your special geojson source url to fetch.
- You can specify `property` value to target the join action. `name` value is used if it's empty
- You need to add feature names with comma seperated
- Once you click on Merge button tool will create a new feature.
- You can check the new feature on <a href="https://geojson.io" target="blank">geojson.io</a> editor.
- You can use Copy to Clipboard button to copy new feature.

# Used Libraries
- <a href="https://leafletjs.com" target="blank">Leaflet.js</a>
- <a href="https://turfjs.org/" target="blank">turfjs.org</a>

Following screen shot is result of merging Germany,Poland and Austria features:

![Sample UI](https://github.com/abdurrahmanyildiz/geojson-feature-merger/blob/main/screen-shots/index.png)

#openlayers #leaflet #turf #features #merge #union #polygon #geojson

related SO question: https://stackoverflow.com/questions/68005988/geojson-turf-merge-multiple-polygons-to-one-polygon-keeping-hole


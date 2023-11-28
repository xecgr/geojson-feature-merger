const map = L.map('map', {
    center: [15, 15],
    zoom: 2,
	});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//https://openlayers.org/data/vector/us-states.json
document.getElementById("btnMap").addEventListener('click',()=>{
	let url = document.getElementById("geoJsonLink").value;
	let property = document.getElementById("property") && document.getElementById("property").value || "name"
	url = url ? url : "https://openlayers.org/en/v4.6.5/examples/data/geojson/countries.geojson";
	
	fetch(url)
	  .then(response => response.json())
	  .then(fc => {
			const mergeList = document.getElementById("mergeList").value.toLowerCase().split(",");
			const _features = fc.features.filter(f => mergeList.includes(f.properties[property].toLowerCase()))

			// do the union over each feature
			let union = _features[0];
			for (let i=1; i<_features.length; i++) {
			  union = turf.union(union, _features[i]);
			}

			const fc2 = {
			  "type": "FeatureCollection",
			  "features": [union] // note features has to be an array
			}
			L.geoJson(fc2).addTo(map);  
			document.getElementById("mergeResult").value = JSON.stringify(union);
		  });
	});
	  
document.getElementById("btnCopy").addEventListener('click',()=>{
	const element = document.getElementById('mergeResult');
	element.select();
	element.setSelectionRange(0, 99999);
	document.execCommand('copy'); 
});

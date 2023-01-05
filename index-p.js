//for creating center point. (geometry.geometries[1])
const fs = require('fs')

const data = JSON.parse(fs.readFileSync('sentinel2-grid.geojson', 'utf-8'))
const output = {}

//Geojson
output.type = "FeatureCollection"
output.features = []

for (const i in data.features){
    //console.log(data.features[i].properties.name2)
    output.features[i] = {}
    output.features[i].type = "Feature"
    output.features[i].properties = {}
    output.features[i].properties.name = data.features[i].properties.name2
    output.features[i].geometry = {}
    output.features[i].geometry.type = "Point"
    output.features[i].geometry.coordinates = data.features[i].geometry.geometries[1].coordinates
//    console.log(f.properties.name2)
}

fs.writeFileSync('./docs/sentinel2-gridcenter.geojson', JSON.stringify(output))

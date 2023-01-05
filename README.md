# sentinel-2-grid
sentinel 2 tiling grid in geojson (converted from kml)

# Generated GeoJSON
KML is downloaded from the copernicus project, and converted into geojson.  
GeoJSON file was first exported from KML using gdal. As its structure was not good, the follwoing two GeoJSON were generated. To save data size, only the tile name is in the properties.
  * sentinel2-gridpolygon.geojson
  * sentinel2-gridcenter.geojson

# Vector tile
The above two GeoJSON files are converted into vector tile.

  * Layer: frame, polygon, from ZL 0 to 5
  * Layer: center, point, from ZL 0 to 5

# source
KML files is from https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-2/data-products
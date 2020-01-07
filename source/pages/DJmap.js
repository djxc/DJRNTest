import React, {useState, useEffect} from 'react';
import {View, Text, MapView} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

function DJmap() {
  const rasterSourceProps = {
    id: 'stamenWatercolorSource',
    url: 'http://www.google.cn/maps/vt?lyrs=s@810&gl=cn&x={x}&y={y}&z={z}',
    tileSize: 256,
  };
  return (
    <View>
      <Text>djmap</Text>
      <MapboxGL.MapView
        // ref={(c) => (this.map = c)}
        style={{flex: 1}}
        animated={true}
        localizeLabels={true}
        showUserLocation={true}
        logoEnabled={false}
        rotateEnabled={false}
        attributionEnabled={false}
        compassEnabled={false}>
        {/*瓦片图层（资源来自google.cn）*/}
        {/* <MapboxGL.RasterSource {...rasterSourceProps}>
          <MapboxGL.RasterLayer
            layerIndex={100}
            id="stamenWatercolorLayer"
            sourceID="stamenWatercolorSource"
            style={{rasterOpacity: 1}}
          /> */}
        {/* </MapboxGL.RasterSource> */}
      </MapboxGL.MapView>
    </View>
  );
}

export default DJmap;

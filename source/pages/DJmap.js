import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
// import MapboxGL from '@mapbox/react-native-mapbox-gl';
import MapboxGL from '@react-native-mapbox-gl/maps';

function DJmap() {
  MapboxGL.setAccessToken(
    'pk.eyJ1IjoiZGp4YyIsImEiOiJjanlxdzNlbW0wNHNyM29yMzZibHczOHlpIn0.TOUXgB6IHHhnmA6RsL6pWw',
  );
  const layerStyles = {
    singlePoint: {
      circleColor: 'green',
      circleOpacity: 0.84,
      circleStrokeWidth: 2,
      circleStrokeColor: 'white',
      circleRadius: 5,
      circlePitchAlignment: 'map',
    },

    clusteredPoints: {
      circlePitchAlignment: 'map',

      circleColor: [
        'step',
        ['get', 'point_count'],
        '#51bbd6',
        100,
        '#f1f075',
        750,
        '#f28cb1',
      ],

      circleRadius: ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],

      circleOpacity: 0.84,
      circleStrokeWidth: 2,
      circleStrokeColor: 'white',
    },

    clusterCount: {
      textField: '{point_count}',
      textSize: 12,
      textPitchAlignment: 'map',
    },
  };

  return (
    <View style={styles.mapContain}>
      <View style={styles.menuMap}>
        <TouchableOpacity
          style={styles.footerHome}
          onPress={() => btnOnPress()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>热力图</Text>
          </View>
        </TouchableOpacity>
      </View>
      <MapboxGL.MapView style={styles.mapView} onPress={Latlon}>
        <MapboxGL.Camera
          zoomLevel={6}
          centerCoordinate={[122.452652, 37.762963]}
        />

        <MapboxGL.ShapeSource
          id="earthquakes"
          url="https://www.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson">
          <MapboxGL.HeatmapLayer
            id="earthquakes"
            sourceID="earthquakes"
            style={{
              heatmapColor: [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(33,102,172,0)',
                0.2,
                'rgb(103,169,207)',
                0.4,
                'rgb(209,229,240)',
                0.6,
                'rgb(253,219,199)',
                0.8,
                'rgb(239,138,98)',
                1,
                'rgb(178,24,43)',
              ],
            }}
          />
        </MapboxGL.ShapeSource>

        {/* <MapboxGL.UserLocation onPress={onUserMarkerPress} /> */}
        {/* <MapboxGL.ShapeSource
          id="earthquakes"
          cluster
          clusterRadius={50}
          clusterMaxZoom={14}
          url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson">
          <MapboxGL.SymbolLayer
            id="pointCount"
            style={layerStyles.clusterCount}
          />

          <MapboxGL.CircleLayer
            id="clusteredPoints"
            belowLayerID="pointCount"
            filter={['has', 'point_count']}
            style={layerStyles.clusteredPoints}
          />

          <MapboxGL.CircleLayer
            id="singlePoint"
            filter={['!', ['has', 'point_count']]}
            style={layerStyles.singlePoint}
          />
        </MapboxGL.ShapeSource> */}
      </MapboxGL.MapView>
    </View>
  );

  function btnOnPress() {
    Alert.alert('hello');
  }

  function Latlon(evt) {
    let coord = evt.geometry.coordinates;
    Alert.alert('经度：' + coord[0] + '; 纬度：' + coord[1]);
  }

  function onUserMarkerPress() {
    Alert.alert('You pressed on the user location annotation');
  }
}

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    width: '100%',
    height: 50,
    backgroundColor: 'yellow',
  },
  mapContain: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },
  menuMap: {
    position: 'absolute',
    top: '10%',
    right: '10%',
    width: '10%',
    height: '10%',
    zIndex: 6,
    backgroundColor: 'yellow',
  },
});

export default DJmap;

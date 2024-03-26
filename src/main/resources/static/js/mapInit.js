// mapInit.js
// 이 모듈은 OpenLayers를 사용하여 지도를 초기화하고, 사용자에게 제공된 이미지를 기반으로 이미지 레이어를 추가합니다.

export function initMap(imageUrl) {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([126.98077198047636, 37.57851698970714]), // 서울현대미술관 위치
            zoom: 20 // 초기 줌 레벨 설정
        })
    });

    var imageLayer = new ol.layer.Image({
        source: new ol.source.ImageStatic({
            url: imageUrl,
            projection: 'EPSG:3857', // 좌표계 설정 (이 예시는 Web Mercator)
            imageExtent: [/* 이미지가 표시될 범위 설정 */]
        }),
        opacity: 1,
        visible: true
    });

    map.addLayer(imageLayer);

    return map;
}

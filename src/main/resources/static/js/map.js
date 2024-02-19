document.addEventListener('DOMContentLoaded', function () {
    var imageUrl = /*[[${imageUrl}]]*/ ''; // Thymeleaf를 통해 전달된 이미지 경로

    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([126.9784, 37.5790]), // 서울현대미술관 위치
            zoom: 20 // 초기 줌 레벨 설정
        })
    });

    // 이미지 레이어 생성
    var imageLayer = new ol.layer.Image({
        source: new ol.source.ImageStatic({
            url: imageUrl,
            projection: 'EPSG:3857', // 좌표계 설정 (이 예시는 Web Mercator)
            imageExtent: [/* 이미지가 표시될 범위 설정 (예: [minx, miny, maxx, maxy]) */]
        }),
        opacity: 1,
        visible: true
    });

    // 이미지 레이어 추가
    map.addLayer(imageLayer);
});

// mapClickEvent.js
// 이 모듈은 지도 클릭 이벤트를 처리하고, 클릭된 위치의 좌표를 콘솔에 출력합니다.

export function addMapClickEvent(map) {
    map.on('click', function(event) {
        var coordinate = event.coordinate; // 클릭된 위치의 좌표
        var lonLat = ol.proj.toLonLat(coordinate); // EPSG:3857에서 EPSG:4326으로 변환
        console.log(`Clicked at longitude: ${lonLat[0]}, latitude: ${lonLat[1]}`);
    });
}

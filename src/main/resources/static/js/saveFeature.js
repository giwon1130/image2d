// saveFeature.js
// 이 모듈은 사용자가 그린 선(피처)을 GeoJSON 형식으로 서버에 저장하는 기능을 제공합니다.
export function saveFeature(source) {
    document.getElementById('saveLine').addEventListener('click', function() {
        alert("선정보가 저장되는 로직(추가예정)");
        // var features = source.getFeatures();
        // var format = new ol.format.GeoJSON();
        // var geojsonStr = format.writeFeatures(features);
        //
        // fetch('/api/buildings', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: geojsonStr
        // })
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.error('Error:', error));
    });
}

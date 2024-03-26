// saveFeature.js
// 이 모듈은 사용자가 그린 선(피처)을 GeoJSON 형식으로 서버에 저장하는 기능을 제공합니다.

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

 document.getElementById('duplicateCheck').addEventListener('click', function(event) {
        alert("클릭 하셨습니다.")
    });
 document.getElementById('accountSubmit').addEventListener('click',function(event) {
     alert("제출 되었습니다.")
 });


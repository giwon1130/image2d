// drawInteraction.js
// 이 모듈은 사용자가 지도 위에 선을 그릴 수 있도록 그리기 인터랙션을 추가합니다.
export function addDrawInteraction(map, source) {
    var drawStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            width: 5
        })
    });

    var draw = new ol.interaction.Draw({
        source: source,
        type: 'LineString',
        style: drawStyle
    });

    // drawend 이벤트 리스너 추가
    draw.on('drawend', function(event) {
        var feature = event.feature; // 완성된 선(Feature) 가져오기

        // 완성된 선에 적용할 새로운 스타일 정의
        var completedLineStyle = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'red', // 색상 변경
                width: 7 // 굵기 변경
            })
        });

        // 완성된 선(Feature)에 새 스타일 적용
        feature.setStyle(completedLineStyle);
    });

    map.addInteraction(draw);

    return draw;
}



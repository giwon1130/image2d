// main.js

import { initMap } from './mapInit.js';
import { addDrawInteraction } from './drawInteraction.js';
import { addSnapInteraction } from './snapInteraction.js';
import { saveFeature } from './saveFeature.js';
import { addMapClickEvent } from './mapClickEvent.js'; // mapClickEvent 모듈 가져오기
import { initializeImageInteraction } from './imageInteraction.js';

document.addEventListener('DOMContentLoaded', function () {
    var imageUrl = /*[[${imageUrl}]]*/ ''; // Thymeleaf로부터 전달된 이미지 경로
    var map = initMap(imageUrl);

    let drawInteraction = null; // 선 그리기 인터랙션을 위한 변수 초기화
    let snapInteraction = null; // 선 그리기 인터랙션을 위한 변수 초기화
    var source = new ol.source.Vector({wrapX: false});
    var vector = new ol.layer.Vector({source: source});
    map.addLayer(vector);

    addSnapInteraction(map, source);
    saveFeature(source);
    addMapClickEvent(map); // 지도 클릭 이벤트 처리 함수 호출

    // 라디오 버튼 상태 변경 감지
    document.querySelectorAll('input[name="mode"]').forEach(function(radio) {
        radio.addEventListener('change', function (event) {
            if (event.target.value === 'draw') {
                // 선 그리기 모드 선택 시
                if (!drawInteraction) { // 인터랙션이 아직 추가되지 않았다면
                    drawInteraction = addDrawInteraction(map, source);
                    // Snap 인터랙션 활성화
                    snapInteraction = addSnapInteraction(map, source);
                }
            } else {
                // 일반 모드 선택 시
                if (drawInteraction) {
                    map.removeInteraction(drawInteraction);
                    drawInteraction = null; // 인터랙션 참조 제거
                    // Snap 인터랙션 비활성화
                    if (snapInteraction) {
                        map.removeInteraction(snapInteraction);
                        snapInteraction = null;
                    }
                }
            }
        });
    });

    // 이미지 스케일 조절 슬라이더 값 변경 시 이벤트 리스너
    document.getElementById('imageScale').addEventListener('input', function(event) {
        document.getElementById('scaleValue').textContent = event.target.value + 'x'; // 'x'를 추가하여 배율임을 명시
    });

    // 선 그리기 및 기타 인터랙션 초기화...
    initializeImageInteraction(map); // 이미지 업로드 및 조작 기능 초기화



});

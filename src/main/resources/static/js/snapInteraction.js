// snapInteraction.js
// 이 모듈은 사용자가 선이나 지점을 그릴 때 기존의 지오메트리에 자동으로 스냅되도록 스냅 인터랙션을 추가합니다.
export function addSnapInteraction(map, source) {
    var snapInteraction = new ol.interaction.Snap({
        source: source // 선 그리기에 사용되는 벡터 소스
    });
    map.addInteraction(snapInteraction);
    return snapInteraction;
}

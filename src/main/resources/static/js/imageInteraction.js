// imageInteraction.js

export function initializeImageInteraction(map) {
    let selectedImageLayer = null;
    let originalExtent = null; // 이미지 레이어 생성 시 원본 extent 저장

    // 이미지 업로드 이벤트 리스너
    document.getElementById('imageUpload').addEventListener('change', function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();

            reader.onload = function(e) {
                const imgSrc = e.target.result;
                if(selectedImageLayer) {
                    map.removeLayer(selectedImageLayer); // 이전 이미지 레이어 제거
                }
                displayImageOnMap(map, imgSrc);
            };

            reader.readAsDataURL(file);
        }
    });

    // 이미지 맵에 표시
    function displayImageOnMap(map, imgSrc) {
        originalExtent = map.getView().calculateExtent(map.getSize()); // 이미지 추가 시 원본 extent 저장

        var imgLayer = new ol.layer.Image({
            source: new ol.source.ImageStatic({
                url: imgSrc,
                imageExtent: originalExtent
            })
        });
        map.addLayer(imgLayer);
        selectedImageLayer = imgLayer; // 현재 선택된 이미지 레이어 설정

        // 이미지 레이어에 대한 Translate 인터랙션 추가
        addImageTranslateInteraction(map, imgLayer);

        // 추가: 이미지 스케일 조절 기능 초기화
        initializeImageScaleInteraction(map, imgLayer);

        // 추가: 이미지 회전 기능 초기화
        initializeImageRotateInteraction(map, imgLayer);

    }

    // 이미지 투명도 조절
    document.getElementById('imageOpacity').addEventListener('input', function(event) {
        if (selectedImageLayer) {
            var opacity = parseFloat(event.target.value);
            selectedImageLayer.setOpacity(opacity);
        }
    });

    // 이미지 레이어를 위한 Translate 인터랙션 추가
    function addImageTranslateInteraction(map, imgLayer) {
        const translate = new ol.interaction.Translate({
            layers: [imgLayer] // 이동할 레이어 지정
        });

        map.addInteraction(translate);
    }

    // 추가: 이미지 스케일 조절 기능 초기화
    function initializeImageScaleInteraction(map, imgLayer) {
        document.getElementById('imageScale').addEventListener('input', function(event) {
            const scale = parseFloat(event.target.value);

            // 초기 extent를 기반으로 스케일 조정된 새로운 extent 계산
            const scaledExtent = [
                originalExtent[0],
                originalExtent[1],
                originalExtent[0] + (originalExtent[2] - originalExtent[0]) * scale,
                originalExtent[1] + (originalExtent[3] - originalExtent[1]) * scale,
            ];

            // 새로운 이미지 소스를 생성하여 현재 이미지 레이어에 설정
            const newSource = new ol.source.ImageStatic({
                url: imgLayer.getSource().getUrl(),
                imageExtent: scaledExtent,
                projection: map.getView().getProjection()
            });

            imgLayer.setSource(newSource);
        });
    }

    // 회전 조절 기능 초기화
    function initializeImageRotateInteraction(map, imgLayer) {
        document.getElementById('imageRotate').addEventListener('input', function(event) {
            const angle = parseFloat(event.target.value); // 회전 각도
            const imgSrc = imgLayer.getSource().getUrl(); // 현재 이미지 레이어의 소스 URL
            rotateImageAndSetSource(imgSrc, angle, imgLayer);
        });
    }

    function rotateImageAndSetSource(imgSrc, angle, imgLayer) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const image = new Image();
        image.onload = function() {
            // Canvas 크기를 이미지 크기에 맞게 조정
            canvas.width = image.width;
            canvas.height = image.height;

            // 이미지 회전
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(angle * Math.PI / 180);
            ctx.drawImage(image, -image.width / 2, -image.height / 2);

            // 회전된 이미지를 OpenLayers 이미지 레이어 소스로 설정
            const rotatedImgSrc = canvas.toDataURL();
            const newSource = new ol.source.ImageStatic({
                url: rotatedImgSrc,
                imageExtent: imgLayer.getSource().getImageExtent(),
                projection: map.getView().getProjection()
            });

            imgLayer.setSource(newSource);
        };
        image.src = imgSrc;
    }

}

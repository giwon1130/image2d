package com.example.image2d.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageService {

    // 이미지를 저장하고 그 경로를 반환하는 메서드
    public String saveImage(MultipartFile file) {

        // 이미지를 저장하는 로직을 구현하고, 저장된 경로를 반환
        // 예를 들어, 저장된 이미지의 경로는 서버의 파일 시스템 경로일 수 있습니다.
        // 여기서는 단순히 임시로 이미지 경로를 생성하여 반환하는 예시를 작성합니다.
        return "/images/" + file.getOriginalFilename();
    }
}

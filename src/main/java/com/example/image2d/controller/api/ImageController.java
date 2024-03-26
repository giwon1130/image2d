package com.example.image2d.controller.api;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.image2d.service.ImageService;

@RestController
@RequestMapping("/api/image")
public class ImageController {

    private final ImageService imageService; // 이미지 서비스

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping("/upload")
    public String handleFileUpload(@RequestParam("imageFile") MultipartFile file, Model model) {
        String imageUrl = imageService.saveImage(file); // 이미지를 저장하고 저장된 경로를 가져옴
        model.addAttribute("imageUrl", imageUrl); // 모델에 이미지 경로 추가
        return "redirect:/index";
    }
}

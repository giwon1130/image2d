package com.example.image2d.controller.api;

import java.util.List;

import org.locationtech.jts.geom.LineString;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.image2d.dto.BuildingOutlineDTO;
import com.example.image2d.service.BuildingOutlineService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/buildings")
public class BuildingOutlineController {

    private final BuildingOutlineService service;

    @PostMapping
    public ResponseEntity<BuildingOutlineDTO> createBuildingOutline(@RequestBody BuildingOutlineDTO dto) {
        LineString outline = null; // Convert DTO to LineString
        // BuildingOutline savedOutline = service.saveBuildingOutline(outline);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<BuildingOutlineDTO>> getAllBuildingOutlines() {
        // List<BuildingOutline> outlines = service.getAllBuildingOutlines();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // More endpoints ...
}

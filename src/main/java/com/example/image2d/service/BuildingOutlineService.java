package com.example.image2d.service;

import java.util.List;

import org.locationtech.jts.geom.LineString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.image2d.entity.BuildingOutline;
import com.example.image2d.repository.BuildingOutlineRepository;

@Service
public class BuildingOutlineService {

    private final BuildingOutlineRepository repository;

    @Autowired
    public BuildingOutlineService(BuildingOutlineRepository repository) {
        this.repository = repository;
    }

    public BuildingOutline saveBuildingOutline(LineString outline) {
        BuildingOutline buildingOutline = new BuildingOutline();
        buildingOutline.setOutline(outline);
        return repository.save(buildingOutline);
    }

    public List<BuildingOutline> getAllBuildingOutlines() {
        return repository.findAll();
    }

    // More methods ...
}

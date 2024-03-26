package com.example.image2d.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.image2d.entity.BuildingOutline;

public interface BuildingOutlineRepository extends JpaRepository<BuildingOutline, Long> {
    // Custom query methods if needed
}


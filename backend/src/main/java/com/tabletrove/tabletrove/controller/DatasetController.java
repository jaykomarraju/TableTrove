package com.tabletrove.tabletrove.controller;

import com.tabletrove.tabletrove.model.Dataset;
import com.tabletrove.tabletrove.repository.DatasetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@CrossOrigin(origins = "*") // Enable CORS for all origins
@RestController
@RequestMapping("/api/datasets")
public class DatasetController {

    @Autowired
    private DatasetRepository datasetRepository;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadDataset(@RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("file") MultipartFile file) {
        try {
            String csvContent = new String(file.getBytes(), StandardCharsets.UTF_8);
            Dataset dataset = new Dataset(title, description, csvContent);
            datasetRepository.save(dataset);
            return ResponseEntity.ok("Dataset uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error uploading dataset");
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<Dataset>> listDatasets() {
        List<Dataset> datasets = datasetRepository.findAll();
        return ResponseEntity.ok(datasets);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Dataset> getDataset(@PathVariable String id) {
        return datasetRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}

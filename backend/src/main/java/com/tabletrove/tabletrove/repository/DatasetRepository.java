package com.tabletrove.tabletrove.repository;

import com.tabletrove.tabletrove.model.Dataset;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DatasetRepository extends MongoRepository<Dataset, String> {
    // Additional custom query methods can be added here if needed in the future.
    // For example, you might add a method to find datasets by title or other attributes.
}

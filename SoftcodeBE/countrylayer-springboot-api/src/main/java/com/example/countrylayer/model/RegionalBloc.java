package com.example.countrylayer.model;

import java.util.List;

public record RegionalBloc(String acronym, String name, List<String> otherAcronyms, List<String> otherNames) {}

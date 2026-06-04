package com.example.countrylayer.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "countrylayer")
public record CountryLayerProperties(String dataFile, Security security) {
    public record Security(boolean requireAccessKey, String accessKey) {}
}

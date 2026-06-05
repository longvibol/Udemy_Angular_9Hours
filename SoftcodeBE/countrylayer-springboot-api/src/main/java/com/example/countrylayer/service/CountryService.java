package com.example.countrylayer.service;

import com.example.countrylayer.config.CountryLayerProperties;
import com.example.countrylayer.exception.NotFoundException;
import com.example.countrylayer.exception.UnauthorizedException;
import com.example.countrylayer.model.Country;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.InputStream;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;

@Service
public class CountryService {
    private final ObjectMapper objectMapper;
    private final ResourceLoader resourceLoader;
    private final CountryLayerProperties properties;
    private List<Country> countries = List.of();

    public CountryService(ObjectMapper objectMapper, ResourceLoader resourceLoader, CountryLayerProperties properties) {
        this.objectMapper = objectMapper;
        this.resourceLoader = resourceLoader;
        this.properties = properties;
    }

    @PostConstruct
    void loadCountries() throws Exception {
        Resource resource = resourceLoader.getResource(properties.dataFile());
        try (InputStream inputStream = resource.getInputStream()) {
            countries = objectMapper.readValue(inputStream, new TypeReference<List<Country>>() {})
                    .stream()
                    .sorted(Comparator.comparing(Country::name, String.CASE_INSENSITIVE_ORDER))
                    .toList();
        }
    }

    public void validateAccessKey(String accessKey) {
        if (properties.security() != null && properties.security().requireAccessKey()) {
            if (!StringUtils.hasText(accessKey) || !accessKey.equals(properties.security().accessKey())) {
                throw new UnauthorizedException("Invalid or missing access_key");
            }
        }
    }

    public List<Country> findAll() {
        return countries;
    }

    public List<Country> findByName(String name) {
        return requireResults(countries.stream()
                .filter(c -> contains(c.name(), name) || listContains(c.altSpellings(), name))
                .toList(), "No country found with name: " + name);
    }

    public List<Country> findByCapital(String capital) {
        return requireResults(countries.stream()
                .filter(c -> contains(c.capital(), capital))
                .toList(), "No country found with capital: " + capital);
    }

    public List<Country> findByLanguage(String language) {
        return requireResults(countries.stream()
                .filter(c -> c.languages() != null && c.languages().stream().anyMatch(l ->
                        equalsIgnoreCase(l.iso639_1(), language) || equalsIgnoreCase(l.iso639_2(), language) || contains(l.name(), language)))
                .toList(), "No country found with language: " + language + ". Current sample data does not include language fields.");
    }

    public List<Country> findByCurrency(String currency) {
        return requireResults(countries.stream()
                .filter(c -> c.currencies() != null && c.currencies().stream().anyMatch(cur ->
                        equalsIgnoreCase(cur.code(), currency) || contains(cur.name(), currency) || equalsIgnoreCase(cur.symbol(), currency)))
                .toList(), "No country found with currency: " + currency + ". Current sample data does not include currency fields.");
    }

    public List<Country> findByRegion(String region) {
        return requireResults(countries.stream()
                .filter(c -> equalsIgnoreCase(c.region(), region))
                .toList(), "No country found in region: " + region);
    }

    public List<Country> findByRegionalBloc(String bloc) {
        return requireResults(countries.stream()
                .filter(c -> c.regionalBlocs() != null && c.regionalBlocs().stream().anyMatch(b ->
                        equalsIgnoreCase(b.acronym(), bloc) || contains(b.name(), bloc)))
                .toList(), "No country found in regional bloc: " + bloc + ". Current sample data does not include regional bloc fields.");
    }

    public List<Country> findByCallingCode(String code) {
        return requireResults(countries.stream()
                .filter(c -> c.callingCodes() != null && c.callingCodes().stream().anyMatch(v -> equalsIgnoreCase(v, code)))
                .toList(), "No country found with calling code: " + code);
    }

    public Country findByAlphaCode(String code) {
        return countries.stream()
                .filter(c -> equalsIgnoreCase(c.alpha2Code(), code) || equalsIgnoreCase(c.alpha3Code(), code))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No country found with alpha code: " + code));
    }

    private List<Country> requireResults(List<Country> results, String message) {
        if (results.isEmpty()) throw new NotFoundException(message);
        return results;
    }

    private boolean contains(String value, String search) {
        return value != null && search != null && value.toLowerCase(Locale.ROOT).contains(search.toLowerCase(Locale.ROOT));
    }

    private boolean listContains(List<String> values, String search) {
        return values != null && values.stream().anyMatch(v -> contains(v, search));
    }

    private boolean equalsIgnoreCase(String value, String search) {
        return value != null && search != null && value.equalsIgnoreCase(search);
    }
}

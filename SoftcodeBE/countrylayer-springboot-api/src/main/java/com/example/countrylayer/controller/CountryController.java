package com.example.countrylayer.controller;

import com.example.countrylayer.model.Country;
import com.example.countrylayer.service.CountryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/countries")
@CrossOrigin(origins = "*")
public class CountryController {
    private final CountryService countryService;
    
    

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping
    public List<Country> allCountries(@RequestParam(required = false, name = "access_key") String accessKey) {
        countryService.validateAccessKey(accessKey);
        return countryService.findAll();
    }

    @GetMapping("/name/{name}")
    public List<Country> byName(@PathVariable String name, @RequestParam(required = false, name = "access_key") String accessKey) {
        countryService.validateAccessKey(accessKey);
        return countryService.findByName(name);
    }

    @GetMapping("/capital/{capital}")
    public List<Country> byCapital(@PathVariable String capital, @RequestParam(required = false, name = "access_key") String accessKey) {
        countryService.validateAccessKey(accessKey);
        return countryService.findByCapital(capital);
    }

    @GetMapping("/language/{language}")
    public List<Country> byLanguage(@PathVariable String language, @RequestParam(required = false, name = "access_key") String accessKey) {
        countryService.validateAccessKey(accessKey);
        return countryService.findByLanguage(language);
    }

    @GetMapping("/currency/{currency}")
    public List<Country> byCurrency(@PathVariable String currency, @RequestParam(required = false, name = "access_key") String accessKey) {
        countryService.validateAccessKey(accessKey);
        return countryService.findByCurrency(currency);
    }

    @GetMapping("/region/{region}")
    public List<Country> byRegion(@PathVariable String region, @RequestParam(required = false, name = "access_key") String accessKey) {
        countryService.validateAccessKey(accessKey);
        return countryService.findByRegion(region);
    }

    @GetMapping("/regionalbloc/{bloc}")
    public List<Country> byRegionalBloc(@PathVariable String bloc, @RequestParam(required = false, name = "access_key") String accessKey) {
        countryService.validateAccessKey(accessKey);
        return countryService.findByRegionalBloc(bloc);
    }

    @GetMapping("/callingcode/{code}")
    public List<Country> byCallingCode(@PathVariable String code, @RequestParam(required = false, name = "access_key") String accessKey) {
        countryService.validateAccessKey(accessKey);
        return countryService.findByCallingCode(code);
    }

    @GetMapping("/alpha/{code}")
    public Country byAlphaCode(@PathVariable String code, @RequestParam(required = false, name = "access_key") String accessKey) {
        countryService.validateAccessKey(accessKey);
        return countryService.findByAlphaCode(code);
    }
}

package com.example.countrylayer.model;

import java.util.List;

public record Country(
        String name,
        List<String> topLevelDomain,
        String alpha2Code,
        String alpha3Code,
        List<String> callingCodes,
        String capital,
        List<String> altSpellings,
        String region,
        String subregion,
        Long population,
        List<Language> languages,
        List<Currency> currencies,
        List<RegionalBloc> regionalBlocs
) {}

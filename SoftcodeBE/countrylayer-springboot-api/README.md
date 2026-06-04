# CountryLayer Style API

Spring Boot 4.0.6 + Java 25 REST API that returns country data from `src/main/resources/countries.json`.

## Run

```bash
mvn spring-boot:run
```

Open Swagger UI:

```text
http://localhost:8080/swagger-ui.html
```

## Endpoints

```text
GET /api/countries
GET /api/countries/name/{name}
GET /api/countries/capital/{capital}
GET /api/countries/language/{language}
GET /api/countries/currency/{currency}
GET /api/countries/region/{region}
GET /api/countries/regionalbloc/{bloc}
GET /api/countries/callingcode/{code}
GET /api/countries/alpha/{code}
```

## Examples

```bash
curl http://localhost:8080/api/countries
curl http://localhost:8080/api/countries/name/cambodia
curl http://localhost:8080/api/countries/capital/phnom%20penh
curl http://localhost:8080/api/countries/region/Asia
curl http://localhost:8080/api/countries/callingcode/855
curl http://localhost:8080/api/countries/alpha/KH
```

## Optional access key

In `application.yml`, set:

```yaml
countrylayer:
  security:
    require-access-key: true
    access-key: my-secret-key
```

Then call:

```bash
curl "http://localhost:8080/api/countries?access_key=my-secret-key"
```

## Important

The attached sample data contains these fields: `name`, `topLevelDomain`, `alpha2Code`, `alpha3Code`, `callingCodes`, `capital`, `altSpellings`, and `region`. The project already supports `language`, `currency`, and `regionalbloc` endpoints, but those endpoints need data fields added to `countries.json` to return results.

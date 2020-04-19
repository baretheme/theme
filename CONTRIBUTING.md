# Contributing to Baretheme
## Running tests
### Seeds
Tests are using faker.js to generate random data. Random data can be hard to reproduce if there is an error. That's why every test generates a hash and logs it. If you want to rerun you can simply run it via `FAKER_SEED=xxx yarn test`.
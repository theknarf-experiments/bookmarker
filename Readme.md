# bookmarker

Bookmarking, clippings, annotation, archiving and research app

The primary usecase we wish to solve is a better bookmarking service.
It should provide full-text search on all bookmarked pages as well
as web archives for them so that one can see a webpage even if it goes down.

Instead of folders as many bookmarking servieces use to organize the bookmarks
I'd like to use tags.

# TODO

## 1
- [done] create dbml script

- [done] setup db script for converting dbml to sql

- [done] test and commit

## 2

- [done] setup docker-compose file with postgres and adminer (postgres web ui)

- set postgress password from an enviroment variable (or to a random password?)

- add commander to the db script

  - Add one command to print out the sql

  - Add one command to connect to a postgres db and run it

  - Add one command to add a new user in the user table

- test that it works and make a commit

## 3
- setup [esqlate](https://github.com/forbesmyester/esqlate) to start prototyping sql queries

- make some sql queries / esqlate config files

- test it and make a commit

## 4
- setup [hasura](https://github.com/hasura/graphql-engine/) or [PostGraphile](https://github.com/graphile/postgraphile)

- create and setup some graphql schemas

- test it in graphiql / postman (make a commit)

## 5
- setup create-react-app + react-router + apollo-graphql

- create a simple app

- ...

## 6 and beyond
- create an auth layer and fix login in the react app

- setup traefik

- extend db script to include migrations

- setup storybook  + tailwind-css

	- make and style components

- split docker-compose into a local-dev and prod variant

- create terraform script

	- deploy solution to digitalocean

	- if I mage a tutorial out of this, add ref link

## even more beyond

- setup @testing-library/react and write some tests

- setup cypress and write some tests

# Rust notes

- https://graphql-rust.github.io/
- https://graphql-rust.github.io/quickstart.html
- https://github.com/graphql-rust/juniper/tree/master/juniper_hyper

# JS / TS Notes

- https://github.com/dotansimha/graphql-code-generator

# Andre linker

- https://www.w3.org/TR/annotation-model/
- https://github.com/hypothesis/h
- https://news.ycombinator.com/item?id=21855986
- https://github.com/szymonkaliski/archivist
- https://news.ycombinator.com/item?id=21998632
- https://news.ycombinator.com/item?id=21939412
- https://en.wikipedia.org/wiki/Web_ARChive

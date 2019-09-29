# Express + Apollo GraphQL + MongoDB back end Demo

## About

This is a demo of a stack using Express, Apollo GraphQL Server, and MongoDB on the back end. The purpose is to set up and document the use of these technologies for potential use in a LambdaSchool labs application.

## Instructions

`yarn install`

`yarn start`

---

## Links

[Get started with Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/)

[Install MongoDB Community Edition - MongoDB Manual](https://docs.mongodb.com/manual/administration/install-community/)

[MongoDB Compass](https://www.mongodb.com/download-center/compass)

[Mongoose v5.7.2: Schemas](https://mongoosejs.com/docs/guide.html)

---

## Notes

## Install initial dependencies

### Dependencies

`yarn add express apollo-server graphql mongoose`

### Dev Dependencies

`yarn add -D @babel/preset-env @babel/cli @babel/node @babel/core nodemon`

## Initialize for dev environment

### Babel config file

Create a `.babelrc` config file with the following contents:

```json
{
  "presets": ["@babel/preset-env"]
}
```

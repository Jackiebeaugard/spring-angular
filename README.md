# Spring Angular Demo Application

## Prep work: How to use this application
- [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) this repository
- Open spring-backend in IntelliJ or your java IDE of choice, and run it
- In Terminal or Git Bash, navigate to the angular-frontend directory
- Run `npm install`
- Run `ng serve --proxy-config proxy.conf.json`
- Open your browser, and navigate to http://localhost:4200  

** *Note, not all features are fully built out for this demo application. Try to add one of your own!*

## Step 1: Create your project
- Create a new project in IntelliJ using Spring Initializr, or via https://start.spring.io
- Project options:
  - Project SDK: openjdk-15 or whatever the default is
  - Starter service URL: Default https://start.spring.io
  - Group: com.example
  - Artifact: task_manager
  - Type: Gradle
  - Language: Java
  - Packaging: Jar
  - Java version: 11
  - Version/Name/Description/Package: leave as default
- Dependencies: 
  - Web: Spring Web, to get the REST controllers, request mappings
  - SQL: Spring Data JPA, to make it easier to access/save data in the database; you may see it referred to as an ORM, or [Object Relational Mapper](https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a)
  - SQL: H2 Database, lightweight in-memory database with minimal configuration
- That's it! Click Next > Finish or Generate, depending on whether you're in Intellij or https://start.spring.io

* Also, feel free to bookmark or fork this repository to refer to later

## Concepts: MVC vs API
### MVC: Model, View, Controller
  - A software design pattern that separates an application into three main logical components
    - Model: describes the data and its related logic
    - View: presentation of the data
    - Controller: controls user interation
  - Examples
    - From our P12 Week 1 Spring MVC assignment: https://github.com/spring-guides/gs-validating-form-input
### API: Application Programming Interface
  - What is an API?
    - An API provides a set of "exposed" end points that allow software programs to interact with each other
    - https://www.howtogeek.com/343877/what-is-an-api/
    - In English, please: https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/
  - What is REST?
    - An architectural style that provides certain standards for API development, such as the HTTP verbs GET/PUT/POST/DELETE
      - GET: retrieve a specific resource (by id) or a collection of resources
      - POST: create a new resource
      - PUT: update a specific resource (by id)
      - DELETE: remove a specific resource by id

## Step 2: Create your Model
- What data types and annotations do we need to use here?
- Generate constructor(s)
- Generate getters/setters

## Step 3: Create your Repository
- Extend JpaRepository
- https://www.baeldung.com/spring-data-repositories
- We don't need to put anything in here yet.
- https://www.baeldung.com/spring-data-derived-queries

## Step 4: Create your Controller
- Autowire your Repository
- Generate CRUD functionality in your controller - there should be one method each for 
  - Create: GET mapping
  - Read: POST mapping
  - Update: PUT mapping
  - Delete: DELETE mapping
- What annotations do we need here? What are they doing for us?
  - https://www.baeldung.com/spring-controller-vs-restcontroller
  - https://www.baeldung.com/spring-request-response-body
  - Serialization/Deserialization are...words - but what do they mean? 
    - What is Deserialization: https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html#what-is-deserialization

## Communicating with the front end application
- Now look at how we have added the `@CrossOrigin` annotation in TaskController.java - this will allow us to make requests locally from a separate front end application
  - Why is this necessary? Check out this resource on CORS: [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- Try running angular-frontend at the same time as your java project, and go to `localhost:4200/` in your browser

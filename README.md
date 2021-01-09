# TODO Demo Application

Start directory: start here!

## Step 1
- Create a new project in IntelliJ using Spring Initializr, or via https://start.spring.io
- Project SDK: openjdk-15 or whatever the default is, starter service URL: Default https://start.spring.io
- Group: com.example, Artifact: todo, type: Gradle, Language: Java, Packaging: Jar, Java version: 11, Version/Name/Description/Package: leave as default
- Dependencies: 
  - Web: Spring Web, to get the REST controllers, @Get/@Post mappings
  - SQL: Spring Data JPA, to make it easier to access/save data in the database; you may see it referred to as an ORM, or [Object Relational Mapper](https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a)
  - SQL: H2 Database, lightweight in-memory database with minimal configuration
- That's it! Click Next > Finish or Generate, depending on whether you're in Intellij or https://start.spring.io
- Alternately you can simply download or clone this entire repository, and open this directory in your IDE.

Java directory: basic java application, the initial end goal!

Stretch goal: this is what you can do!

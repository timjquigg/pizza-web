# Pizza Web

## Description

A basic full-stack web app made to practice minimal API, ASP.NET Core and a React front end. Project was started from the Microsoft Learn course - [Create web apps and services with ASP.NET Core, minimal API, and .NET 6](https://learn.microsoft.com/en-us/training/paths/aspnet-core-minimal-api/).

The application has a simple RESTFUL API that allows for CRUD opperations. The original course stops at just reading from the API. I have added the Create, Update, and Delete functionality.

## Technology Used

### Front End:

- React.js
- Styled Components
- ASP.NET
- minimal API
- Entity Framework core
- SQLite

## Getting Started

1. Clone the repository
2. Install Node dependencies with `npm install`.
3. Run `npm run dev` in the command line to start the Webpack React server as well as the .NET API server.

Note, the first time the API server is run, it will download and install required packages for the .NET application. If preferred, you can trigger an install by changing to the PizzaStore directory and restoring the packages.

```
cd PizzaStore
dotnet restore
```

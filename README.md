# emberjs-dynamic-tables

The basic EmberJS app that displays a table with dynamic columns. It uses Ember Mirage as a mock api and can be ran from docker-compose or npm. 

## Prerequisites

You will need the following things installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Docker](https://www.docker.com/) (for Docker Compose method)

## Installation

* `git clone https://github.com/rast22/emberjs-dynamic-tables.git` 
* `cd emberjs-dynamic-tables` (if not already in the directory)

## Running 

### Using npm

* `npm install`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Using Docker Compose

* Ensure Docker is running on your machine.
* `docker-compose up` (builds and starts the container)
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Development Progress

- **Application Setup** - ![100%](https://progress-bar.dev/100) 
  - [x] Set up a new Ember.js application. 
  - [x] Ensure the application uses the latest Ember.js version.

- **Data Model** - ![100%](https://progress-bar.dev/100)
  - [x] Define a data model based on `keywords-results.json`.

- **API Integration** - ![100%](https://progress-bar.dev/100)
  - [x] Simulate an API using Ember's Mirage.
  - [x] The API returns data in JSON format.

- **Data Loading and Rendering** - ![100%](https://progress-bar.dev/100)
  - [x] Implement a service in Ember.js to fetch data.
  - [x] Display a loading indicator while fetching data.

- **Dynamic Columns** ![0%](https://progress-bar.dev/0)
  - [ ] Logic to dynamically load table data.

- **Table Implementation** - ![50%](https://progress-bar.dev/50)
  - [x] Use Ember components for table structure.
  - [ ] Implement sorting/filtering if desired.

- **Error Handling** - ![20%](https://progress-bar.dev/20)
  - [ ] Implement error handling for data fetching.

- **Testing** - ![0%](https://progress-bar.dev/0)
  - [ ] Write unit tests covering dynamic functionality.

- **Documentation** - ![80%](https://progress-bar.dev/80)
  - [ ] Clear documentation on setup and running the application.

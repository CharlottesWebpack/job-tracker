# Jager

> Organize your job hunt.

## Team

  - __Product Owner__: Valerie Ernst
  - __Scrum Master__: Iana Andrychowicz
  - __Development Team Members__: Nick Fortner, Aprajita Jain, Nikshala

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

Jager is meant to simplify the job hunting process. It is a place to store and track job applications, keep up on current events, and identify stregths and weaknesses in the journey to employment.

To use the app, create a username and password through the signup page, then login. Once inside, you can add, remove, or edit job postings. The convenient summary view allows you to see all of your applications in one place while the expanded view allows you to dig into the details of evrey prospective job. You can be sure you are prepared for your interveiws by checking out current events for each company with the Get News feature.

You can also keep track of your performace

## Tech Stack

Angular for the front end
Node.js with Express for the server
MongoDB with Mongoose as an ORM

## Development

### Installing Dependencies

From within the root directory:

1. Run npm install
2. For local environments, create a config.js file that contains an export of a db object with a username and password. Here is a sample format:

module.exports = {
  db: {
   user: 'yourUsername',
   password: 'yourPassword'
  }
};

3. For local environments, create a configGoogle.js file that contains info for the google API. Here is a sample:
module.exports.googleConfig = {
"GOOGLE_API_URL":"https://www.googleapis.com/customsearch/v1",
"SEARCH_ENGINE_ID":"yourEngineID",
"API_KEY":"yourAPIKey"
};


### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
COMMIT STANDARD:
"[WHAT ACTION](WHERE): what you did {initials}"
example:
"[FEATURE](Client): created search bar {I.A.}"

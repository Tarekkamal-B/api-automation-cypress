# 🚀 Cypress API Automation Project

This project uses [Cypress](https://www.cypress.io/) to perform automated API testing on public REST APIs such as [JSONPlaceholder](https://jsonplaceholder.typicode.com/), [ReqRes](https://reqres.in/), and [Simple Books API](https://simple-books-api.glitch.me). It covers HTTP methods, query parameters, authorization headers, JSON response parsing, and response validations.

---

## 📁 Project Structure

```

cypress-api-automation/
├── cypress/
│   ├── fixtures/
│   │   └── PostRequestBody.json
│   └── e2e/
│       └── APITesting/
│           ├── HTTPRequest.cy.js
│           ├── PostCalls.cy.js
│           ├── QueryParams.cy.js
│           ├── HeadersAndCookiesAndBearerTokenAuth.cy.js
│           └── ParsingJSONResponse.cy.js
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## 📦 Prerequisites

* [Node.js](https://nodejs.org/) (v14 or later)
* npm (comes with Node.js)

---

## 🔧 Installation

```bash
# Clone the repo
git clone <https://github.com/Tarekkamal-B/api-automation-cypress>
cd cypress-api-automation

# Install dependencies
npm install
```

---

## 🚀 Running the Tests

### Open Cypress Test Runner (GUI)

```bash
npx cypress open
```

### Run All Tests in Headless Mode (CLI)

```bash
npx cypress run
```

### Run a Specific Test File

```bash
npx cypress run --spec "cypress/e2e/APITesting/HTTPRequest.cy.js"
npx cypress run --spec "cypress/e2e/APITesting/PostCalls.cy.js"
npx cypress run --spec "cypress/e2e/APITesting/QueryParams.cy.js"
npx cypress run --spec "cypress/e2e/APITesting/HeadersAndCookiesAndBearerTokenAuth.cy.js"
npx cypress run --spec "cypress/e2e/APITesting/ParsingJSONResponse.cy.js"
```

---

## ✅ Covered Test Cases

### 📄 `HTTPRequest.cy.js`

| HTTP Method | Endpoint   | Description             |
| ----------- | ---------- | ----------------------- |
| GET         | `/posts`   | Fetch all posts         |
| POST        | `/posts`   | Create a new post       |
| PUT         | `/posts/1` | Update an existing post |
| DELETE      | `/posts/1` | Delete a post           |

---

### 📄 `PostCalls.cy.js`

| Approach  | Description                                |
| --------- | ------------------------------------------ |
| Hardcoded | Static JSON payload used in test           |
| Dynamic   | Randomly generated data used in test       |
| Fixture   | External JSON file used as request payload |

---

### 📄 `QueryParams.cy.js`

| Type        | Description                              |
| ----------- | ---------------------------------------- |
| Query Param | GET request with query string parameters |
| Assertions  | Page number, data length, user details   |

---

### 📄 `HeadersAndCookiesAndBearerTokenAuth.cy.js`

| Test Case           | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| Create Access Token | POST request to generate a Bearer token from Simple Books API |
| Create Order        | POST request with `Authorization: Bearer <token>` header      |
| Fetch All Orders    | GET request using auth header and optional cookie             |

---

### 📄 `ParsingJSONResponse.cy.js`

| Test Case                  | Description                                                               |
| -------------------------- | ------------------------------------------------------------------------- |
| Parsing Simple JSON        | Validates specific fields like title, price, and rating from product data |
| Parsing Complex JSON Array | Loops through JSON array to calculate and assert total price              |

---

## 📌 Notes

* JSONPlaceholder and ReqRes APIs do **not** persist data; they return successful responses for testing purposes.
* The Simple Books API supports Bearer token auth for protected routes like `/orders`.
* Designed for learning Cypress API automation with realistic request/response structures.
* The Fakestore API is used to demonstrate real-world JSON parsing techniques.

---



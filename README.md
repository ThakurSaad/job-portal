# Job Portal

[Live Server](https://job-portal-taupe.vercel.app/)

I have tried to build the backend of a **Job Portal** in this project. I used **MVC** to structure my code. With this project I tried to dive deep into the backend.

### Interesting Experience

I struggled the most when designing the database. I lost count of how many times I had to change the **Schema** to make queries efficient. Especially, where to keep `ref` and where to `populate`. But it was also the most interesting part. Now I understand why database design is crucial when building an application.

### Project Details / Api Documentation

- Base vercel url: `job-portal-taupe.vercel.app`.
- `req.body` is validated before through Schema.

#### Hiring Manager Routes

This route is protected via JWT. You need accessToken to get to this route.

1. `POST/{{VERCEL}}/jobs`
   - Hiring manager can post jobs in this route.
2. `GET/{{VERCEL}}/manager/jobs`
   - verifyToken
   - Get manager `id` from token
   - Load job of this manager
3. `GET/{{VERCEL}}/manager/jobs/:id`
   - job details
   - with applied candidates info
4. `PATCH/{{VERCEL}}/jobs/:id`
   - update job

#### Candidate Routes

1. `GET/{{VERCEL}}/jobs`
   - can filter jobs by location, jobType, salary, title, companyName, jobField, startDate, vacancy, etc.
   - sort jobs by location, vacancy, etc.
2. `GET/{{VERCEL}}/jobs/:id`
   - job details with hiring manager info.
3. `POST/{{VERCEL}}/jobs/:id/apply`
   - apply for a job
   - can't apply if already applied

#### Auth Routes

1. `POST/{{VERCEL}}/user/signup`
   - user signs up with all user details.
   - can't sign up if password != confirmPassword.
   - password is **hashed** by `bcrypt` then saved in the DB.
2. `POST/{{VERCEL}}/user/login`
   - user login with email and password.
   - password is checked with the **hashed** password from DB.
   - send `accessToken` upon successful login
3. `GET/{{VERCEL}}/user/me`
   - for user persistence.
   - get user information from token.

### Project Overview

- Developed routes based on user-role. Candidate, Hiring-manager, Admin, Advisor.
- Implemented authentication with JWT.
- Implemented authorization on hiring-manager routes.
- Designed different data models for different purpose.

### Installed

- node
- express
- mongo
- mongoose
- dotenv
- validator
- jsonwebtoken
- bcrypt
- multer
- cors
- colors

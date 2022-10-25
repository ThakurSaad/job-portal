# Job Portal

[Live Server](https://job-portal-taupe.vercel.app/)

I have tried to build the backend of a **Job Portal** in this project. I used **MVC** to structure my code. With this project I tried to dive deep into the backend.

### Interesting Experience

I struggled the most when designing the database. I lost count of how many times I had to change the **Schema** to make queries efficient. Especially, where to keep `ref` and where to `populate`. But it was also the most interesting part. Now I understand why database design is crucial when building an application.

### Project Details

- Base vercel url: `job-portal-taupe.vercel.app`.
- `req.body` is validated before through Schema.

#### Hiring Manager Routes

This route is protected via JWT. You need accessToken to get to this route.

1. `POST/{{VERCEL}}/jobs`
   Hiring manager can post jobs in this route.
2. 

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

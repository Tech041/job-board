#  Job Board – Full Stack Job Listing Application (Next.js)

This is a full stack job board application built with **Next.js**, allowing users to view job listings and admins to post jobs. The app uses **MongoDB Atlas** for data storage and **Mongoose** as the ODM. Form handling and validation are managed with **React Hook Form** and **Zod**, and **Axios** is used for HTTP requests.

##  Live Demo

https://job-board-assessment.vercel.app

---

##  Features

-  **Homepage**: Displays job cards with title, company, location, salary, and a button to view full job details.
-  **Single Job Page**: `/jobs/[id]` route to view full details of a specific job.
-  **Admin Page**: `/admin/post` route to post new job listings using a form.
-  Form validation with Zod + React Hook Form.
-  MongoDB Atlas + Mongoose for backend data storage.

---

##  Tech Stack


- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS *
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Database:** MongoDB Atlas
- **ORM:** Mongoose
- **HTTP Client:** Axios
- **Deployment:** * Vercel*

---

##  How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Tech041/job-board.git


2. Install dependencies

npm install

3. Configure Environment Variables
Create a .env file in the root of the project and add the following:

MONGO_URI=your_mongodb_connection_string
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000/api

4. Run the development server

npm run dev
Open http://localhost:3000 in your browser to view the app.


 5. What I'd Improve with More Time
 Add user authentication and authorization for the admin route.

 Add unit and integration tests with Jest and React Testing Library.

 

6  Decisions I Made
Used Context API for managing global state across the application, such as loading state and job data.

Implemented a Navbar to allow users to easily navigate between the homepage, job detail pages, and the admin post page.

Added a Loader/Spinner component to enhance user experience by visually indicating when data is being fetched from the server.

Built the Application as Full Stack to showcase my skills as a MERN stack developer, handling both frontend and backend logic.

Chose Axios for making HTTP requests due to its simplicity and ability to handle interceptors and error handling.

Used Zod with React Hook Form to provide robust, schema-based form validation, improving the reliability and maintainability of form inputs.


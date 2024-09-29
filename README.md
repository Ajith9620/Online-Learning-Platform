# ONLINE LEARNING PLATFORM #

## 1. Requirement Understanding (Sprint Planning)

### Project Overview:
- **Goal**: Build an online learning platform where instructors can upload courses, and students can enroll, watch videos, and track their progress.

### Key Features:
- **Frontend**: User-friendly course browsing, enrolling interface, and video streaming.
- **Backend**: REST API for course management, progress tracking, and user enrollment.
- **Database**: Store data related to users, courses, and student progress.
- **Video Streaming**: Integrate cloud video streaming using AWS S3 and CloudFront.

### Tools:
- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB Atlas
- **Communication**: Axios/CORS for API interaction
- **Testing**: Unit Testing for API and frontend components

## 2. Completeness with Respect to Timelines (Sprint Plan)

Here’s a proposed breakdown of tasks into sprints over 2 weeks:

### Sprint 1
- **Goal**: Complete the basic setup for frontend, backend, and database integration.
- Set up the project structure for frontend and backend.
- Initialize Vite for React (frontend), Node.js, and Express (backend).
- Create MongoDB Atlas database, set up connection with the backend.
- Design frontend UI for course browsing and enrollment.
- Develop REST API for user authentication, course management, and enrollment.
- Implement basic models in MongoDB (User, Course, Enrollment).
- Implement user authentication using JWT.
- Complete API endpoints for course CRUD operations (Create, Read, Update, Delete).
- Setup course progress tracking feature.
- Unit test for core backend features (authentication, course management).

### Sprint 2 
- **Goal**: Complete video streaming integration, frontend functionality, and testing.
- Integrate video streaming using AWS S3 and CloudFront.
- Implement video streaming interface on the frontend.
- Complete frontend logic for course progress tracking and video watching.
- Complete error handling and data validation for user inputs (backend and frontend).
- Unit testing for video streaming feature.
- UI testing to ensure components are rendering properly.
- Final integration and testing (full-stack integration).
- Bug fixing and edge case handling.
- Prepare for the final demo with working demonstration.


## 3. Coding Standards (Naming Conventions, Comments, and Indentation)

### Naming Conventions:
- Use `camelCase` for variable and function names (e.g., `handleUserLogin`, `fetchCourses`).
- Use `PascalCase` for React components (e.g., `CourseCard`, `VideoPlayer`).
- Use clear and descriptive names for files, folders, variables, and functions (e.g., `userController.js`, `courseService.js`).

### Comments and Documentation:

**Single-line comments:** Describe the logic for complex code.
```javascript
// Fetch the list of courses from the backend
const courses = await getCourses();
```
**Block comments:** Provide detailed information at the beginning of components, functions, or routes.
```javascript
/**
 * Controller for fetching all courses
 * @route GET /courses
 * @returns {Array} List of courses
 */
```
## 4. Unit Testing

Testing ensures that individual components and API endpoints work as expected.

### Backend Testing:

- Jest for unit testing in the backend (Node.js + Express).
- Test the core functionalities:
  - User authentication (login/signup).
  - Course CRUD operations (Create, Read, Update, Delete).
  - Progress tracking.

### Example unit test using Jest:
```javascript
test('User should be able to enroll in a course', async () => {
  const response = await request(app).post('/api/enroll').send({ userId, courseId });
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Enrolled successfully');
});
```
### Frontend Testing:

- React Testing Library for testing React components.
- Test components like CourseList, EnrollmentButton, and VideoPlayer.

### Example:
```javascript
test('renders course list component', () => {
  const { getByText } = render(<CourseList />);
  expect(getByText(/available courses/i)).toBeInTheDocument();
});
```
### 5. Exception Handling and Data Validation

Handling errors and validating data is crucial for robust applications.

#### Backend Validation:

- Use Joi or Express-Validator to validate inputs like user details, course data, and enrollment actions.

#### Example:
```javascript
const { error } = userSchema.validate(req.body);
if (error) return res.status(400).json({ message: error.details[0].message });
```
#### Frontend Validation:

- Validate user inputs (like form submissions for login or course enrollment) using React hooks and libraries like Yup.

#### Example:
```javascript
const schema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().min(6).required('Password is required')
});
```
#### Error Handling:

- Catch API errors and display meaningful messages to the user (both backend and frontend).

#### Example:
```javascript
try {
  const response = await axios.post('/api/enroll', data);
} catch (error) {
  console.error('Enrollment failed:', error.response.data.message);
  setErrorMessage('Failed to enroll. Please try again.');
}
```


## Frontend Workflow (React with Vite)

**Initialize Frontend Application**:

1. Start the React project with Vite.
2. Create the basic folder structure, including:
   - `components/`
   - `pages/`
   - `services/` (for API calls)
   - `context/` (if using Context API for state management)

## Set Up Routing (React Router)

## Configure Routes for:

1. **Home** (course browsing).
2. **Course details** page.
3. **User authentication** (login/register).
4. **Dashboard** (student progress and instructor's course management).

### Example Routes:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/course/:id" element={<CourseDetails />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
```

# Features Overview

## 1. User Authentication Pages

- **Register**: A form to sign up users (students/instructors).
- **Login**: A form to log in users, store the JWT token in local storage, and set the user context after authentication.
  - Upon successful login, navigate the user to the respective dashboard (Instructor or Student).

## 2. Course Browsing and Enrollment

- **Home Page**: Display a list of courses fetched from the backend.
  - API Call: `GET /api/courses`.
- **Course Details Page**: Show detailed information about a selected course, including:
  - Title
  - Description
  - Price
  - Video preview.
- **Enroll Button**: Once the user clicks on 'Enroll', send a request to enroll the student in the course.
  - API Call: `POST /api/enroll`.

## 3. Course Video Streaming

- On the Course Details Page, implement a video player to stream course videos using **AWS CloudFront**.
  - Fetch the video URL from the course details API and stream it in the player.
  - Video player can be an HTML5 `<video>` tag or a React video component.

## 4. User Dashboards

- **Student Dashboard**:
  - Display a list of enrolled courses and their progress.
  - API Call: `GET /api/progress/:userId/:courseId` (Fetch course progress for each enrolled course).
- **Instructor Dashboard**:
  - List the courses created by the instructor.
  - Include options to add, edit, and delete courses.
  - API Calls:
    - `POST /api/courses` (Add a course).
    - `PUT /api/courses/:id` (Edit a course).
    - `DELETE /api/courses/:id` (Delete a course).

## 5. Progress Tracking

- As the student watches a video or completes a course, update progress on the backend.
  - API Call: `PUT /api/progress` (Track and store course progress).

## 6. Form Validation and Exception Handling

- Ensure all forms (login, registration, course creation, etc.) have proper validation:
  - For example, email format and password length validation.
- Display appropriate error messages for invalid inputs or API call failures.

## 7. State Management

- Use **Context API** or **Redux** for managing global states, such as:
  - Authentication status.
  - User details.
  - Enrolled courses.

# Backend Workflow (Node.js with Express and MongoDB Atlas)

## 1. Initialize Backend

- Set up a Node.js project using Express.
- Configure middleware such as:
  - `body-parser` (for parsing incoming request bodies).
  - `cors` (for handling cross-origin requests).
  - JWT authentication middleware (for protecting routes).

## 2. Connect to MongoDB Atlas

- Use **mongoose** to define schemas and connect to the MongoDB Atlas database.
- Create models for:
  - `User`
  - `Course`
  - `Enrollment`
  - `Progress`

## 3. User Authentication

- **Register API** (`POST /api/auth/register`):
  - Validate user input.
  - Create a new user, hash the password using **bcrypt**, and save the user in MongoDB.
- **Login API** (`POST /api/auth/login`):
  - Verify the email and password.
  - Generate a JWT token and return it to the frontend.
- Protect private routes using JWT middleware to ensure only authenticated users can access specific endpoints.

## 4. Course Management (Instructor Role)

- **Create Course** (`POST /api/courses`):

  - Instructors can create a new course by sending details (title, description, price, video URL).
  - Validate the data and save the course to MongoDB.

- **Update Course** (`PUT /api/courses/:id`):

  - Instructors can update course details.

- **Delete Course** (`DELETE /api/courses/:id`):
  - Instructors can delete the courses they created.

## 5. Course Browsing (Public Access)

- **Get All Courses** (`GET /api/courses`):
  - Serve all available courses. This API is public, allowing students to browse without logging in.
- **Get Course by ID** (`GET /api/courses/:id`):
  - Provide detailed information about a specific course.

## 6. Student Enrollment and Progress Tracking

- **Enroll in a Course** (`POST /api/enroll`):
  - Upon enrollment, create a record in MongoDB with the student ID, course ID, and initial progress set to 0.
- **Update Progress** (`PUT /api/progress`):
  - As students progress through a course, update their progress in MongoDB.
- **Get Progress** (`GET /api/progress/:userId/:courseId`):
  - Fetch the student's progress for a specific course.

## 7. Video Streaming (Integration with AWS S3 + CloudFront)

- **Upload Video** (`POST /api/courses/upload`):
  - Generate a pre-signed URL from AWS S3 for uploading the course video.
  - The instructor uploads the video to the S3 bucket using the pre-signed URL.
- Serve the video via AWS CloudFront, with the URL stored in MongoDB.

## 8. Error Handling and Data Validation

- Validate incoming requests (e.g., required fields, correct data types) in the backend APIs.
- Implement a centralized error-handling middleware to catch and respond to errors like:
  - `400 Bad Request`
  - `401 Unauthorized`
  - `500 Internal Server Error`

## 9. Unit Testing

- Use a testing framework like **Jest** or **Mocha** to write unit tests for each API endpoint.
- Test critical functionalities, including:
  - User registration
  - Login
  - Course creation
  - Enrollment

# API Endpoints

## 1. User Authentication

### Register User

- **Endpoint**: `POST /api/auth/register`
- **Description**: Registers a new user (either student or instructor).

**Request**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response**:

```json
{
  "token": "JWT_TOKEN",
  "user": { "id": "user_id", "name": "John Doe", "email": "john@example.com" }
}
```

## 2.Course Management (Instructor)

### Create a New Course

- **Endpoint**: `POST /api/courses`
- **Description**: Allows instructors to create new courses.

**Request**:

```json
{
  "title": "React for Beginners",
  "description": "Learn the basics of React",
  "price": 99,
  "videoUrl": "https://aws.s3.bucket/video.mp4"
}
```

**Response**:

```json
{
  "message": "Course created successfully",
  "course": {
    "id": "course_id",
    "title": "React for Beginners",
    "description": "Learn the basics of React",
    "videoUrl": "https://aws.s3.bucket/video.mp4"
  }
}
```

### Update a Course

- **Endpoint**: `PUT /api/courses/:id`
- **Description**: Allows instructors to update course details.

**Request**:

```json
{
  "title": "React for Beginners - Updated",
  "description": "Updated description",
  "price": 120
}
```

**Response**:

```json
{
  "message": "Course updated successfully",
  "course": {
    "id": "course_id",
    "title": "React for Beginners - Updated",
    "description": "Updated description",
    "price": 120
  }
}
```

### Delete a Course

- **Endpoint**: `DELETE /api/courses/:id`
- **Description**: Allows instructors to delete a course.

**Request**:

```json
{
  "message": "Course deleted successfully"
}
```

## 3. Course Browsing and Enrollment (Students)

### Register User

- **Endpoint**: `GET /api/courses`
- **Description**: Fetches all available courses for browsing.

**Request**:

```json
{
  "courses": [
    {
      "id": "course_id",
      "title": "React for Beginners",
      "description": "Learn the basics of React",
      "price": 99,
      "videoUrl": "https://aws.s3.bucket/video.mp4"
    }
  ]
}
```

**Get Single Course**:

- **Endpoint**: `GET /api/courses/:id`
- **Description**: Fetch details of a specific course.

**Response**:

```json
{
  "course": {
    "id": "course_id",
    "title": "React for Beginners",
    "description": "Learn the basics of React",
    "videoUrl": "https://aws.s3.bucket/video.mp4"
  }
}
```

**Enroll in a Course**:

- **Endpoint**: `POST /api/enroll`
- **Description**: Allows a student to enroll in a course.

**Request**:

```json
{
  "userId": "user_id",
  "courseId": "course_id"
}
```

**Response**:

```json
{
  "message": "Enrolled successfully",
  "enrollment": {
    "userId": "user_id",
    "courseId": "course_id",
    "progress": 0
  }
}
```

## 4. Course Progress Tracking

### Update Course Progress

- **Endpoint**: `PUT /api/progress`
- **Description**: Updates the student's progress in a course.

**Request**:

```json
{
  "userId": "user_id",
  "courseId": "course_id",
  "progress": 50 // progress in percentage
}
```

**Response**:

```json
{
  "message": "Progress updated successfully",
  "progress": {
    "userId": "user_id",
    "courseId": "course_id",
    "progress": 50
  }
}
```

### Get Course Progress

- **Endpoint**: `GET /api/progress/:userId/:courseId`
- **Description**: Fetches the student's progress in a specific course.

**Response**:

```json
{
  "progress": {
    "userId": "user_id",
    "courseId": "course_id",
    "progress": 50
  }
}
```

## 5. Video Streaming Integration (AWS S3 + CloudFront)

### Upload Course Video (Presigned URL)

- **Endpoint**: `POST /api/courses/upload`
- **Description**: Generate a presigned URL for video upload to AWS S3.

**Request**:

```json
{
  "fileName": "video.mp4"
}
```

**Response**:

```json
{
  "uploadUrl": "https://aws.s3.bucket/upload_url"
}
```

**Stream Video**:

- **Endpoint**:Videos are directly streamed from AWS CloudFront using the URL stored in the course data (e.g., https://aws.cloudfront.net/video.mp4).

## 6. User Profile and Management

### Get User Profile

- **Endpoint**: `GET /api/users/:id`
- **Description**: Fetch the profile details of a user (student or instructor).

**Response**:

```json
{
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student"
  }
}
```

### Update User Profile

- **Endpoint**: `PUT /api/users/:id`
- **Description**: Allows the user to update their profile details.

**Request**:

```json
{
  "name": "John Doe Updated",
  "email": "johnupdated@example.com"
}
```

**Request**:

```json
{
  "message": "Profile updated successfully",
  "user": {
    "id": "user_id",
    "name": "John Doe Updated",
    "email": "johnupdated@example.com"
  }
}
```
# Conclusion 
**The Online Learning Platform is a user-friendly solution that enhances digital education for instructors and students. Built with React and Node.js, it supports course management, enrollment, and video streaming.**

**By following coding best practices and implementing unit testing, we ensure reliability and maintainability. This platform not only meets current educational needs but also lays the groundwork for future enhancements, promoting greater access to quality learning resources.**

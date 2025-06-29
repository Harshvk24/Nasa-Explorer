NASA Explorer :

NASA Explorer is a modern, interactive web app that lets you explore stunning space data and imagery from NASA APIs. Browse the Astronomy Picture of the Day (APOD), Mars rover photos, Near-Earth Objects (NEOs), Earth EPIC images, and search NASA’s vast media library.

Built with:

* React (Frontend)
* Express.js (Backend)
* NASA Open APIs

---

Features :

* APOD Viewer – View daily space photos and filter by date
* Mars Rover Viewer – Browse rover images and see latest Mars weather
* EPIC Earth Viewer – See real images of Earth from DSCOVR satellite
* NEO Tracker – Track near-earth asteroids with chart visualization
* Media Search – Search NASA's image and video archive

---
File structure :
nasa-explorer/

├── backend/

│   ├── routes/

│   ├── services/

│   └── index.js

├── frontend/

│   ├── src/

│   │   ├── components/

│   │   ├── assets/

│   │   ├── App.js

│   │   └── ...

├── README.md

---
Getting Started :

Prerequisites

* Node.js ≥ 16
* npm
* NASA API Key 

---

Installation :


git clone https://github.com/your-username/nasa-explorer.git
cd nasa-explorer


1. Setup Backend

cd backend
npm install
# Create a .env file and add:
# NASA_API_KEY= your_key_here

npm start
Runs on http://localhost:5000


2. Setup Frontend

cd ../frontend
npm install


npm start
Runs on http://localhost:3000


---



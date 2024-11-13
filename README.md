

# Event Planner & Organizer

An intuitive web application for planning, organizing, and managing events. Built with React, this app allows users to create, view, edit, and delete events seamlessly. It features a clean and responsive design, making it suitable for use on both desktop and mobile devices.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

[https://EventPlanner]

---

## Features

- **Event Creation**: Users can create new events by entering details like the title, date, time, location, and description.
- **Event List View**: Displays all upcoming events in a card format, allowing users to quickly browse through them.
- **Event Details**: View detailed information about each event, including edit and delete options.
- **Event Editing**: Users can update event details whenever necessary.
- **Event Deletion**: Events can be removed with a single click, and the app will reflect the changes in real time.
- **Search Functionality**: Filter events by title using a search bar to quickly locate specific events.
- **Responsive Design**: Optimized for use on both desktop and mobile devices.
  
---

## Technologies Used

- **Frontend**: React (React Router for navigation)
- **Backend**: JSON Server (simulating a RESTful API)
- **CSS**: Custom styling for responsive and appealing UI design
- **Optional Icons**: Font Awesome (if added for navigation or buttons)

---

## Setup & Installation

Follow these steps to get a local copy of the project running on your machine.

### Prerequisites

- **Node.js** (v14 or higher recommended)
- **Git** (optional, for version control)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/BrianMumo/EventPlanner-.git
   cd EventPlanner
   ```

2. **Install Dependencies**

   In the project directory, install the required dependencies with:
   
   ```bash
   npm install
   ```

3. **Set Up JSON Server**

   JSON Server is used to simulate a backend for event data.

   - Create a `db.json` file in the root directory and populate it with sample event data, like so:

     ```json
     {
       "events": [
         {
           "id": 1,
           "title": "Team Meeting",
           "date": "2024-11-15",
           "time": "10:00 AM",
           "location": "Office A",
           "description": "Quarterly team meeting."
         },
         {
           "id": 2,
           "title": "Product Launch",
           "date": "2024-12-01",
           "time": "2:00 PM",
           "location": "Main Hall",
           "description": "Launch event for the new product line."
         }
       ]
     }
     ```

   - Start JSON Server (using port 3001):
     ```bash
     npx json-server --watch db.json --port 3001
     ```

4. **Run the App**

   In another terminal window, start the React app:

   ```bash
   npm start
   ```

   Your app should now be running at `http://localhost:3000` with JSON Server providing data at `http://localhost:3001/events`.

---

## Usage

### Navigating the App

1. **Home Page**: The home page displays a list of all events in a card format.
2. **Event Details**: Click on any event to view detailed information.
3. **Create Event**: Use the "Create Event" link in the navigation bar to add a new event.
4. **Edit/Delete Event**: On the event details page, use the "Edit" and "Delete" options to manage events.

### API Endpoints (JSON Server)

- **GET** `/events`: Fetch all events.
- **POST** `/events`: Create a new event.
- **GET** `/events/:id`: Fetch a specific event by ID.
- **PUT** `/events/:id`: Update an event by ID.
- **DELETE** `/events/:id`: Delete an event by ID.

---

## File Structure

The project’s main files are structured as follows:

```plaintext
event-planner-app
├── public
│   └── index.html            # Main HTML file
├── src
│   ├── components
│   │   ├── Navbar.js         # Navigation bar component
│   │   ├── EventList.js      # Displays list of events
│   │   ├── EventDetails.js   # Shows event details
│   │   ├── EventForm.js      # Form for creating/editing events
│   ├── App.js                # Main app component with routes
│   ├── index.js              # Main React DOM render
│   └── styles.css            # Custom CSS for styling
├── db.json                   # JSON Server data file
├── package.json              # Project metadata and scripts
└── README.md                 # Project documentation
```

---

## Future Improvements

Here are some potential future improvements to enhance the app:

1. **Calendar View**: Add a calendar to visualize events by date.
2. **User Authentication**: Allow users to create an account and manage their events privately.
3. **Event Categories**: Implement categories to filter and organize events.
4. **Notifications**: Send notifications for upcoming events.
5. **Location Map Integration**: Display event locations on a map.
6. **RSVP System**: Allow users to RSVP to events and display attendance numbers.

---

## Contributing

Contributions are welcome! Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature name'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request with a description of your changes.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

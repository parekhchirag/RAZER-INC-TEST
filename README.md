# RAZER-INC-TEST : Profile List Management

This project is a React application for managing a list of user profiles. It features state management using Redux Toolkit and RTK Query, and persistent state storage using LocalStorage.

## Features

- **Profile List Management**: Add, delete, rename, and reorder profiles.
- **Default Profiles**: Default profiles (Default, Game, Movie, Music) cannot be renamed or deleted.
- **Persistent State**: Profile data is saved to LocalStorage.
- **RTK Query**: Simulate API calls to save profiles.
- **Test cases**: Couple of demo test cases are present in the .test.js files in the repo

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/parekhchirag/RAZER-INC-TEST.git
cd RAZER-INC-TEST
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```
The application will be available at http://localhost:3000.

2. **Run tests**
```bash
npm test
```

## Project Structure
```bash
src/
├── app/
│   └── store.js
├── components/
│   ├── ProfileDetails.js
|   ├── ProfileItem.js
│   ├── ProfileList.js
│   └── Toolbar.js
├── features/
│   ├── profilesApiSlice.js
│   └── profilesSlice.js
├── App.js
├── App.scss
├── index.js
└── index.css
└── store.js
```

### Store Configuration (src/app/store.js)
The Redux store configuration, integrating profilesSlice and profilesApi.

### Profiles Slice (src/features/profilesSlice.js)
Manages the profile list state.

### Profiles API Slice (src/features/profilesApiSlice.js)
Uses RTK Query to manage API interactions.

## Usage
1. **Profile List**: The left panel displays the list of profiles. You can add a new profile, rename, delete, or move profiles up and down.
2. **Profile Details**: The right panel shows the name of the selected profile.
3. **LocalStorage**: The profile list is saved to LocalStorage to persist state across page reloads.
4. **API Simulation**: Changes to the profile list are simulated to be saved via an API call using RTK Query.

## Development
This project uses:

 - **React**: For building the user interface.
 - **Redux Toolkit**: For state management.
 - **RTK Query**: For managing API calls.
 - **LocalStorage**: For persisting state.

## API
The project simulates API calls to the following endpoint:

 - **Base UR**L: https://crudcrud.com/api/8a637c1c696a473aa8a9b8351274e5c0
 - **Endpoints**:
     - GET /profiles: Fetches the list of profiles.
     - POST /profiles: Saves the updated list of profiles.

## Contributing
Feel free to fork the project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.



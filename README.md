# React Native Expo Project: posts-native

A React Native Expo project for displaying user posts using JSONPlaceholder.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)


## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- Expo CLI (can be installed using `npm install -g expo-cli`)
- Expo Go app on your mobile device for testing on real devices

### Installation

 **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/posts-native.git
   cd posts-native
```

**Install project dependencies:**

```bash
npm install
```
### Running the Project

**Start the development server:**

```bash
npm start
```
**Scan the QR code with the Expo Go app on your mobile device to run the app.**

**For running on Android:**

```bash
npm run android
```

**For running on iOS:**

```bash
npm run ios
```

### Dependencies

 - @react-navigation/bottom-tabs
 - @react-navigation/native
 - @react-navigation/stack
 - @reduxjs/toolkit
 - axios
 - expo
 - react-native-elements
 - react-native-safe-area-context
 - react-native-web
 - react-redux
 - typescript


 ### Project Structure

The project follows a structured organization to improve readability and maintainability.

```
/posts-native
|-- assets
|-- components
|   |-- common
|   |-- post
|   |-- search
|-- screens
|   |-- Main
|   |-- PostDetail
|-- store
|   |-- reducers
|-- styles
|-- App.tsx
|-- README.md
|-- package.json
```

### Screenshots

![localhost_19006_(iPhone 6_7_8)](https://github.com/Alexandra2888/Posts-React-Native/assets/76844097/b212fb1b-d904-4045-980b-8a9f12dbaa29)


![localhost_19006_(iPhone 6_7_8) (1)](https://github.com/Alexandra2888/Posts-React-Native/assets/76844097/55745d37-540b-4c4d-aefc-3aafc07e970e)


### Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or create a pull request.

## About The App
The project is a React Native boilerplate (for Android) that provides an architecture optimized for building solid cross-platform mobile applications with embedded authentication flow to help you kickstart new app.

When starting new apps I found myself repeatedly setting up my project with same packages over and over again so I decided to automate this process.

While this mostly consists of how I organize my projects but can be easily extended to suit any workflow.

Feel free to leave a ⭐ as motivation if this was useful to you 😊
## Requirements

- Node 12 or newer
- Java SE Development Kit (JDK) version 8 or newer
- Android Studio

## Context
```bash
- React Native (0.68.1) 
- React (17.0.2)
- Packages:
    - Redux
    - React Redux
    - Redux-Saga
    - React Navigation
    - React Native Elements
    - React Native Vector Icons
    - Formik
    - Axios
```
## Development

```bash
# Clone the repo
git clone   
cd zpol  

# Dependencies  
npm install  

# Copy .env.example to .env
cp .env.example .env

# Add APIURL in .env
APIURL=

# Run Android  
npx react-native run-android  

# Run metro server
npx react-native start

```

## Build

```bash

# Generate Android Release Build APK  
npx react-native run-android --variant=release

#Generate Android Release AAB
#Generate AAB path - android/app/build/outputs/bundle/release/app-release.aab
cd android
./gradlew bundleRelease

```

## Note

- In android/local.properties add following line: sdk.dir = YOUR_ANDROID_SDK_PATH

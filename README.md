## About The App
Zpol for Android built using React Native includes basic authentication flow using React Navigation v6 and Redux.

## Requirements

- Node 12 or newer
- Java SE Development Kit (JDK) version 8 or newer
- Android Studio

## Development

```bash
# Clone the repo
git clone   
cd zpol  

# Dependencies  
npm install  

# Copy .env.example to .env
cp .env.example .env

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

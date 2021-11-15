rm -rf node_modules
watchman watch-del-all
rm -rf $TMPDIR/react-native-packager-cache-*
rm -rf $TMPDIR/metro-bundler-cache-*
npm cache clean --force
npm install


cd android/
./gradlew clean
./gradlew clean build --refresh-dependencies --no-build-cache
cd ..
npx react-native start --reset-cache

<br>
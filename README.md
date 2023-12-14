In order to use this library, please make sure to follow below:

1. In your client app project, make sure to have .npmrc file that will reside at the same folder level as package.json. In your .npmrc file, make sure to have the line '@longtail-education:registry=https://npm.pkg.github.com' so taht npm install will succeed.
2. Make sure your firestore rule can allow writing documents to tests collection.
3. Make sure your storage rule can allow reading from images folder
4. Make sure you have a test.png file in the images folder.
5. Whether or not to only allow logged in users to do the things above is up to you.
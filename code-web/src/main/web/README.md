// run local server with param: OK
PORT=5000 HOST=localhost CTX=/myapp npm start

// build prod command line
npm run-script build:prod --PORT:8085 --HOST:localhost --CTX:/myapp
npm run-script build:prod env.PORT=5000 env.HOST=localhost env.CTX=/myapp  

npm run-script build:prod -- --PORT 5000 --HOST localhost --CTX /myapp

npm run clean:dist && PORT=5000 HOST=localhost CTX=/myapp npm run-script build:prod

// OK
PORT=5000 HOST=localhost CTX=/myapp npm run-script build:prod

// process.env.CTX 

// Lunch application with command line
java -Dapp.ctx=/myapp2 -Dapp.domain=localhost -Dapp.port=8085 -jar target/code-server-0.0.1-SNAPSHOT.jar
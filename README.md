# Coffee React Prject
This project is a case study for interview proccess. 


## Design Notes: 
  *  I have used class components in this react project. 
  *  Since we do not have a backend server, I have used `Json-Server` for API requests. 
  *  I have used `REDUX` for state management. I used redux for listing, and filtering by categories
  *  For interface I have used `Bootstrap` and `Reactstrap`
  *  I have worked with 2 branches. `Master` and `dev`.
  *  Client side works on `port:3000` and Json server must be worked on `port:3001`
  *  I needed to add some data to coffees.json, so you should use coffees.json that is in this repo
  

 ## Installation 
  
Clone this repo. <br>
After that, navigate to folder that you cloned. Then navigate with your terminal to client folder

```javascript
 cd  client
 npm install
 npm start
 ```
 
 for JSON Server: 
 navigate to api folder, then:
 ```javascript
 json-server -p 3001 --watch coffee.json
 ```
 !! Make sure that you have json-server on your machine <br>
 
 If you do not have, try this: 
  ```javascript
npm install -g json-server
```

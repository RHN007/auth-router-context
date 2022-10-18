/*
---------------------
Basic Context Setup
--------------------
1. Context APi : Share auth state with other components (across the application ) 
2. create an userContext 
3. ContextProvider with passed children
4. set the userContext in the index.js
5. Now to consume the context : export the authContext from userContext ; 
6. Now at header or home or anywhere else : use UserContext hook to get the info in the context ; 

)
*/

/*
Auth Integration 
1. use getAuth by passing the app form firebase config
2. create a function named createUser to return createUserWithEmail&Password; 
3. 
*/
function fetchData (callback){
console.log("Fetching data...");

setTimeout(() => {
    const data ={id :1, name: "Alex Mods"};
    callback(data);
}, 2000);
}
console.log("Data fetched......");
 fetchData((data)=>{
    console.log ("Data received: ", data);
 })
console.log("program terminates.....");
// This is a simple example of a callback function in JavaScript.

// NOT THIS THAT A callback function is a function that is passed as an argument to another function.

console.log("1.script starts");

 setTimeout(() => {
    console.log("4. Timeout callback executed");

}, 0) // 0 means it will execute as soon as possible



Promise.resolve().then(() => {
    console.log("3. Promise callback executed");

})
//a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value, it is used to handle asynchronous operations in JavaScript.
// The Promise callback will be executed after the current call stack is cleared, even if the timeout is set to 0.
console.log("2. script ends");
// In this example, we have a function called fetchData that simulates fetching data from a server.
    

function readFile(fileName, callback) {
    console.log("Reading file:", fileName);
    setTimeout(() => {
        const  success = Math.random() > 0.5; // Simulate a success or failure
        const data = "File content of " + fileName;
        callback(null, data);
        // If the file is found, it calls the callback with null as the first argument and the file content as the second argument.
            callback(new Error("File not found in the system"));
        // If the file is not found, it calls the callback with an error object as the first argument and null as the second argument.
    }, 2000);
}
// The readFile function takes a file name and a callback function as arguments.


function getUserData ( userId, callback) {
    console.log("Fetching user data for user ID:", userId);
    setTimeout(() => {
        const userData = { id: userId, name: "John Doe" };
        callback(null, userData);
    }, 2000);
}
// The getUserData function simulates fetching user data from a server.
// It takes a user ID and a callback function as arguments.
// The callback function is called with the user data after a delay of 2 seconds.


function getUserPosts(userId, callback) {
    console.log("Fetching posts for user ID:", userId);
    setTimeout(() => {
        const posts = [
            { id: 1, title: "Post 1 in a while" },
            { id: 2, title: "Post 2 i a while" },
        ];
        callback(null, posts);
    }, 2000);
}
// The getUserPosts function simulates fetching posts for a user.
// It takes a user ID and a callback function as arguments.

function getPostComments(postId, callback){
    console.log("Fetching comments for post ID:", postId);
    setTimeout(() => {
        const comments = [
            { id: 1, text: " Welcome back" },
            { id: 2, text: "Happy to have you back, its being a while" },
        ];
        callback(null, comments);
    }, 2000);
}
// The getPostComments function simulates fetching comments for a post.
// It takes a post ID and a callback function as arguments.
// The callback function is called with the comments after a delay of 2 seconds.

getUserData(123, (error, userData) => {
    if (error) {
        console.error("Error fetching user data:", error);
        return; 
    }

    // The userData variable contains the user data returned by the callback function.
    console.log("User data:", userData);

    getUserPosts(userData.id, (error, posts) => {
        if (error) {
            console.error("Error fetching user posts:", error);
            return;
        }
        // The posts variable contains the posts returned by the callback function.
        console.log("User posts:", posts);

        posts.forEach((post) => {
            getPostComments(post.id, (error, comments) => {
                if (error) {
                    console.error("Error fetching post comments:", error);
                    return;
                }
                // The comments variable contains the comments returned by the callback function.
                console.log("Post comments for post ID", post.id, ":", comments);
            });
        });
        // The comments for each post are fetched using the getPostComments function.
        





    }
    );});// The getUserData function is called with a user ID and a callback function.

    function getUserData ( userId, callback) {
        return new Promise((resolve, reject) => {
            console.log("Fetching user data for user ID:", userId);
            setTimeout(() => {
                const userData = { id: userId, name: "Alex Mods" };
                resolve(userData);
            }, 2000);
        });
    }
    // The getUserData function simulates fetching user data from a server.
    // It takes a user ID and a callback function as arguments.
    // The callback function is called with the user data after a delay of 2 seconds.
    
    function getUserPosts(userId, callback) {
        return new Promise((resolve, reject) => {
            console.log("Fetching posts for user ID:", userId);
            setTimeout(() => {
                const posts = [
                    { id: 1, title: "Post 1 in a while" },
                    { id: 2, title: "Post 2 i a while" },
                ];
                resolve(posts);
            }, 2000);
        });
    }
    // The getUserPosts function simulates fetching posts for a user.
    // It takes a user ID and a callback function as arguments.
    // The callback function is called with the posts after a delay of 2 seconds.
   
    function getPostComments(postId, callback){
        return new Promise((resolve, reject) => {
            console.log("Fetching comments for post ID:", postId);
            setTimeout(() => {
                const comments = [
                    { id: 1, text: " Welcome back" },
                    { id: 2, text: "Happy to have you back, its being a while" },
                ];
                resolve(comments);
            }, 2000);
        });
    }
    // The getPostComments function simulates fetching comments for a post.
    // It takes a post ID and a callback function as arguments.
    // The callback function is called with the comments after a delay of 2 seconds.

    getUserData(123)
    .then((userData) => {
        console.log("User data:", userData);
        return getUserPosts(userData.id);
    })
    // The getUserData function is called with a user ID and a callback function.
    .then((posts) => {
        console.log("User posts:", posts);
        const postPromises = posts.map((post) => getPostComments(post.id));
        return Promise.all(postPromises);
    })
    // The getUserPosts function is called with the user ID and a callback function.
    .then((comments) => {
        console.log("Post comments:", comments);
    })
    // The comments for each post are fetched using the getPostComments function.
    .catch((error) => {
        console.error(" you have an Error brother be serous:", error);
    });
// The catch block handles any errors that occur during the promise chain.
// The Promise.all method is used to wait for all the promises to resolve before logging the comments.
// This is a simple example of using promises to handle asynchronous operations in JavaScript.


function getUserPreferences(userID){
    return new Promise((resolve, reject) => {
        console.log("Fetching user preferences for user ID:", userID);
        setTimeout(() => {
            const preferences = { theme: "dark", language: "en" };
            resolve(preferences);
        }, 2000);
    });
    // The getUserPreferences function simulates fetching user preferences for a user for example.
    // It takes a user ID and a callback function as arguments.
}
function getUserNotifications(userID){
    return new Promise((resolve, reject) => {
        console.log("Fetching user notifications for user ID:", userID);
        setTimeout(() => {
            const notifications = [
                { id: 1, message: "New message from Alex mods" },
                { id: 2, message: "New comment on your post" },
            ];
            resolve(notifications);
        }, 2000);
    });
    // The getUserNotifications function simulates fetching user notifications for a user.
    // It takes a user ID and a callback function as arguments.
    //resolve is used to resolve the promise with the notifications.
    // a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    //return new promise is used to create a new promise object.
    // The reject function is used to reject the promise with an error message.
    // The setTimeout function is used to simulate a delay in fetching the notifications.

}

Promise.race([
    new Promise((resolve) => setTimeout(() => resolve("This is a fast API"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("This is a Slow API"), 3000)),
])
.then((result) => {
    console.log("Result from the fastest API:", result);
})
// The Promise .race function is used to wait for the first promise to resolve.
// The .then method is used to handle the result of the fastest promise.
.catch((error) => {
    console.error("You have an Error Brother try again next week:", error);
});
// The catch block handles any errors that occur during the promise chain.

function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        }, 2000);
    });
}
async function fetchData() {
    console.log(" Starting async to Fetch data...");    
    try {
        const userData = await getUserData(123);
        console.log("User data:", userData);
    }   catch (error) {
        console.error("Error fetching user data:", error);
    }    finally {
        console.log("Async function completed.");
        }
    }
    // The fetchData function is an async function that uses the await keyword to wait for the getUserData promise to resolve.
    // The try-catch block is used to handle any errors that occur during the async function.
    // The finally block is used to execute code after the async function completes, regardless of whether it was successful or not.
    fetchData();
    // The fetchData function is called to start the async operation.
    // The async function is a function that is declared with the async keyword.
    // The await keyword is used to wait for a promise to resolve before continuing
    // The async function returns a promise that resolves with the value returned by the function.
    // The async function is a way to write asynchronous code in a more readable and maintainable way.
    

import Header from './components/Header';
import Home from './components/Home';
import User from './components/User';
import React, { useEffect } from 'react';

function App() {
  const [users, setUsers] = React.useState([]);
  const [images, setImages] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    retrieveUsers();
    retrievePosts();
    retrieveImages();
  }, []);

  // function that will retreive users from API
  const retrieveUsers = async () => {
    // retrieve users from api
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // convert JSON to JavaScript object
    const userArray = await response.json();
    // set user state
    setUsers(userArray);
  };

  // function that will retrieve posts from API
  const retrievePosts = async () => {
    // retrieve posts from api
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // convert JSON to JavaScript object
    const postArray = await response.json();
    // set image state
    setPosts(postArray);
  };

  // function that will retreive images from API
  let retrieveImages = async () => {
    // retrieve posts from api
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    // convert JSON to JavaScript object
    const photoArray = await response.json();
    // remove all images except first 10
    photoArray.splice(10);
    // set image state
    setImages(photoArray);
  };
  console.log(images);
  // function that will create components from users array
  const usersComponents = users.map((user, index) => {
    return (
      <User
        image={images[index].thumbnailUrl}
        email={user.email}
        name={user.name}
        func={displayPosts}
      ></User>
    );
  });
  return (
    <div className="App">
      <Header></Header>
      {usersComponents}
    </div>
  );
}

export default App;

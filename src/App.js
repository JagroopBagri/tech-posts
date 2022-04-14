import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import { images } from './images/images';
import User from './components/User';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [userPosts, setUserPosts] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState('');
  useEffect(() => {
    retrieveUsers();
    retrievePosts();
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

  const retrieveUserPosts = (user) => {
    const p = posts.filter((post) => {
      return post.userId === Number(user.id);
    });
    setCurrentUser(user.name);
    setUserPosts(p);
  };
  // function that will create components from users array
  const usersComponents = users.map((user, index) => {
    return (
      <User
        user={user}
        key={user.id}
        image={images[index]}
        email={user.email}
        name={user.name}
        func={retrieveUserPosts}
      ></User>
    );
  });

  // function that will create components from userPosts array
  const usersPostComponents = userPosts.map((posts) => {
    return (
      <>
        <Posts
          title={posts.title}
          body={posts.body}
          key={posts.title + 1}
        ></Posts>
      </>
    );
  });
  const postPage = (function () {
    return (
      <>
        <h3>{`${currentUser}'s Posts`}</h3>
        {usersPostComponents}
      </>
    );
  })();
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/users" element={usersComponents}></Route>
          <Route path="/posts" element={postPage}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

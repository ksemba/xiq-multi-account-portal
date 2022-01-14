import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in/sign-in.component";
// import Header from "./components/header/header.component";
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    console.log("showing signin page");
    return <SignInPage setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage token_main_account={token} />}
        />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;

// class App extends React.Component {

//   const [token, setToken] = useState();

//   constructor() {
//     super();

//     // this.state = {
//     //   email: null,
//     //   password: null,
//     //   api_token: null,
//     };
//   }

//   // onLoginSuccess = (email, password, api_token) => (
//   //   this.setState({email: email, password: password, api_token: api_token})
//   // )
//   onLoginSuccess = (email, password, api_token) => (
//     this.setState({email: email, password: password, api_token: api_token})
//   )

//   // unsubscribeFromAuth = null;

//   // componentDidMount() {
//   //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//   //     if (userAuth) {
//   //       const userRef = await createUserProfileDocument(userAuth);

//   //       userRef.onSnapshot(snapShot => {
//   //         this.setState({
//   //           currentUser: {
//   //             id: snapShot.id,
//   //             ...snapShot.data()
//   //           }
//   //         });
//   //       });
//   //     }

//   //     this.setState({ currentUser: userAuth });
//   //   });
//   // }

//   // componentWillUnmount() {
//   // this.unsubscribeFromAuth();
//   // }

//   render() {
//     return (
//       <div>
//         {/* <Header currentUser={this.state.currentUser} /> */}
//         <Routes>
//           <Route
//             exact
//             path="/"
//             element={this.state.email ? <HomePage /> : <SignInPage onLoginSuccess=onLoginSuccess />}
//           />
//           <Route path="/signin" element={<SignInPage />} />
//         </Routes>
//       </div>
//     );
//   }
// }

// export default App;

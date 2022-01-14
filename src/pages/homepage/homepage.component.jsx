import React from "react";

// import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

// async function getAllExternalAccounts(token_main_account) {
//   //   const request_body = {
//   //     username: username,
//   //     password: password,
//   //   };

//   return await fetch("https://api.extremecloudiq.com/account/external", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: "Bearer " + token_main_account,
//     },
//   })
//     .then((data) => data.json())
//     .then((data) => {
//       console.log(data);
//       return data;
//     })
//     .catch((error) => console.warn(error));
// }

// export default function HomePage({ token_main_account }) {
//   const [allAccounts, setAllAccounts] = useState([]);

//   getAllExternalAccounts(token_main_account).then((data) => {
//     console.log(data);
//     setAllAccounts(data);
//   });
//   //   const all_accounts = getAllExternalAccounts(token_main_account).then((data) =>
//   //     console.log(data.map((item) => console.log(item.name)))
//   //   );

//   //   console.log(all_accounts);
//   //   console.log(typeof all_accounts);

//   return (
//     <div className="homepage">
//       <ul>
//         {allAccounts.map((account) => (
//           <li key={account.id}> {account.name} </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token_main_account: props.token_main_account,
      allAccounts: [],
    };
  }

  async getAllExternalAccounts() {
    return await fetch("https://api.extremecloudiq.com/account/external", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + this.state.token_main_account,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.warn(error));
  }

  componentDidMount() {
    this.getAllExternalAccounts().then((data) =>
      this.setState({ allAccounts: data })
    );
  }

  render() {
    return (
      <div className="homepage">
        <ul>
          {this.state.allAccounts.map((account) => (
            <li key={account.id}> {account.name} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;

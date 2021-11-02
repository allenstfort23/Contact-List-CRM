const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			currentUser: null,
			contacts: [],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// THIS FUNCTION FECTHES USERS FROM THE BACKEND AND PLACE THE INFO INTO STORE USERS.
			getUser: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/user");
					const user = await response.json();
					console.log(user);
					setStore({ users: user });
				} catch (error) {
					alert("PLEASE TRY AGAIN", error);
				}
			},
			// THIS FUNCTION FECTHES CONTACT INFO FROM THE BACKEND AND PLACE THE INFO INTO STORE CONTACTS.
			getContact: async () => {
				fetch(process.env.BACKEND_URL + "/api/contact")
					.then(response => response.json())
					.then(data => {
						let contact = [];
						data.forEach((item, index, array) => {
							contact.push(item);
						});
						setStore({ contacts: contact });
						console.log(data);
					});
			},

			login: async (email, password) => {
				// let myToken = localStorage.getItem("token");
				const response = await fetch(`${process.env.BACKEND_URL}/api/token`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password })
				});
				console.log("This it the login function");
				if (!response.status == 401) {
					throw "Invalid credentials";
				} else if (response.status == 400) {
					throw "Invalid email or password";
				}

				const data = response.json();

				localStorage.setItem("jwt-token", data.token);
				console.log(localStorage);
				setStore({ currentUser: email, token: data.token, username: data.username });
				return data.token;
			},

			//THIS FUNCTION CREATES A USER TO PLACE A USER INTO STORE USER.
			createUser: async (first_name, last_name, email, username, password) => {
				let response = await fetch(process.env.BACKEND_URL + "/api/user", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ first_name, last_name, email, username, password })
				});
				if (!response.ok) {
					throw Error("Invalid input");
				}
				let newUser = await response.json();
				console.log("THIS IS THE NEW USER FUNCTION", newUser);

				return newUser;
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getInfo: () => {
				getActions().getContact();
				getActions().getUser();
			}
		}
	};
};

export default getState;

import {requestServer} from "./request";


export function login(username, password) {
	return requestServer({
		url: "/api/login",
		method: "POST",
		data: {username, password},
	});
}

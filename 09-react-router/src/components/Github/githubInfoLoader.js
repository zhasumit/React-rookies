export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/zhasumit");
	return response.json();
};

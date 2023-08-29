export async function User() {
  await new Promise((resolve) => setTimeout(resolve, 8000));

  const response = await fetch(
    "https://api.github.com/users/salvatoreDeploy",
    {}
  );
  const user = await response.json();

  return (
    <div>
      <h1>User - GitHub</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

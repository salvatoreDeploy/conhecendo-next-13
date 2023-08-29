export async function Repo() {
  /* Por pdarão o next so vai exebir um conteudo que depende de uma chamda a api ou alguma promisse quando todas serem executadas. */

  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(
    "https://api.github.com/users/salvatoreDeploy/repos",
    {}
  );
  const repository = await response.json();

  return (
    <div>
      <h1>Repository - GitHub</h1>
      <pre>{JSON.stringify(repository, null, 2)}</pre>
    </div>
  );
}

export default async function apiCalls() {
  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return await fetch("https://front-test.beta.aviasales.ru/search")
    .then((res) => res.json())
    .then(
      async (res) =>
        await fetch(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${res.searchId}`
        ).then((res) => res.json())
    )
    .then(async (res) => {
      if (res === "Server error" || !res) {
        await timeout(1200);
        window.location.reload();
      }
      return res;
    })
    .catch((err) => window.location.reload());
}

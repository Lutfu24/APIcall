const btn = document.querySelector(".btn");
const tbody = document.querySelector(".tbody");

const callData = () => {
  const apiData = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) =>
      data.map(
        (item) =>
          (tbody.innerHTML += ` <tr>
    <td>${item?.id}</td>
    <td>${item?.name}</td>
    <td>${item?.username}</td>
    <td>${item?.email}</td>
    <td>${item?.address?.street}</td>
    <td>${item?.address?.city}</td>
</tr>`)
      )
    );
  return apiData;
};

btn.addEventListener("click", callData);

const riderIdDelete = document.getElementById('riderId');
const deletebut = document.getElementById('delete');

async function deleteRider(findId) {
  const url = "http://localhost:8080/delete/rider/" + findId;
  // const resp = await fetch(url);
  // const data = await resp.json();
  console.log(url);

  await fetch(url, {
    method: "DELETE",
    // body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  console.log(findId + "findId");
  riderIdDelete.reset;
  reloadTable();
}

deletebut.addEventListener("click", async () => {
  if (confirm('Do you want to delete this record,\nrider Id: ' + riderId.value)) {
    await deleteRider(riderIdDelete.value);
  }
})





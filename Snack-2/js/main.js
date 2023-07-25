// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi,
//  e da queste vuole generare una falsa lista di invitati con nome e cognome.

const namesList = ["Giorgio", "Nicola", "Simona", "Rebecca", "Carlotta"];
const surnamesList = ["Rossi", "Bianchi", "Insigne", "Bernardeschi", "Totti"];

for (let i = 0; i < namesList.length; i++) {
  const nameList = namesList[i];
  for (let i = 0; i < surnamesList.length; i++) {
    const surnameList = surnamesList[i];
    const fakePerson = nameList + " " + surnameList;
    const fakeList = document.getElementById("fake-list");
    const fakeListItem = document.createElement("li");
    fakeListItem.innerHTML = fakePerson;
    fakeList.append(fakeListItem);
  }
}

function searchDoc() {
  let query = document.getElementById("searchBox").value.toLowerCase();
  let formArea = document.getElementById("formArea");
  document.getElementById("output").innerText = "";

  if (query.includes("partnership")) {
    formArea.innerHTML = `
      <h3>Partnership Agreement Form</h3>
      <input type="text" id="partner1" placeholder="Partner 1 Name">
      <input type="text" id="partner2" placeholder="Partner 2 Name">
      <input type="text" id="business" placeholder="Business Name">
      <button onclick="generatePartnership()">Generate</button>
    `;
  }

  else if (query.includes("rent")) {
    formArea.innerHTML = `
      <h3>Rent Agreement Form</h3>
      <input type="text" id="landlord" placeholder="Landlord Name">
      <input type="text" id="tenant" placeholder="Tenant Name">
      <input type="text" id="property" placeholder="Property Address">
      <button onclick="generateRent()">Generate</button>
    `;
  }

  else if (query.includes("affidavit")) {
    formArea.innerHTML = `
      <h3>Affidavit Form</h3>
      <input type="text" id="name" placeholder="Name">
      <input type="text" id="address" placeholder="Address">
      <button onclick="generateAffidavit()">Generate</button>
    `;
  }

  else {
    formArea.innerHTML = "<p>No document found. Try partnership, rent agreement, or affidavit.</p>";
  }
}

function generatePartnership() {
  let p1 = document.getElementById("partner1").value;
  let p2 = document.getElementById("partner2").value;
  let business = document.getElementById("business").value;
  let date = new Date().toLocaleDateString();

  document.getElementById("output").innerText =
`PARTNERSHIP AGREEMENT

This Partnership Agreement is made between ${p1} and ${p2} for the business named ${business}.

Both partners agree to share profits and responsibilities equally.

Date: ${date}`;
}

function generateRent() {
  let landlord = document.getElementById("landlord").value;
  let tenant = document.getElementById("tenant").value;
  let property = document.getElementById("property").value;
  let date = new Date().toLocaleDateString();

  document.getElementById("output").innerText =
`RENT AGREEMENT

This agreement is made between ${landlord} (Landlord) and ${tenant} (Tenant) for the property located at ${property}.

The tenant agrees to pay rent as decided by both parties.

Date: ${date}`;
}

function generateAffidavit() {
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let date = new Date().toLocaleDateString();

  document.getElementById("output").innerText =
`AFFIDAVIT

I, ${name}, resident of ${address}, do hereby solemnly affirm that the above statement is true and correct to the best of my knowledge.

Date: ${date}`;
}

document.getElementById("studentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const name = document.getElementById("name").value;
  const student_class = document.getElementById("student_class").value;
  const guardian_name = document.getElementById("guardian_name").value;
  const phone = document.getElementById("phone").value;
  const institute = document.getElementById("institute").value;
  const address = document.getElementById("address").value;
  const group = document.getElementById("group").value;

  // Validate phone number
  if (phone.length !== 11 || isNaN(phone)) {
    document.getElementById("responseMessage").innerText = "Phone number must be exactly 11 digits and contain only numbers.";
    document.getElementById("responseMessage").style.color = "red";
    return;
  }

  // Generate student ID
  let lastId = 1234; // Replace with actual logic to get the last ID (e.g., from the server or database)
  let newId = parseInt(student_class + (lastId + 1).toString().slice(1));

  // Prepare data to be sent (you can replace this part with an actual API call)
  let formData = {
    name: name,
    id: newId,
    student_class: student_class,
    guardian_name: guardian_name,
    phone: phone,
    institute: institute,
    address: address,
    group: group
  };

  // Display success message (or send to server)
  document.getElementById("responseMessage").innerText = `Data Submitted Successfully! The ID is: ${newId}`;
  document.getElementById("responseMessage").style.color = "green";

  // Log the data to the console (In real-world use, replace this with an actual POST request to your server)
  console.log(formData);

  // Clear the form after submission
  document.getElementById("studentForm").reset();
});

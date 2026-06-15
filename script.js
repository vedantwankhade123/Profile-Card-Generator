const form = document.querySelector("form");
const createProfile = document.querySelector("#create-btn");
const userCard = document.querySelector(".cards");
const input1 = document.querySelector("#inp1");
const input2 = document.querySelector("#inp2");
const input3 = document.querySelector("#image-url");

let arr = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@gmail.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    email: "priya.patel22@gmail.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohan Verma",
    email: "rohan.verma99@gmail.com",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Ananya Singh",
    email: "ananya.singh@gmail.com",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Karan Mehta",
    email: "karan.mehta07@gmail.com",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

let editIndex = null;

const ui = () => {
  userCard.innerHTML = "";

  arr.forEach((element, index) => {
    userCard.innerHTML += `
      <div class="card-container">
        <div class="profile-card">
          <img src="${element.image}" alt="Profile Image Here" />
          <div class="about">
            <h3>${element.name}</h3>
            <h4>${element.email}</h4>
          </div>
        </div>

        <div class="action-buttons">
          <button onclick="editCard(${index})" class="edit-btn">
            <i class="ri-pencil-fill"></i>
            Edit Profile
          </button>

          <button onclick="deleteCard(${index})" class="delete-btn">
            <i class="ri-delete-bin-fill"></i>
          </button>
        </div>
      </div>
    `;
  });
};

ui();

form.addEventListener("submit", (events) => {
  events.preventDefault();

  let name = input1.value;
  let email = input2.value;
  let image = input3.value;

  if (name.trim() === "" || email.trim() === "" || image.trim() === "") return;

  if (editIndex !== null) {
    arr[editIndex] = {
      name,
      email,
      image,
    };

    editIndex = null;
    createProfile.textContent = "Create Profile";
  } else {
    arr.push({
      name,
      email,
      image,
    });
  }

  ui();
  form.reset();
});

let deleteCard = (index) => {
  arr.splice(index, 1);
  ui();
};

let editCard = (index) => {
  input1.value = arr[index].name;
  input2.value = arr[index].email;
  input3.value = arr[index].image;

  editIndex = index;

  createProfile.textContent = "Update Profile";
};

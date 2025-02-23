const navItems = document.querySelectorAll('.nav-item');
const teamSections = document.querySelectorAll('.team-section');
const highlighter = document.querySelector('.highlighter');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const selectedItemDisplay = document.querySelector('.selected-item');

// Function to move the highlighter to the clicked link
function moveHighlighter(element) {
  const rect = element.getBoundingClientRect();
  highlighter.style.width = `${rect.width}px`;
  highlighter.style.left = `${element.offsetLeft}px`;
}

// Set initial position of the highlighter to the first active link
const activeLink = document.querySelector('.nav-item.active');
if (activeLink) {
  moveHighlighter(activeLink);
}

// Add click event listener to each link
navItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default anchor behavior

    // Update the selected item's name (only visible on mobile)
    selectedItemDisplay.textContent = this.textContent;

    // Update active link styling
    navItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    moveHighlighter(this);

    // Hide all team sections and show the selected one
    teamSections.forEach(section => {
      section.style.display = 'none';
    });

    // Show the team section based on the clicked link
    const team = this.getAttribute('data-team');
    document.getElementById(team).style.display = 'block';

    // Close the mobile menu after clicking a link (for Android and mobile views)
    if (window.innerWidth <= 1200) {
      navLinks.classList.remove('show');
    }
  });
});

// Toggle menu for smaller screens
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Adjust highlighter position on window resize
window.addEventListener('resize', () => {
  const currentActive = document.querySelector('.nav-item.active');
  if (currentActive) {
    moveHighlighter(currentActive);
  }
});

//team section.js
const teamMembers = {
  "tech-team": [
    { name: "Anushka Dubey", role: " (Lead)   ", img: "images/team-members/Anushka Dubey 23bce11492.jpg", linkedin: "https://www.linkedin.com/in/anushka-dubey-7b4501215/" },
    { name: "Shauryaraje Yadav ", role: "(Senior Associate)", img: "shauryaraje yadav.png", linkedin: "https://www.linkedin.com/in/shauryaraje/" },
    { name: "Sparsh Khatwani", role: "(Senior Associate)", img: "../images\team-members\SparshKhatwani_techteam - Sparsh Khatwani 23bce10090.jpg", linkedin: "https://www.linkedin.com/in/sparshkhatwani" },
    { name: "Manya Raghuwanshi", role: "(Junior Associates)", img: "manya raghuwanshi.png", linkedin: "https://www.linkedin.com/in/manya-raghuwanshi-9928a9332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Nikhil Hegde", role: "(Junior Associates)", img: "manya raghuwanshi.png", linkedin: "http://www.linkedin.com/in/nikhil-hegde-897b59328" },
    { name: "Kalyanee Deshmukh", role: "(Junior Associates)", img: "../images/team-members/kalyaneedeshmukh_techteam - KALYANEE DESHMUKH 24BAC10046.jpg", linkedin: "https://www.linkedin.com/in/kalyanee-deshmukh-9b3798339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ],
  "operating-team": [
    { name: " Arnav Nehra   ", role: " (Lead)", img: "arnav nehra.png", linkedin: "https://www.linkedin.com/in/arnav-nehra-76bb2327a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: " Shelly Sharma   ", role: "(Co-Lead) ", img: "shelly .png", linkedin: "https://www.linkedin.com/in/shelly-sharma2004" },
    { name: "Krishna Agrawal", role: " (Senior Associate) ", img: "IMG_20240420_192742 - Krishna Agrawal 23mei10032.jpg", linkedin: "https://www.linkedin.com/in/krishna-agrawal-147210280" },
    { name: " Prerna ", role: " (Senior Associate) ", img: "prerna.png", linkedin: "www.linkedin.com/in/prerna-singh-7b40792a2" },
    { name: "Priyanshu", role: " (Senior Associate) ", img: "priyanshu.png", linkedin: "http://linkedin.com/in/gauri-makker" },
    { name: "Yokesh T", role: " (Junior Associates). ", img: "Yokesh T.png",linkedin: "https://www.linkedin.com/in/yokesh-t-98937a303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Mehul khare", role: " (Junior Associates). ", img: "MEHUL KHARE.png", linkedin: "https://www.linkedin.com/in/mehul-khare-35a566311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ],

  "creative-team": [
    { name: "Abhishek Kumar", role: " (Lead)", img: "Abhishek Kumar _ Operations Team - Abhishek Kumar 23bhi10052.png", linkedin: "https://www.linkedin.com/in/eve-white" },
    { name: "Mohammed Shaariq", role: "(Co-Lead)", img: "MD SHAARIQ.png", linkedin: "https://www.linkedin.com/in/frank-green" },
    { name: "Krish Kumar", role: "(Junior Associates)", img: "krish kumar.png", linkedin: "https://www.linkedin.com/in/krish-verma-784944330/" },
    { name: " Vedant Patidar", role: "(Junior Associates)", img: "vedant patidar.png", linkedin: "https://www.linkedin.com/in/vedant-patidar-2ba146242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Manya Jajodia", role: "(Junior Associates)", img: "manya jajodia.png", linkedin: "https://www.linkedin.com/in/manya-jajodia-28747033a/" },
    { name: "Yug Pareek", role: "(Junior Associates)", img: "yug pareek.png", linkedin: "https://www.linkedin.com/in/yug-pareek-4657a2330/" },
    { name: "Mokshad Bunde", role: "(Junior Associates)", img: "mokshad bunde.png", linkedin: "https://www.linkedin.com/in/mokshad-bunde-baa8b130a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ],
  "outreach-team": [
    { name: "Lokesh Bagade", role: "(Lead)", img: "WhatsApp Image 2024-07-27 at 15.59.50_ac0ecdae - Lokesh Bhanudas Bagade 23BCE11746.jpg", linkedin: "https://www.linkedin.com/in/lokeshbagade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Manaswi Suraskar", role: "(Co-Lead)", img: "Manaswi Suraskar  - Manaswi Shantaram Suraskar 23bcy10258.jpg", linkedin: "https://www.linkedin.com/in/manaswi-suraskar-bb131b28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: " Tarpita Karnam", role: "(Senior Associate)  ", img: "IMG-20240727-WA0008 - Tarpita Karnam 23bhi10124.jpg", linkedin: "https://www.linkedin.com/in/tarpita-karnam-8208b5287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: " Iram Khan ", role: "(Senior Associate)  ", img: "iram khan.png", linkedin: "https://www.linkedin.com/in/iram-khan-3a4b80280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Niharika Pandey", role: "(Senior Associate)  ", img: "niharika.png", linkedin: "https://www.linkedin.com/in/niharika-pandey-4335132b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Anamika", role: "(Senior Associate)  ", img: "anamika.png", linkedin: "https://www.linkedin.com/in/shanmugha-priya-6050b131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "shanmugha priya", role: "(Junior Associates)  ", img: "shanmugha priya.png", linkedin: "https://www.linkedin.com/in/shanmugha-priya-6050b131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Dhananjay Yadav", role: "(Senior Associate)  ", img: "dhananjay yadav.png", linkedin: "https://www.linkedin.com/in/dhananjay-yadav-a5b06b2b9/" },
    { name: " ANANYA GAUR", role: "(Senior Associate)  ", img: "ananya gaur.png", linkedin: "www.linkedin.com/in/ananya-gaur-268b0528b"},
    { name: "Manasvi Maheshwari", role: "(Senior Associate)  ", img: "manasvi maheshwari.png", linkedin: "https://www.linkedin.com/in/manasvi-maheshwari-5085a8279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ],
  "media-team": [
    { name: "Swarup Futane", role: "(Lead)", img: "swarup futane.jpeg", linkedin: "https://www.linkedin.com/in/leo-harris" },
    { name: "Naman Gupta", role: "(Co-Lead)", img: "naman gupta.jpg", linkedin: "https://www.linkedin.com/in/naman-gupta-3983b2238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Hardik Verma  ", role: "(Senior Associate)  ", img: "WhatsApp Image 2024-07-27 at 15.32.19_03c4b81e - Hardik Verma 23bai10915.jpg", linkedin: "https://www.linkedin.com/in/kathy-nelson" },
    { name: "Tuhin Rakshit  ", role: "(Senior Associate) ", img: "tuhin raksit.png", linkedin: "https://www.linkedin.com/in/kathy-nelson" },
    { name: "Dheeraj Jangi  ", role: "(Junior Associates)  ", img: "dheeraj jangir.png", linkedin: "www.linkedin.com/in/dheeraj-jangir-9754b3325" },
    { name: "Yash Janiyani ", role: "(Junior Associates)  ", img: "yash janiyani.png", linkedin: "www.linkedin.com/in/yash-janiyani-279326271" },

  ],
  "content-team": [
    { name: "Deepti Srivastava", role: "(Lead)", img: "deepti.png", linkedin: "https://www.linkedin.com/in/deepti-srivastava-325329314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Mudra khuje ", role: "(Senior Associate)", img: "mudra khuje.png", linkedin: "https://www.linkedin.com/in/mudra-khuje-b30b08204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Yoshita Purohit ", role: "(Junior Associates)", img: "yoshita purohit.png", linkedin: "https://www.linkedin.com/in/yoshita-purohit-047449327" },
    { name: "Anuja Nag", role: "(Senior Associate)", img: "anuja nag.png", linkedin: "https://www.linkedin.com/in/anuja-nag-618380312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Abha Singh", role: "(Junior Associates)", img: "abha singh.png", linkedin: "www.linkedin.com/in/abha-singh-60739031a" },

  ],
  "corporate-team": [
    { name: "Adarsh Singh", role: "(Lead)", img: "Adarsh - Adarsh Singh 23BAI11390.png", linkedin: "www.linkedin.com/in/ adarsh-singh-go" },
    { name: "Dev Vrat", role: "(Co-Lead)", img: "dev vrat.png", linkedin: "https://www.linkedin.com/in/dev-vrat-9a0781276/" },
    { name: "Dhananjay Yadav", role: "(Senior Associate)", img: "Dhananjay Yadav.png", linkedin: "https://www.linkedin.com/in/dhananjay-yadav-a5b06b2b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Atharv Patil", role: "(Junior Associates)", img: "atharv .png", linkedin: "https://www.linkedin.com/in/atharv-patil-782ba5324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ],
  "Anchoring-team": [
    { name: "Vartika Tiwari", role: "(Lead)", img: "IMG20231023110546 - Vartika Tiwari 23bhi10070.jpg", linkedin: "https://www.linkedin.com/in/paul-walker" },
    { name: "Manishika Gupta", role: "(Co-Lead)", img: "IMG_2111 - MANISHIKA GUPTA 23BAI11303.jpeg", linkedin: "https://www.linkedin.com/in/quinn-adams" },
    { name: "RITIKA SINGH", role: "(Junior Associates)", img: "ritika singh .png", linkedin: "https://www.linkedin.com/in/ritika-singh-838a33276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Snigdha Josh", role: "(Junior Associates)", img: "snighdhaa joshi.png", linkedin: "https://www.linkedin.com/in/snigdha-joshi-4a4b76311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Muskan Pathak", role: "(Junior Associates)", img: "muskan pathak.png", linkedin: "https://www.linkedin.com/in/quinn-adams" },
    { name: "Aman Ankur", role: "(Junior Associates)", img: "aman ankur.png", linkedin: "www.linkedin.com/in/aa3111s" },

  ]
};

// Function to generate team cards
function generateTeamCards(teamId, teamContainer, members) {
  if (!teamContainer) {
    console.error(`Container for team ${teamId} not found.`);
    return;
  }

  teamContainer.innerHTML = '';  // Clear previous team cards

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('team-card');

    card.innerHTML = `
      <img class="member-img" src="${member.img}" alt="${member.name}">
      <div class="name">${member.name}</div>
      <div class="role">${member.role}</div>
      <a href="${member.linkedin}" target="_blank" class="linkedin-icon">
        <img src="assets/linkedin.svg" alt="LinkedIn" class="linkedin-logo">
      </a>
    `;

    teamContainer.appendChild(card);
  });
}

// Generate cards for each team
Object.keys(teamMembers).forEach(team => {
  const teamContainer = document.getElementById(`${team}Container`);
  if (teamContainer) {
    generateTeamCards(team, teamContainer, teamMembers[team]);
  }
});

// Default team: Show the first team
const defaultTeam = 'tech-team';
document.getElementById(defaultTeam).style.display = 'block';

// Menu toggle functionality for smaller screens
const menuIcon = document.getElementById('menu-icon');
const navLinksFirst = document.getElementById('nav-links-first');
const navItemsFirst = document.querySelectorAll('.nav-links-first a');

// Toggle menu open/close on clicking the menu icon
menuIcon.addEventListener('click', () => {
  navLinksFirst.classList.toggle('open');
});

// Close menu when a nav item is clicked
navItemsFirst.forEach(item => {
  item.addEventListener('click', () => {
    navLinksFirst.classList.remove('open');
  });
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0"; // Fade out effect
    setTimeout(() => {
      preloader.style.display = "none"; // Remove preloader from view
      document.querySelector(".content").style.display = "block"; // Show content
    }, 500); // Duration of fade-out effect
  }, 3900); // Delay the loader for 3 seconds (adjust as needed)
});

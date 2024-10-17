$(document).ready(function() {
  // Navbar scroll behavior
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
          $(".netflix-navbar").css("background", "#0C0C0C");
      } else {
          $(".netflix-navbar").css("background", "transparent");
      }
  });

  // Play button logic to navigate to the comic reading page
  $('#nextButton').on('click', function() {
      // Logic to go to the next comic section
      window.location.href = 'nextComic.html'; // Change this to the page you want to navigate to
  });
});

// Handle card scaling (if needed)
function position(id) {
  var card = document.getElementsByClassName('card')[id];
  console.log(id);
}

// Comic section navigation logic
let currentPage = 1;
const totalPages = 4; // Number of pages per section

// Handle next and previous button clicks
document.getElementById('nextButton').addEventListener('click', function() {
  if (currentPage < totalPages) {
      currentPage++;
      updateComicPages();
  } else {
      // Handle end of the section or load new section logic
      window.location.href = 'nextComicSection.html'; // Example of navigating to the next section
  }
});

document.getElementById('prevButton').addEventListener('click', function() {
  if (currentPage > 1) {
      currentPage--;
      updateComicPages();
  }
});

// Function to update the displayed comic pages
function updateComicPages() {
  for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
          document.getElementById('page' + i).style.display = 'block';
      } else {
          document.getElementById('page' + i).style.display = 'none';
      }
  }
}

// Initially show the first page and hide the rest
updateComicPages();
